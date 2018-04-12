import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BugComponent } from './components/bug/bug.component';

// Material
import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
} from '@angular/material';

export const COMPONENTS = [
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    BugComponent
];

const MATERIAL_MODULES = [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...MATERIAL_MODULES
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [
        MediaMatcher
    ]
})
export class CoreModule { }
