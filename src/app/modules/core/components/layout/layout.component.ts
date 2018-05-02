import { Notification } from './../../../notification/models/notifications';
import { NotificationService } from './../../../notification/services/notification.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild, AfterContentInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss'],
})
export class LayoutComponent implements OnDestroy, AfterContentInit {

    @ViewChild('notificationNav') notificationNav: MatSidenav;

    mobileQuery: MediaQueryList;
    notifications: Notification[] = [];
    unreadNotifications = 0;

    private _mobileQueryListener: () => void;
    public env = environment;

    constructor(private notif: NotificationService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.retrievedNotification();
        this.listenNotification();
    }

    openNotification(): void {
      this.notificationNav.toggle();
    }

    setNotificationRead(): void {
      this.notifications.forEach(item => item.unread = false);
      this.unreadNotifications = 0;
    }

    retrievedNotification(): void {
      // TODO: Use real user id
      this.notif.getNotificationsForUser(1).subscribe(
        data => {
          this.notifications = data;
          this.unreadNotifications = this.notifications.filter(notification => notification.unread).length;
        }
      );
    }

    listenNotification(): void {
      // TODO: Use real user id
      this.notif.listenNewNotificationForUser(1).subscribe(
        data => {
          this.notifications.push(data);
          this.unreadNotifications++;
        }
      );
    }

    ngAfterContentInit(): void {
      this.notificationNav.onClose.subscribe(data => this.setNotificationRead());
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
