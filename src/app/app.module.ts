import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { EasyWordleComponent } from './easy-wordle/easy-wordle.component';
import { HardWordleComponent } from './hard-wordle/hard-wordle.component';
import { ImageWordleComponent } from './image-wordle/image-wordle.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { UniquePokemonComponent } from './unique-pokemon/unique-pokemon.component';
import { UserSystemComponent } from './user-system/user-system.component';

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
    UserSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
