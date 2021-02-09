import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AboutUsComponent } from './about-us/about-us.component';
import { AllBlogpostsComponent } from './all-blogposts/all-blogposts.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LegalPageComponent } from './legal-page/legal-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactPageComponent},
  { path: 'legal', component: LegalPageComponent},
  { path: 'all-blogpost', component: AllBlogpostsComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];
=======
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
    // canActivate: [IsAdminLoggedGuard]
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

>>>>>>> 4ec120956a7fcbb3a2fac7dc16c65b06c7314bfe

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
