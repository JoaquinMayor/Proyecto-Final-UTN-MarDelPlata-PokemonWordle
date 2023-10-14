import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonApiServices } from '../services/pokemonApi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  pokemonList: Pokemon[] = [];
  generation: string = '1';

  constructor(private pokemonApiServices: PokemonApiServices) { }

  ngOnInit() {
    this.renderTable();
  }

  async renderTable() {
    await this.pokemonApiServices.listaSpeciesPokemon(this.generation);
    this.pokemonList = this.pokemonApiServices.pokemonArray;
  }

  choiceGeneration(event: any) {
    this.generation = event.target.value;
  }

  filterPokemons(text: string) {
    console.log('filterPokemons called:', text);
    let filteredList = [];

    if (text.trim() !== '') {
      filteredList = this.pokemonList.filter((pokemon) =>
        pokemon.getName.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      filteredList = this.pokemonList;
    }

    this.showPokemons(filteredList);
  }

  showPokemons(pokemons: Pokemon[]) {
    this.pokemonList = pokemons;
  }
}