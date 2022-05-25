import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from '@app/components/search/search.module';
import { WeatherModule } from '@app/pages/weather/weather.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SearchModule, WeatherModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
