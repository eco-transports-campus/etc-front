import { Notification } from './../../../notification/models/notifications';
import { NotificationService } from './../../../notification/services/notification.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
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

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
