import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { HtmlElementService } from 'src/app/services/htmlElement.service';
import { PokemonApiServices } from 'src/app/services/pokemonApi.service';
import { UsuariosServices } from 'src/app/services/users.service';

@Component({
  selector: 'app-word-game',
  templateUrl: './word-game.component.html',
  styleUrls: ['./word-game.component.scss']
})
export class WordGameComponent {
generation:string ="";
  show: boolean = false;
  idSelected:number = 0;
  guessPokemon:Pokemon = new Pokemon(0,"","","","","","","","",0,0,0,0,0,0,0,0);//Para comparar con el pokemon que puso el usuario, es el pokemon que salio aleatorio
  namePokemon:string="";//nombre del pokemon ingresado por el usuario
  index:number = 0;
  words:string[]=[]; //palabras usadas
  cantLetters:number[]=[]; //arreglo paralelo para saber acierto
  letters:string[] = [];

  constructor(private pokemonApiServices: PokemonApiServices, private userService: UsuariosServices, private htmlService: HtmlElementService) { }

  startGame() {
    this.generateRandomNumber();
    this.randomPokemon();
  }

  generateRandomNumber() {
    console.log(this.pokemonApiServices.pokemonArray);
    console.log(this.pokemonApiServices.pokemonArray.length);
    this.idSelected = Math.floor(Math.random() * (this.pokemonApiServices.pokemonArray.length - 0 + 1));
    console.log(this.idSelected);
  }

  randomPokemon() { //guarda el pokemon a elegido aleatoriamente
    this.guessPokemon = this.pokemonApiServices.pokemonArray[this.idSelected];
    this.pokemonApiServices.setSinglePokemon(this.guessPokemon);
    console.log(this.guessPokemon);
  }

  validationIfPokemon() {
    let flag = false;
    for (let i = 0; i < this.pokemonApiServices.pokemonArray.length && flag == false; i++) {
      console.log("Entre al for")
      if (this.namePokemon.toLowerCase() === this.pokemonApiServices.pokemonArray[i].getName.toLowerCase()) {
        flag = true;
      } else {
        //alert("El nombre no pertenece a un Pokemon o no es de esta generacion");
      }
    }
    return flag;
  }

  validateGlobal() {
    console.log(this.guessPokemon);
    console.log(this.pokemonApiServices.pokemonArray.length);
    if (this.validationIfPokemon()) {
      console.log("entre al primer if")
      if (this.validateName() === false) {
        console.log("entre al segundo if");
        this.wordCorrect();
      }
    }
  }

  validateName() {
    let flag = false;
    if (this.namePokemon.toLowerCase() === this.guessPokemon.getName.toLowerCase()) {
      flag = true;
    }
    return flag;
  }

  ulGenerator() {
    let container = this.htmlService.getElementRef("container");
    container.nativeElement.innerHTML = `<ul class="contenedorPalabraCompleta" id="${this.index}" name="${this.index}"></ul>`;
  }

  wordCorrect() {
    this.words.push(this.namePokemon);
  }

  wordColor(letter: string, i: number): string {
    if (letter.toLowerCase() === this.guessPokemon.getName.charAt(i).toLowerCase()) {
      return "verde";
    } else if (this.guessPokemon.getName.toLowerCase().includes(letter.toLowerCase())) {
      return "naranja";
    } else {
      return "gris";
    }
  }

  ifLogging() {
    this.userService.ifLogging();
  }

  generationSelected(generation: any) {
    this.generation = generation;
  }

  async showGame() {
    this.startGame();
    this.show = true;
  }
}
