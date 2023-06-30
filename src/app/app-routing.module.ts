import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company/company.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: '', redirectTo: '/company', pathMatch: 'full' },
  { path: 'company', component: CompanyComponent },
  { path: 'staff', component: StaffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

