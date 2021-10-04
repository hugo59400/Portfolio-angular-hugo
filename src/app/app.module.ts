import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './profile/navbar/navbar.component';
import { IntroComponent } from './profile/intro/intro.component';
import { PresentationComponent } from './profile/presentation/presentation.component';
import { FooterComponent } from './profile/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatIconModule } from '@angular/material/icon';
import { WorkComponent } from './profile/work/work.component';
import {InViewportModule} from 'ng-in-viewport';
import { SkillsComponent } from './profile/skills/skills.component';
import { EducationComponent } from './profile/education/education.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProjectsComponent } from './profile/projects/projects.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { InterestsComponent } from './profile/interests/interests.component';
import { ContactComponent } from './profile/contact/contact.component';
import { AddaComponent } from './profile/projects/adda/adda.component';
import { BtsProjetComponent } from './profile/projects/btsprojet/btsprojet.component';
import { WindevComponent } from './profile/projects/windev/windev.component';
import { HtmlPortfolioComponent } from './profile/projects/htmlportfolio/htmlportfolio.component';
import { VaisseauComponent } from './profile/projects/vaisseau/vaisseau.component';
import { PortfolioComponent } from './profile/projects/portfolio/portfolio.component';
import { MainComponent } from './profile/main/main.component';
import { ArticlesComponent } from './profile/articles/articles.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { TennisComponent } from './profile/projects/tennis/tennis.component';
import { BestioleComponent } from './profile/projects/bestiole/bestiole.component';
import { CvComponent } from './profile/projects/cv/cv.component';

import { JeugeoComponent } from './profile/projects/jeugeo/jeugeo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    PresentationComponent,
    FooterComponent,
    WorkComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    InterestsComponent,
    ContactComponent,
    AddaComponent,
    BtsProjetComponent,
    WindevComponent,
    HtmlPortfolioComponent,
    VaisseauComponent,
    PortfolioComponent,
    MainComponent,
    ArticlesComponent,
    TennisComponent,
    BestioleComponent,
    CvComponent,
    JeugeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    MatIconModule,
    InViewportModule,
    MatProgressBarModule,
    TagCloudModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
