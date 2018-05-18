import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';



export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: AppComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, { enableTracing: true }
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
