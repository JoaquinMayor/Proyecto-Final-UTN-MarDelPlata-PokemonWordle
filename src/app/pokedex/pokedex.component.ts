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
  filteredList: Pokemon[] = [];

  constructor(private pokemonApiServices: PokemonApiServices) { }

  ngOnInit() {
    //this.renderTable();
  }

  async renderTable(generation:string) {
    this.pokemonList.splice(0, this.pokemonList.length);
    await this.pokemonApiServices.listaSpeciesPokemon(generation);
    this.pokemonList = this.pokemonApiServices.pokemonArray;
    this.filterPokemons('');
  }

  choiceGeneration(generation: any) {
    this.renderTable(generation);
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

  selectedPokemon(pokemon: Pokemon) {
    this.pokemonApiServices.setSinglePokemon(pokemon);
  }
}