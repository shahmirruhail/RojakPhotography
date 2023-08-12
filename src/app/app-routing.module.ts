import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { GalleryComponent } from './MyComponents/gallery/gallery.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { ContactUsComponent } from './MyComponents/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page
  { path: 'gallery', component: GalleryComponent }, // Gallery page
  { path: 'about-us', component: AboutUsComponent }, // About Us page
  { path: 'contact-us', component: ContactUsComponent }, // Contact Us page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
