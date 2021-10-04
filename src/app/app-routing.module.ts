import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddaComponent} from './profile/projects/adda/adda.component';
import {MainComponent} from './profile/main/main.component';
import {BtsProjetComponent} from './profile/projects/btsprojet/btsprojet.component';
import {PortfolioComponent} from './profile/projects/portfolio/portfolio.component';
import {HtmlPortfolioComponent} from './profile/projects/htmlportfolio/htmlportfolio.component';
import {WindevComponent} from './profile/projects/windev/windev.component';
import {VaisseauComponent} from './profile/projects/vaisseau/vaisseau.component';
import {TennisComponent} from './profile/projects/tennis/tennis.component';
import {BestioleComponent} from './profile/projects/bestiole/bestiole.component';
import { JeugeoComponent } from './profile/projects/jeugeo/jeugeo.component';
import { CvComponent } from './profile/projects/cv/cv.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'adda', component: AddaComponent },
  { path: 'btsprojet', component: BtsProjetComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'htmlportfolio', component: HtmlPortfolioComponent },
  { path: 'windev', component: WindevComponent },
  { path: 'vaisseau', component: VaisseauComponent },
  { path: 'tennis', component: TennisComponent },
  { path: 'bestiole', component: BestioleComponent },
  { path: 'cv', component: CvComponent},
  { path: 'jeu_geo', component: JeugeoComponent},



  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
