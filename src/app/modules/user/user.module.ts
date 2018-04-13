import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

// Components
import { UserComponent } from './components/user/user.component';

// Material
import {

} from '@angular/material';

export const COMPONENTS = [
    UserComponent
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
export class UserModule { }
