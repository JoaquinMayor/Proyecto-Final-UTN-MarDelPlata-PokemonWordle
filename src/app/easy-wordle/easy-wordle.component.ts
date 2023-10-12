import { Component } from '@angular/core';
import { PokemonApiServices } from '../services/pokemonApi.service';

@Component({
  selector: 'app-easy-wordle',
  templateUrl: './easy-wordle.component.html',
  styleUrls: ['./easy-wordle.component.scss']
})
export class EasyWordleComponent {
  generation: string = '';
  show: boolean = false;

  constructor(private pokemonApiSevices: PokemonApiServices){}

  choiceGeneration(event: any){
    this.generation = event.target.value;
  }

  showGame(){
    this.show = true;
    this.generateRandomNumber();
  }

  generateRandomNumber(){
    this.pokemonApiSevices.listaSpeciesPokemon(this.generation);
    console.log(this.pokemonApiSevices.listaSpeciesPokemon(this.generation));
  }
}
