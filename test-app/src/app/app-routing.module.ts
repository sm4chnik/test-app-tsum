import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from "./pages/first-page/first-page.component";
import {SecondPageComponent} from "./pages/second-page/second-page.component";
import {MyGuard} from "./secondPage.guard";


const routes: Routes = [{
  path: '', component: FirstPageComponent
}, {
  path: 'secondPage', component: SecondPageComponent, canActivate: [MyGuard]
}, {
  path: '**', redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
