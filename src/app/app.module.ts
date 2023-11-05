import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EasyWordleComponent } from './easy-wordle/easy-wordle.component';
import { HardWordleComponent } from './hard-wordle/hard-wordle.component';
import { ImageWordleComponent } from './game/image-wordle/image-wordle.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { UniquePokemonComponent } from './unique-pokemon/unique-pokemon.component';
import { UserSystemComponent } from './user/user-system/user-system.component';
import { HomeComponent } from './home/home.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { FormsModule } from '@angular/forms';
import { ImageService } from './services/image.service';
import { PokemonApiServices } from './services/pokemonApi.service';
import { HttpClientModule } from '@angular/common/http';
import { LogginUserComponent } from './user/loggin-user/loggin-user.component';
import { GenerationComponent } from './game/generation/generation.component';
import { HelpsComponent } from './game/helps/helps.component';
import { WordGameComponent } from './game/word-game/word-game.component';
import { HtmlElementService } from './services/htmlElement.service';
import { RankingOfScoresComponent } from './user/ranking-of-scores/ranking-of-scores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    EasyWordleComponent,
    HardWordleComponent,
    ImageWordleComponent,
    PokedexComponent,
    UniquePokemonComponent,
    UserSystemComponent,
    HomeComponent,
    UserCreateComponent,
    LogginUserComponent,
    GenerationComponent,
    HelpsComponent,
    WordGameComponent,
    RankingOfScoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ImageService, PokemonApiServices, HtmlElementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
