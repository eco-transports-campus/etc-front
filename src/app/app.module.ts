import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Modules
import { CoreModule } from './modules/core/core.module';
import { StatsModule } from './modules/stats/stats.module';
import { TravelModule } from './modules/travel/travel.module';
import { UserModule } from './modules/user/user.module';
import { NotificationModule } from './modules/notification/notification.module';

// Components
import { AboutComponent } from './modules/core/components/about/about.component';
import { BugComponent } from './modules/core/components/bug/bug.component';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { HomeComponent } from './modules/core/components/home/home.component';
import { RequestTravelComponent } from './modules/travel/components/request-travel/request-travel.component';
import { AddTravelComponent } from './modules/travel/components/add-travel/add-travel.component';
import { StatsComponent } from './modules/stats/components/stats/stats.component';
import { UserComponent } from './modules/user/components/user/user.component';
import { NotificationsListComponent } from './modules/notification/components/list/notifications-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'bug', component: BugComponent },
    { path: 'travel/add', component: AddTravelComponent },
    { path: 'travel/request', component: RequestTravelComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'account', component: UserComponent },
    { path: 'notifications', component: NotificationsListComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        BrowserModule,
        BrowserAnimationsModule,

        RouterModule,
        HttpClientModule,
        // Custom modules
        CoreModule,
        StatsModule,
        TravelModule,
        UserModule,
        NotificationModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
