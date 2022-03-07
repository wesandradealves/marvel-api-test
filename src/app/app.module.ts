import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DataService } from './services/services.service';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './views/character/character.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatInputModule } from '@angular/material/input';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TopBarComponent } from './components/top-bar/top-bar.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    PageNotFoundComponent,
    SearchBarComponent,
    HeroCardComponent,
    SpinnerComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DataService, {
    provide: LocationStrategy , useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
