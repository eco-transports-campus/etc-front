import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { AddTravelComponent } from './components/add-travel/add-travel.component';
import { RequestTravelComponent } from './components/request-travel/request-travel.component';

// Material
import {
} from '@angular/material';

export const COMPONENTS = [
    AddTravelComponent,
    RequestTravelComponent
];

const MATERIAL_MODULES = [
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...MATERIAL_MODULES
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: []
})
export class TravelModule { }
