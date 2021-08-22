import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllHerosPageComponent } from './components/all-heros-page/all-heros-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: AllHerosPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'heroes/:user_name/:user_phone/:country/:date',
    component: AllHerosPageComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
