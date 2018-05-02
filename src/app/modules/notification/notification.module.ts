import { NotificationService } from './services/notification.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { NotificationsListComponent } from './components/list/notifications-list.component';

// Material
import {
    MatDividerModule
} from '@angular/material';

export const COMPONENTS = [
    NotificationsListComponent
];

const MATERIAL_MODULES = [
    MatDividerModule
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...MATERIAL_MODULES
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [NotificationService]
})
export class NotificationModule { }
