import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EasyWordleComponent } from './easy-wordle/easy-wordle.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  /* { path: '', component: WordleDificilComponent }, */
  { path: 'wordleFacil', component: EasyWordleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pokedex', component: PokedexComponent },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }