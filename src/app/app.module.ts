import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule,
  MatExpansionModule,
  MatRadioModule,
  MatDialogModule,
  MatTableModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { ApiService } from './api.service';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MapComponent} from './map.Component';
import {LocationComponent} from './location.component';
import { AgmCoreModule } from '@agm/core';
import {MapService} from './map.service';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'location', component: LocationComponent },
  { path: 'map', component: MapComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    MapComponent,
    LocationComponent

  ],
  imports: [
    MatExpansionModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatDialogModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNOF4P03xSadwLsndmKVqcHTUl70qoFYU'
    })
  ],
  providers: [MapService,ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
