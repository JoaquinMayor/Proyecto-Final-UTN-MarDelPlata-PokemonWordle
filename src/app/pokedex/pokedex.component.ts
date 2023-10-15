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
  filteredList: Pokemon[] = [];

  constructor(private pokemonApiServices: PokemonApiServices) { }

  ngOnInit() {
    this.renderTable();
  }

  async renderTable() {
    this.pokemonList.splice(0, this.pokemonList.length);
    await this.pokemonApiServices.listaSpeciesPokemon(this.generation);
    this.pokemonList = this.pokemonApiServices.pokemonArray;
    this.filterPokemons('');
  }

  choiceGeneration(event: any) {
    this.generation = event.target.value;
    this.renderTable();
  }

  filterPokemons(text: string) {
    this.filteredList.splice(0, this.filterPokemons.length - 1);
    if (text.trim() !== '') {
      this.filteredList = this.pokemonList.filter((pokemon) =>
        pokemon.getName.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      console.log("entre");
      this.filteredList = this.pokemonList;
    }
  }
}