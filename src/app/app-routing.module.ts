import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/test',
    pathMatch: 'full',
  },
 
 

  {
    path: 'test',
    loadChildren: () =>
      import('app/test/test.module').then((m) => m.TestModule),
  },

 

  {
    path: '**',
    redirectTo: '/test',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
