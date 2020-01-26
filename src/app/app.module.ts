import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoryTitleComponent} from './components/category/category-title.component';
import {BannerComponent} from './components/banner/banner.component';
import {HeaderComponent} from './components/header/header.component';
import {FormationsComponent} from './components/formations/formations.component';
import {SkillsComponent} from './components/skills/skills.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';
import {ExperiencesComponent} from './components/experiences/experiences.component';
import {ProjectsComponent} from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    // Internal components
    HeaderComponent,
    CategoryTitleComponent,
    BannerComponent,
    FormationsComponent,
    HobbiesComponent,
    ExperiencesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Angular Material
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
