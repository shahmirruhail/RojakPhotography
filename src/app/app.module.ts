import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAndNavbarComponent } from './MyComponents/header-and-navbar/header-and-navbar.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { GalleryComponent } from './MyComponents/gallery/gallery.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { ContactUsComponent } from './MyComponents/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAndNavbarComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
