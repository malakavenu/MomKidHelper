import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'class', component: ClassDetailComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
