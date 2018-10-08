import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from './components/users/users.component';
import {StartSectionComponent} from './components/start-section/start-section.component';


const routes: Routes =[
    {path: 'users', component: UsersComponent},
    {path: '', component: StartSectionComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [ RouterModule ],

})
export class AppRoutingModule { }
