import { BrowserModule } from '@angular/platform-browser';
// modules
import { NgModule } from '@angular/core';
import { MyPrimeNgComponentsModule } from './MyPrimeNgComponentsModule';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyPrimeNgComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
