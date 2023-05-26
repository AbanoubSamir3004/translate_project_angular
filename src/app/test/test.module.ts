import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { MainModule } from 'app/main.module';
 
const routes: Routes = [{ path: '', component: TestComponent }];
const googleLoginOptions = {
  scope: 'profile email',
  plugin_name: 'login' //you can use any name here
};
@NgModule({
  declarations: [TestComponent],
  exports: [TestComponent],
  imports: [
    RouterModule.forChild(routes),
    MainModule,
   ],

 

})
export class TestModule { }
