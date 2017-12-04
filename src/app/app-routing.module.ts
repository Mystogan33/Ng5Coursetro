import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { MainHomeComponent } from './main-home/main-home.component';

const routes: Routes = [
  {
    path: '',
    component: MainHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'bucketList',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about/:id',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'third',
    component: ThirdComponentComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
