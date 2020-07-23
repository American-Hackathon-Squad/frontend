import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShelterListComponent } from './shelterListComponent';
import { ShelterService } from '../shelter.service';
 
@NgModule({
  declarations: [
    AppComponent,
    ShelterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShelterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
