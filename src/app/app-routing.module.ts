import { NgModule, createComponent } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EasyWordleComponent } from './easy-wordle/easy-wordle.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HomeComponent } from './home/home.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UniquePokemonComponent } from './unique-pokemon/unique-pokemon.component';
import { LogginUserComponent } from './loggin-user/loggin-user.component';

const routes: Routes = [
  /* { path: '', component: WordleDificilComponent }, */
  { path: 'wordleFacil', component: EasyWordleComponent },
  { path: 'home', component: UserCreateComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokemon', component: UniquePokemonComponent },
  { path: 'create', component:  HomeComponent },
  {path: 'logging', component: LogginUserComponent},
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