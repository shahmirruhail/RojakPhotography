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

import { FormResponseService } from './form-response.service';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [FormResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
