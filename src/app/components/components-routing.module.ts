import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BoardsComponent } from './boards/boards.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    // children: [
    //   {
    //     path: '',
    //     component: HomeComponent,
    //     outlet: 'ejemplo'
    //   },
    //   {
    //     path: '',
    //     component: BoardsComponent
    //   }
    // ]                             
  },
  {
    path: 'boards',
    component: BoardsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
