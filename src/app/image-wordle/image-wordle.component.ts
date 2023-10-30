import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonApiServices } from '../services/pokemonApi.service';
import { UsuariosServices } from '../services/users.service';

@Component({
  selector: 'app-image-wordle',
  templateUrl: './image-wordle.component.html',
  styleUrls: ['./image-wordle.component.scss']
})
export class ImageWordleComponent {
  guessPokemon:Pokemon;
  namePokemon:string = "";
  generation:string ="";
  idSelected:number =0;
  show =false;
  showButton: boolean = false;
  showFinish:boolean = false;
  imgPokemon = "";

  pokemonList: Pokemon[] = [];
  filteredList: Pokemon[] = [];
  lives: number = 6;
  words: string[] = [];
  guessed:string[] =[];

  imageScore:number = 0;

  constructor(private pokemonApiServices:PokemonApiServices,private userService:UsuariosServices){}

  generationSelected(generation: any) {
    this.generation = generation;
    this.renderTable();
  }

  filterPokemons(text: string) {
    this.filteredList.splice(0, this.filterPokemons.length - 1);
    if (text.trim() !== '') {
      this.filteredList = this.pokemonList.filter((pokemon) =>
        pokemon.getName.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      this.filteredList = this.pokemonList;
    }
  }

  async renderTable() {
    this.pokemonList.splice(0, this.pokemonList.length);
    await this.pokemonApiServices.listaSpeciesPokemon(this.generation);
    this.pokemonList = this.pokemonApiServices.pokemonArray;
    this.filterPokemons('');
  }
  generateRandomNumber() {
    this.idSelected = Math.floor(Math.random() * (this.pokemonApiServices.pokemonArray.length - 0 + 1));
  }

  randomPokemon() { //guarda el pokemon a elegido aleatoriamente
    this.guessPokemon = this.pokemonApiServices.pokemonArray[this.idSelected];
    console.log(this.guessPokemon);
  }

  showGame() {
   this.userService.user.setTryImage(this.userService.user.getTryImage+1);
    this.startGame();
    if(this.guessPokemon == undefined || this.idSelected == 0){
      this.showButton = true;
    }
    this.show = true;
    this.lives = 6;
  }

  startGame(){
    
    let frontBack = Math.floor(Math.random() * 2);;
    this.generateRandomNumber();
    this.randomPokemon();
    if(frontBack == 1){
      this.imgPokemon = this.guessPokemon.getBackSprite;
    }else{
      this.imgPokemon = this.guessPokemon.getFrontSprite;
    }
    
  }

  validationIfPokemon() {
    let flag = false;
    for (let i = 0; i < this.pokemonApiServices.pokemonArray.length && flag == false; i++) {
      if (this.namePokemon.toLowerCase() === this.pokemonApiServices.pokemonArray[i].getName.toLowerCase()) {
        flag = true;
      }
    }
    return flag;
  }

  searchPokemon(){
    if(this.validationIfPokemon()){
      if(this.guessPokemon.getName.toLowerCase() ==this.namePokemon.toLowerCase() && this.lives !=0){
        this.imageScore++;
        this.words.splice(0,this.words.length);
        if(this.userService.user.getImageScore<this.imageScore){
          this.userService.user.setImageScore(this.imageScore);
        } 
        this.guessed.push(this.guessPokemon.getFrontSprite);
        this.startGame();
      }else if(this.guessPokemon.getName.toLowerCase() !=this.namePokemon.toLowerCase() && this.lives !=0){
        this.lives--;
        this.words.push(this.namePokemon);
        console.log(this.words)
      }else if(this.lives == 0){
        this.showFinish = true;
        this.words.splice(0,this.words.length);
        this.guessed.splice(0, this.guessed.length);
      }
    }
  }

  finishGame(){
    this.userService.user.setMaxScoreImage(this.userService.user.getMaxScoreImage + this.imageScore);
    this.show = false;
    this.showFinish = false;
  }

}
