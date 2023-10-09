import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EasyWordleComponent } from './easy-wordle/easy-wordle.component';
import { HardWordleComponent } from './hard-wordle/hard-wordle.component';
import { ImageWordleComponent } from './image-wordle/image-wordle.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { UniquePokemonComponent } from './unique-pokemon/unique-pokemon.component';
import { UserSystemComponent } from './user-system/user-system.component';
import { HomeComponent } from './home/home.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule } from '@angular/forms';
import { ImageService } from './services/image.service';
import { UsuariosServices } from './services/users.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ImageService, UsuariosServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
