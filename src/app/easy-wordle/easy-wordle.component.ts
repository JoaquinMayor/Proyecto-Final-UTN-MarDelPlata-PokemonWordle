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
  generation: string = "";
  show: boolean = false;
  pokemon: Pokemon = new Pokemon(0, "", "", "", "", "", "", "", "", 0, 0, 0, 0, 0, 0, 0, 0);

  constructor(private userService: UsuariosServices, private pokemonApiServices: PokemonApiServices) { }

  ngOnInit() {
    this.pokemon = this.pokemonApiServices.getSinglePokemon();
  }
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
