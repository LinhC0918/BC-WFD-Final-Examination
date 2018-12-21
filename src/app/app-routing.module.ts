import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AwesomeComponent} from './awesome/awesome.component';
import {CreateAwesomeComponent} from './create-awesome/create-awesome.component';
import {EditAwesomeComponent} from './edit-awesome/edit-awesome.component';
import {DetailAwesomeComponent} from './detail-awesome/detail-awesome.component';

const routes: Routes = [
  {path: 'awesome', component: AwesomeComponent},
  {path: 'awesome/:id', component: DetailAwesomeComponent},
  {path: 'awesome/create', component: CreateAwesomeComponent},
  {path: 'awesome/:id/edit', component: EditAwesomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
