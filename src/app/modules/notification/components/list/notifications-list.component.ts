import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Notification } from '../../models/notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit, OnDestroy {

  private notificationSub$: Subscription;
  notifications: Notification[] = [];
  unreadNotifications = 0;

  constructor(private notif: NotificationService) { }

  ngOnInit() {
    // TODO: use real user ID
    this.notif.getNotificationsForUser(1).subscribe(
      notifications => {
        notifications.forEach(item => {
          this.notifications.push(item);
          this.unreadNotifications = item.unread ? this.unreadNotifications++ : this.unreadNotifications;
        });
      }
    );

     // TODO: use real user ID
    this.notificationSub$ = this.notif.listenNewNotificationForUser(1).subscribe(
      notification => {
        this.notifications.push(notification);
        this.unreadNotifications = notification.unread ? this.unreadNotifications++ : this.unreadNotifications;
      }
    );
  }

  ngOnDestroy() {
    this.notificationSub$.unsubscribe();
  }
}
