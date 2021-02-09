import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EditorComponent} from "./editor/editor.component"
import {SidebarComponent } from "./sidebar/sidebar.component"
import { IsAdminLoggedGuard } from './is-admin-logged.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [IsAdminLoggedGuard]
  },
  {
    path: 'editor',
    component: EditorComponent,
    canActivate: [IsAdminLoggedGuard]
  },
  {
    path: 'nav',
    component: SidebarComponent
  },
  // {
  //   path : "*.*", 
  //   component: LoginComponent
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
