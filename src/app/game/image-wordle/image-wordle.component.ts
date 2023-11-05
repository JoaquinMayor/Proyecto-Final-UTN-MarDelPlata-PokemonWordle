import { Component, ElementRef, ViewChild } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonApiServices } from '../../services/pokemonApi.service';
import { UsuariosServices } from '../../services/users.service';

@Component({
  selector: 'app-image-wordle',
  templateUrl: './image-wordle.component.html',
  styleUrls: ['./image-wordle.component.scss']
})
export class ImageWordleComponent {
  guessPokemon: Pokemon;
  namePokemon: string = "";
  generation: string = "0";
  idSelected: number = 0;
  show = false;
  showButton: boolean = false;
  showFinish: boolean = false;
  showVictory: boolean = false;
  imgPokemon = "";
  guessedList: Pokemon[] = [];
  pokemonList: Pokemon[] = [];
  filteredList: Pokemon[] = [];
  lives: number = 6;
  words: string[] = [];
  selectedNumbers: number[] = [];
  imageScore: number = 0;
  pokemonTypes: string[] = [
    'normal',
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy',
  ];

  constructor(private pokemonApiServices: PokemonApiServices, private userService: UsuariosServices) { }

  @ViewChild('nombreInput', { static: false })
  nombreInput!: ElementRef;
  addGuessedPokemon() {
    this.guessedList.push(this.guessPokemon);
  }
  pikachuVoice() {
    if (this.namePokemon.toLowerCase() == "pikachu") {
      const audioPlayer = new Audio("../../../assets/pikachu.m4a");
      audioPlayer.play();
    }
  }

  generationSelected(generation: any) {
    this.generation = generation;
    this.renderTable();
  }

  filterPokemons(text: string) {
    this.filteredList.splice(0, this.filteredList.length - 1);
    if (text.trim() !== '' && text.trim().length >= 2) {
      this.filteredList = this.pokemonList.filter((pokemon) =>
        pokemon.getName.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      this.filteredList = [];
    }
  }

  async renderTable() {
    this.pokemonList.splice(0, this.pokemonList.length);
    await this.pokemonApiServices.listaSpeciesPokemon(this.generation);
    this.pokemonList = this.pokemonApiServices.pokemonArray;
    this.filterPokemons('');
  }

  generateRandomNumber() {
    const availableNumbers = this.getAvailableNumbers();
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    this.idSelected = availableNumbers[randomIndex];
    this.selectedNumbers.push(this.idSelected);
  }

  getAvailableNumbers(): number[] {
    const availableNumbers: number[] = [];
    for (let i = 0; i < this.pokemonApiServices.pokemonArray.length; i++) {
      if (!this.selectedNumbers.includes(i)) {
        availableNumbers.push(i);
      }
    }
    return availableNumbers;
  }

  randomPokemon() {
    this.guessPokemon = this.pokemonApiServices.pokemonArray[this.idSelected];
    if (this.guessPokemon == undefined) {
      this.showVictory = true;
    }
  }

  async showGame() {
    if (this.generation == "0") {
      let aleatorio = Math.floor(Math.random() * 9) + 1
      this.generation = aleatorio.toString();
    }
    await this.pokemonApiServices.listaSpeciesPokemon(this.generation);

    this.showButton = true;
    this.words.splice(0, this.words.length);
    setTimeout(() => {
      this.startGame();
    }, 3000);

    if (this.guessPokemon == undefined || this.idSelected == 0) {
      this.showButton = true;
    }

    this.show = true;
    this.lives = 6;
  }

  startGame() {
    let frontBack = Math.floor(Math.random() * 2);;
    this.generateRandomNumber();
    this.randomPokemon();
    this.showButton = false;
    if (this.guessPokemon.getBackSprite != null) {
      if (frontBack == 1) {
        this.imgPokemon = this.guessPokemon.getBackSprite;
      } else {
        this.imgPokemon = this.guessPokemon.getFrontSprite;
      }
    } else {
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

  searchPokemon() {
    if (this.validationIfPokemon()) {
      if (this.guessPokemon.getName.toLowerCase() == this.namePokemon.toLowerCase() && this.lives != 0) {
        this.imageScore++;
        this.words.splice(0, this.words.length);
        if (this.userService.user.getImageScore < this.imageScore) {
          this.userService.user.setImageScore(this.imageScore);
        }
        this.addGuessedPokemon();
        this.startGame();
      } else if (this.guessPokemon.getName.toLowerCase() != this.namePokemon.toLowerCase() && this.lives != 0) {
        this.lives--;
        this.words.push(this.namePokemon);
      }

      if (this.lives == 0) {
        this.showFinish = true;
        this.userService.user.setTryImage(this.userService.user.getTryImage + 1);
      }

      this.nombreInput.nativeElement.value = '';
      this.namePokemon = "";
    }
  }

  finishGame() {
    this.userService.user.setMaxScoreImage(this.userService.user.getMaxScoreImage + this.imageScore);
    this.show = false;
    this.showFinish = false;
  }

  selectPokemon(name: string) {
    this.namePokemon = name.toLowerCase();
  }

  addBounceEffect(img: any) {
    img.classList.add('bounce');
    setTimeout(() => {
      img.classList.remove('bounce');
    }, 1000);
  }

  isPokemonType(type: string): string {
    let backColor = '';
    for (const pokemonType of this.pokemonTypes) {
      if (type.includes(pokemonType)) {
        backColor = pokemonType;
        break;
      }
    }
    return backColor;
  }
}
