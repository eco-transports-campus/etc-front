import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { StatsComponent } from './components/stats/stats.component';

// Material
import {

} from '@angular/material';

export const COMPONENTS = [
    StatsComponent
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
export class StatsModule { }
