import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EasyWordleComponent } from './easy-wordle/easy-wordle.component';
import { PokedexComponent } from './pokedex/pokedex.component';

const routes: Routes = [
  /* { path: '', component: WordleDificilComponent }, */
  { path: 'wordleFacil', component: EasyWordleComponent },
  { path: 'pokedex', component: PokedexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }