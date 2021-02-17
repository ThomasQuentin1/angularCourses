import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EditorComponent} from "./editor/editor.component"
import {SidebarComponent } from "./sidebar/sidebar.component"
import { IsAdminLoggedGuard } from './is-admin-logged.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllBlogpostsComponent } from './all-blogposts/all-blogposts.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LegalPageComponent } from './legal-page/legal-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: LandingPageComponent 
  },
  { 
    path: 'about-us', 
    component: AboutUsComponent 
  },
  { 
    path: 'contact', 
    component: ContactPageComponent
  },
  { 
    path: 'legal', 
    component: LegalPageComponent
  },
  { 
    path: 'all-blogpost', 
    component: AllBlogpostsComponent 
  },
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
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
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
