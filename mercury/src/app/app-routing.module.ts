import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'companies',
    loadChildren: () => import('./features/companies/companies.module').then(m => m.CompaniesModule),
  },
  {
    path: 'job-applications',
    loadChildren: () => import('./features/jobs/jobs.module').then(m => m.JobsModule),
  },
  {
    path: "**",
    redirectTo: "job-applications"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
