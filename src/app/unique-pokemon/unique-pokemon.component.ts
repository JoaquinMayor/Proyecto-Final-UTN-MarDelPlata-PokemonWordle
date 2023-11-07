import { getUsers } from 'src/config/config';
import { Pokemon } from '../models/pokemon.model';
import { PokemonApiServices } from './../services/pokemonApi.service';
import { Component, OnInit } from '@angular/core';
import { UsuariosServices } from '../services/users.service';

@Component({
  selector: 'app-unique-pokemon',
  templateUrl: './unique-pokemon.component.html',
  styleUrls: ['./unique-pokemon.component.scss']
})
export class UniquePokemonComponent implements OnInit{
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
  pokemonImageSrc: string = '';

  constructor(private pokemonApiServices: PokemonApiServices, private userService:UsuariosServices) { }

  ngOnInit() {
    
    getUsers().then((users)=>{
      this.userService.users = users;
      this.userService.validateLogin();
    });

    this.pokemon = this.pokemonApiServices.getSinglePokemon();
      this.pokemonImageSrc = this.pokemon.getFrontSprite;
    
    
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

  changeImageSrc() {
    if (this.pokemon.getBackSprite != null) {
      if (this.pokemonImageSrc === this.pokemon.getFrontSprite) {
        this.pokemonImageSrc = this.pokemon.getBackSprite;
      } else {
        this.pokemonImageSrc = this.pokemon.getFrontSprite;
      }
    }
  }
}
