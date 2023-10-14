import { Component } from '@angular/core';
import { PokemonApiServices } from '../services/pokemonApi.service';
import { UsuariosServices } from '../services/users.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-easy-wordle',
  templateUrl: './easy-wordle.component.html',
  styleUrls: ['./easy-wordle.component.scss']
})
export class EasyWordleComponent {
  generation: string = '';
  show: boolean = false;
  idSelected:number = 0;
  guessPokemon:Pokemon = new Pokemon(0,"","","","","","","","",0,0,0,0,0,0,0,0);//Para comparar con el pokemon que puso el usuario, es el pokemon que salio aleatorio
  namePokemon:string="";//nombre del pokemon ingresado por el usuario

  constructor(private pokemonApiSevices: PokemonApiServices, private userService:UsuariosServices){}

  choiceGeneration(event: any){
    this.generation = event.target.value;
  }

  showGame(){
    this.show = true;
    this.generateRandomNumber();
  }

  generateRandomNumber(){
    this.pokemonApiSevices.listaSpeciesPokemon(this.generation);
    this.idSelected = Math.floor(Math.random() * (this.pokemonApiSevices.pokemonArray.length - 0 +1));
  }

  selectPokemon(num:number){
    this.guessPokemon = this.pokemonApiSevices.pokemonArray[this.idSelected];
  }

  ifLogging() {
    this.userService.ifLogging();
  }
}
