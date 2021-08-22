import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllHerosPageComponent } from './components/all-heros-page/all-heros-page.component';
import { FilterComponent } from './components/filter/filter.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './matrial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesService } from './services/services.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AllHerosPageComponent, FilterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
