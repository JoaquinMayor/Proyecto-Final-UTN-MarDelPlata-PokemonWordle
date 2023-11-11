import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Stats } from 'src/app/models/stats.model';
import { PokemonApiServices } from 'src/app/services/pokemonApi.service';
import { UsuariosServices } from 'src/app/services/users.service';

@Component({
  selector: 'app-word-game',
  templateUrl: './word-game.component.html',
  styleUrls: ['./word-game.component.scss']
})
export class WordGameComponent implements OnInit {
  generation: string = "0";
  show: boolean = false;
  showButton: boolean = false;
  showHelps: boolean = false;
  idSelected: number = 0;
  guessPokemon: Pokemon = new Pokemon(0, "", "", "", "", "", "", "", "", "", "", 0, 0, 0, 0, 0, 0, 0, 0);//Para comparar con el pokemon que puso el usuario, es el pokemon que salio aleatorio

  namePokemon: string = "";//nombre del pokemon ingresado por el usuario
  index: number = 0;
  words: string[] = []; //palabras usadas
  limit: number = 6; // Establece la cantidad máxima de li que se mostrarán
  pokeUsados: Stats[] = [];
  cantLetters: number[] = []; //arreglo paralelo para saber acierto
  letters: string[] = [];
  lives: number = 6;
  pokemonList: Pokemon[] = [];
  filteredList: Pokemon[] = [];
  badFinish: boolean = false;
  goodFinish: boolean = false;
  @ViewChild('nombreInput', { static: false }) //es un decorador de Angular que se utiliza para obtener una referencia a un elemento del DOM o a un componente hijo.
  nombreInput!: ElementRef; //ElementRef es un tipo de Angular que representa una referencia a un elemento del DOM.
  showTableHelp: boolean = false;
  acceptButton: boolean = false;
  acceptButtonPressed: boolean = false;
  showLoader: boolean = false;

  constructor(private pokemonApiServices: PokemonApiServices, private userService: UsuariosServices, private router: Router) { }
  ngOnInit(): void {
    if (this.router.url == "/wordleFacil") {
      this.showHelps = true;
    } else {
      this.showHelps = false;
    }
  }

  pikachuVoice() {
    if (this.namePokemon.toLowerCase() == "pikachu") {
      const audioPlayer = new Audio("../../../assets/pikachu.m4a");
      audioPlayer.play();
    }
  }

  startGame() {
    this.generateRandomNumber();
    this.randomPokemon();
    this.showButton = false;
  }

  generateRandomNumber() {
    this.idSelected = Math.floor(Math.random() * (this.pokemonApiServices.pokemonArray.length - 0 + 1));
  }

  randomPokemon() { //guarda el pokemon a elegido aleatoriamente
    this.guessPokemon = this.pokemonApiServices.pokemonArray[this.idSelected];
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

  confirm() {
    this.words.splice(0, this.wordColor.length);
    this.show = false;
    this.goodFinish = false;
    this.badFinish = false;
  }

  validateGlobal() {
    if (this.validationIfPokemon()) {
      if (this.validateName() === false && this.lives != 0) {
        this.pokemonWritter();
        this.wordCorrect();
        this.lives--;
      } else if (this.validateName() === true && this.lives != 0) {
        this.pokemonWritter();
        this.wordCorrect();
        this.bestScore();
        this.goodFinish = true;
      }
      if (this.lives == 0) {
        this.bestScore();
        this.badFinish = true;
      }
      this.showButton = false;
      this.nombreInput.nativeElement.value = '';
      this.namePokemon = "";
    }
  }

  resetValidation() {
    this.cantLetters.splice(0, this.cantLetters.length);
    this.letters.splice(0, this.letters.length);
    for (let i = 0; i < this.guessPokemon.getName.length; i++) {
      if (!this.letters.includes(this.guessPokemon.getName.charAt(i))) {
        this.cantLetters.push(1);
        this.letters.push(this.guessPokemon.getName.charAt(i));
      } else {
        for (let j = 0; j < this.letters.length; j++) {
          if (this.guessPokemon.getName.charAt(i) == this.letters[j]) {
            this.cantLetters[j] = this.cantLetters[j] + 1;
          }
        }
      }
    }
    return ""
  }

  validateName() {
    let flag = false;
    if (this.namePokemon.toLowerCase() === this.guessPokemon.getName.toLowerCase()) {
      flag = true;
    }
    return flag;
  }

  wordCorrect() {
    this.words.push(this.namePokemon);
  }

  wordColor(letter: string, i: number, u: number) {
    let pos = this.letters.indexOf(letter.toLowerCase());
    if (letter.toLowerCase() === this.guessPokemon.getName.charAt(i).toLowerCase()) {
      this.cantLetters[pos] = this.cantLetters[pos] - 1;
      return "verde";
    } else if (this.guessPokemon.getName.toLowerCase().includes(letter.toLowerCase()) && this.cantLetters[pos] > 0) {
      for (let k = i; k < this.words[u].length; k++) {
        if (this.words[u].charAt(k).toLowerCase() === letter.toLowerCase() && this.guessPokemon.getName.charAt(k).toLowerCase() === letter.toLowerCase() && this.cantLetters[pos] == 1) {
          return "gris";
        } else {
          this.cantLetters[pos] = this.cantLetters[pos] - 1;
          return "naranja";
        }
      }
    } else {
      return "gris"; // Puedes devolver un color por defecto o una cadena vacía si no se cumple ninguna condición
    }
    return
  }



  generationSelected(generation: any) {
    if (generation === "0") {
      this.generatedRandomGeneration();
    } else {
      this.generation = generation;
      this.renderTable();
    }
  }

  generatedRandomGeneration() {
    let aleatorio = Math.floor(Math.random() * 9) + 1
    this.generation = aleatorio.toString();
    this.renderTable();
  }

  async showGame() {
    if (this.generation == "0") {
      let aleatorio = Math.floor(Math.random() * 9) + 1
      this.generation = aleatorio.toString();
    }
    await this.pokemonApiServices.listaSpeciesPokemon(this.generation);
    this.showButton = true; // Mostrar la imagen de carga
    this.words.splice(0, this.words.length);
    this.pokeUsados.splice(0, this.pokeUsados.length);
    this.acceptButtonPressed = false;
    setTimeout(() => {
      this.startGame();
      this.showButton = false; // Ocultar la imagen de carga después de 3 segundos
    }, 3500);

    if (this.guessPokemon == undefined || this.idSelected == 0) {
      this.showButton = true;
    }

    this.show = true;
    this.lives = 6;
  }

  pokemonWritter() {
    this.pokemonApiServices.datesJsonSinglePokeGame(this.namePokemon);
    this.pokeUsados = this.pokemonApiServices.stats;
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

  selectPokemon(name: string) {
    this.namePokemon = name.toLowerCase();
  }

  acceptHelp() {
    if (!this.acceptButtonPressed && this.lives > 0) {
      this.acceptButtonPressed = true;
      this.showTableHelp = true;
      this.lives--;
    }
  }

  closeTableHelp() {
    this.showTableHelp = false;
  }

  bestScore() {
    switch (this.lives) {
      case 0:
        if (this.router.url === "/wordleFacil") {
          this.userService.user.setTryEasy(this.userService.user.getEasyScore + 1);
          this.userService.editUser(this.userService.user);
        } else {
          this.userService.user.setTryHard(this.userService.user.getHardScore);
          this.userService.editUser(this.userService.user);
        }
        break;
      case 1:
        if (this.router.url === "/wordleFacil") {
          this.userService.user.setEasyScore(this.userService.user.getEasyScore + 1);
          this.userService.user.setTryEasy(this.userService.user.getTryEasy + 1);
          this.userService.user.setMaxScoreEasy(this.userService.user.getMaxScoreEasy + 5);
          this.userService.editUser(this.userService.user);
        } else {
          this.userService.user.setHardScore(this.userService.user.getHardScore + 1);
          this.userService.user.setTryHard(this.userService.user.getTryHard + 1);
          this.userService.user.setMaxScorehard(this.userService.user.getMaxScoreHard + 5);
          this.userService.editUser(this.userService.user);
        }
        break;
      case 2:
        if (this.router.url === "/wordleFacil") {
          this.userService.user.setEasyScore(this.userService.user.getEasyScore + 1);
          this.userService.user.setTryEasy(this.userService.user.getTryEasy + 1);
          this.userService.user.setMaxScoreEasy(this.userService.user.getMaxScoreEasy + 10);
          this.userService.editUser(this.userService.user);
        } else {
          this.userService.user.setHardScore(this.userService.user.getHardScore + 1);
          this.userService.user.setTryHard(this.userService.user.getTryHard + 1);
          this.userService.user.setMaxScorehard(this.userService.user.getMaxScoreHard + 10);
          this.userService.editUser(this.userService.user);
        }
        break;
      case 3:
        if (this.router.url === "/wordleFacil") {
          this.userService.user.setEasyScore(this.userService.user.getEasyScore + 1);
          this.userService.user.setTryEasy(this.userService.user.getTryEasy + 1);
          this.userService.user.setMaxScoreEasy(this.userService.user.getMaxScoreEasy + 15);
          this.userService.editUser(this.userService.user);
        } else {
          this.userService.user.setHardScore(this.userService.user.getHardScore + 1);
          this.userService.user.setTryHard(this.userService.user.getTryHard + 1);
          this.userService.user.setMaxScorehard(this.userService.user.getMaxScoreHard + 15);
          this.userService.editUser(this.userService.user);
        }
        break;
      case 4:
        if (this.router.url === "/wordleFacil") {
          this.userService.user.setEasyScore(this.userService.user.getEasyScore + 1);
          this.userService.user.setTryEasy(this.userService.user.getTryEasy + 1);
          this.userService.user.setMaxScoreEasy(this.userService.user.getMaxScoreEasy + 20);
          this.userService.editUser(this.userService.user);
        } else {
          this.userService.user.setHardScore(this.userService.user.getHardScore + 1);
          this.userService.user.setTryHard(this.userService.user.getTryHard + 1);
          this.userService.user.setMaxScorehard(this.userService.user.getMaxScoreHard + 20);
          this.userService.editUser(this.userService.user);
        }
        break;
      case 5:
        if (this.router.url === "/wordleFacil") {
          this.userService.user.setEasyScore(this.userService.user.getEasyScore + 1);
          this.userService.user.setTryEasy(this.userService.user.getTryEasy + 1);
          this.userService.user.setMaxScoreEasy(this.userService.user.getMaxScoreEasy + 25);
          this.userService.editUser(this.userService.user);
        } else {
          this.userService.user.setHardScore(this.userService.user.getHardScore + 1);
          this.userService.user.setTryHard(this.userService.user.getTryHard + 1);
          this.userService.user.setMaxScorehard(this.userService.user.getMaxScoreHard + 25);
          this.userService.editUser(this.userService.user);
        }
        break;
      case 6:
        if (this.router.url === "/wordleFacil") {
          this.userService.user.setEasyScore(this.userService.user.getEasyScore + 1);
          this.userService.user.setTryEasy(this.userService.user.getTryEasy + 1);
          this.userService.user.setMaxScoreEasy(this.userService.user.getMaxScoreEasy + 30);
          this.userService.editUser(this.userService.user);
        } else {
          this.userService.user.setHardScore(this.userService.user.getHardScore + 1);
          this.userService.user.setTryHard(this.userService.user.getTryHard + 1);
          this.userService.user.setMaxScorehard(this.userService.user.getMaxScoreHard + 30);
          this.userService.editUser(this.userService.user);
        }
        break;
      case 7:
        if (this.router.url === "/wordleFacil") {
          this.userService.user.setEasyScore(this.userService.user.getEasyScore + 1);
          this.userService.user.setTryEasy(this.userService.user.getTryEasy + 1);
          this.userService.user.setMaxScoreEasy(this.userService.user.getMaxScoreEasy + 35);
          this.userService.editUser(this.userService.user);
        } else {
          this.userService.user.setHardScore(this.userService.user.getHardScore + 1);
          this.userService.user.setTryHard(this.userService.user.getTryHard + 1);
          this.userService.user.setMaxScorehard(this.userService.user.getMaxScoreHard + 35);
          this.userService.editUser(this.userService.user);
        }
        break;
    }
  }
}
