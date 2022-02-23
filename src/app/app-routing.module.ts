import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then(m=> m.PersonalModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    //component: ErrorPageComponent
    redirectTo: '/personal/listado'
  }
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
