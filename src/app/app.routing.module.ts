import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoolersComponent } from './poolers/poolers.component';
// import { PlayoffComponent } from './playoff/playoff.component';
import { PoolerComponent } from './poolers/pooler.component';
import { SignInComponent } from './signin/signin.component';

const routes: Routes = [
    { path: 'poolers', component: PoolersComponent },
    { path: 'signin', component: SignInComponent },
    { path: '', redirectTo: '/signin', pathMatch: 'full' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }