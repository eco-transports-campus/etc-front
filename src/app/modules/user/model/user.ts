import { NotificationPreferences } from './../../notification/models/notification-preferences';
import { DailyCarTrips } from './daily-car-trips';
import { Notification } from '../../notification/models/notifications';

export interface User {
  'id': number;
  'firstName': string;
  'lastName': string;
  'contact': {
    'universityMail': string;
    'secondaryMail': string;
    'phone': string;
  };
  'notifications': Notification[];
  'dailyCarTrips': DailyCarTrips[];
  'notificationPreferences': NotificationPreferences[];
}
