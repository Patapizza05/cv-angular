import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {CategoryTitleComponent} from './components/category/category-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryTitleComponent,
    BannerComponent,
    FormationsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
