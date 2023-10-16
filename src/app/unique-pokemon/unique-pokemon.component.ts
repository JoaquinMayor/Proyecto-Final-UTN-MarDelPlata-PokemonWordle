import { Pokemon } from '../models/pokemon.model';
import { PokemonApiServices } from './../services/pokemonApi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-unique-pokemon',
  templateUrl: './unique-pokemon.component.html',
  styleUrls: ['./unique-pokemon.component.scss']
})
export class UniquePokemonComponent {
  pokemon: Pokemon = new Pokemon(0, "", "", "", "", "", "", "", "", 0, 0, 0, 0, 0, 0, 0, 0);
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
  constructor(private pokemonApiServices: PokemonApiServices) { }

  ngOnInit() {
    this.pokemon = this.pokemonApiServices.getSinglePokemon();
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
