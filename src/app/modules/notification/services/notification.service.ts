import { Notification } from './../models/notifications';
import { User } from './../../user/model/user';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { map, flatMap, delay, filter } from 'rxjs/operators';

@Injectable()
export class NotificationService {

  private notifications$: Subject<Notification>;

  constructor(private http: HttpClient) {
    // TODO: Link this subject to a websocket
    this.notifications$ = new Subject<Notification>();
  }

  public getNotificationsForUser(id: number): Observable<Notification[]> {
    return this.http.get<User>(environment.api + '/users/' + id)
      .pipe(
        map(user => user.notifications)
      );
  }

  public getUnreadNotificationsForUser(id: number): Observable<Notification[]> {
    return this.http.get<User>(environment.api + '/users/' + id)
      .pipe(
        map(user => user.notifications),
        map(notifications => notifications.filter(notification => notification.unread))
      );
  }

  public markNotificationsAsReadForUser(userId: number, notificationsId: number[]): void {
    // TODO : Use a real server-side implementation
  }

  public listenNewNotificationForUser(userId: number): Observable<Notification> {
    // TODO: Replace with this.notifications$ as observable + filter.

    // Fake notification.
    const notification = <Notification>{
      id: 0,
      date: Date.now(),
      title: 'Nouvelle recommandation',
      content: 'Nous avons trouvé une personne avec qui covoiturer pour votre trajet "Maison".',
      preferenceId: 1,
      unread: true
    };

    return of(notification).pipe(delay(5000));
  }

}
