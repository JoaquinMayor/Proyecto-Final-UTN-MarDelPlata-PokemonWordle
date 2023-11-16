import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EasyWordleComponent } from './easy-wordle/easy-wordle.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HomeComponent } from './home/home.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UniquePokemonComponent } from './unique-pokemon/unique-pokemon.component';
import { LogginUserComponent } from './user/loggin-user/loggin-user.component';
import { UserSystemComponent } from './user/user-system/user-system.component';
import { HardWordleComponent } from './hard-wordle/hard-wordle.component';
import { ImageWordleComponent } from './game/image-wordle/image-wordle.component';
import { RankingOfScoresComponent } from './user/ranking-of-scores/ranking-of-scores.component';
import { LoginGuard } from './guards/login-guard';
import { LogoutGuard } from './guards/logout-guard';

const routes: Routes = [
  { path: 'wordleDificil', component: HardWordleComponent },
  { path: 'wordleFacil', component: EasyWordleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedex/pokemon/:id', component: UniquePokemonComponent },
  { path: 'user/create', component: UserCreateComponent, canActivate: [LogoutGuard] },
  { path: 'user/logging', component: LogginUserComponent, canActivate: [LogoutGuard] },
  { path: 'user/modify/:id', component: UserSystemComponent, canActivate: [LoginGuard] },
  { path: 'imageGame', component: ImageWordleComponent },
  { path: 'ranking', component: RankingOfScoresComponent },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }