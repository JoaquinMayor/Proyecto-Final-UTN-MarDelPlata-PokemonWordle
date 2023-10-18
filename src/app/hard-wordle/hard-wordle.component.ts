import { Component } from '@angular/core';
import { UsuariosServices } from '../services/users.service';
import { PokemonApiServices } from '../services/pokemonApi.service';

@Component({
  selector: 'app-hard-wordle',
  templateUrl: './hard-wordle.component.html',
  styleUrls: ['./hard-wordle.component.scss']
})
export class HardWordleComponent {
  generation: string = "";
  show: boolean = false;

  constructor(private userService: UsuariosServices, private pokemonApiServices: PokemonApiServices) { }

  generationSelected(generation: any) {
    this.generation = generation;
  }

  showGame() {
    this.show = true;
  }

  ifLogging() {
    this.userService.ifLogging();
  }
}
