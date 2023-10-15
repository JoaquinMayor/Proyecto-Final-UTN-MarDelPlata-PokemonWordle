import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonApiServices } from 'src/app/services/pokemonApi.service';
import { UsuariosServices } from 'src/app/services/users.service';

@Component({
  selector: 'app-word-game',
  templateUrl: './word-game.component.html',
  styleUrls: ['./word-game.component.css']
})
export class WordGameComponent {

  @Input()generation: string = '';
  show: boolean = false;
  idSelected:number = 0;
  guessPokemon:Pokemon = new Pokemon(0,"","","","","","","","",0,0,0,0,0,0,0,0);//Para comparar con el pokemon que puso el usuario, es el pokemon que salio aleatorio
  namePokemon:string="";//nombre del pokemon ingresado por el usuario

  constructor(private pokemonApiSevices: PokemonApiServices, private userService:UsuariosServices){}

  startGame(){
    this.generateRandomNumber();
    this.randomPokemon();
  }

  async generateRandomNumber(){
    await this.pokemonApiSevices.listaSpeciesPokemon(this.generation);
    this.idSelected = Math.floor(Math.random() * (this.pokemonApiSevices.pokemonArray.length - 0 +1));
  }

  randomPokemon(){ //guarda el pokemon a elegido aleatoriamente
    this.guessPokemon = this.pokemonApiSevices.pokemonArray[this.idSelected];
  }

  validationIfPokemon(){
    let flag = false;
    for(let i = 0; i<this.pokemonApiSevices.pokemonArray.length && flag==false; i++){
      if(this.namePokemon===this.pokemonApiSevices.pokemonArray[i].getName){
        flag = true;
      }
    }
    return flag;
  }

  validateName(){
    let flag = false;
    if(this.namePokemon === this.guessPokemon.getName){
        flag = true;
    }else{

    }
  }

  wordCorrect(){
    let html = "";
    
     for (let i = 0; i < this.namePokemon.length; i++) {
      if (this.namePokemon.charAt(i) === this.guessPokemon.getName.charAt(i)) {
        html += `<li class="contenedorLetra verde">${this.namePokemon.charAt(i)}</li>`;
      } else if (this.namePokemon.charAt(i) !== this.guessPokemon.getName.charAt(i)) {
        html += `<li class="contenedorLetra naranja">${this.namePokemon.charAt(i)}</li>`;
      }else{
        html += `<li class="contenedorLetra">${this.namePokemon.charAt(i)}</li>`;
      }
      }

      document.getElementById("word")
  }


  ifLogging() {
    this.userService.ifLogging();
  }
}
