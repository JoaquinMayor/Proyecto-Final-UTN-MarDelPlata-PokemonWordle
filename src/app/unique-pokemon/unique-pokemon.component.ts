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
  backColor: string = '';
  constructor(private pokemonApiServices: PokemonApiServices) { }

  ngOnInit() {
    this.pokemon = this.pokemonApiServices.getSinglePokemon();
  }

  isPokemonType(type: string){
    for (const type of this.pokemonTypes) {
      if (this.pokemon.getType1.includes(type)) {
        this.backColor = type;
      }
    }
  }
}
