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
export class UniquePokemonComponent implements OnInit {
  pokemon: Pokemon = new Pokemon(0, "", "", "", "", "", "", "", "", "", "", 0, 0, 0, 0, 0, 0, 0, 0);
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
  pokemonFrontImageSrc: string = '';
  pokemonBackImageSrc: string = '';
  isClicked = false;
  isHovered = false;

  constructor(private pokemonApiServices: PokemonApiServices, private userService: UsuariosServices) { }

  ngOnInit() {
    getUsers().then((users) => {
      this.userService.users = users;
      this.userService.validateLogin();
    });

    this.pokemon = this.pokemonApiServices.getSinglePokemon();
    this.pokemonFrontImageSrc = this.pokemon.getFrontSprite;
    this.pokemonBackImageSrc = this.pokemon.getBackSprite;
  }

  toggleClick() {
    this.isClicked = !this.isClicked;
    if (this.pokemon.getBackSprite != null) {
      if (this.isClicked) {
        this.pokemonFrontImageSrc = this.pokemon.getFrontShiny;
        this.pokemonBackImageSrc = this.pokemon.getBackShiny;
      } else {
        this.pokemonFrontImageSrc = this.pokemon.getFrontSprite;
        this.pokemonBackImageSrc = this.pokemon.getBackSprite;
      }
    } else {
      this.pokemonFrontImageSrc = this.pokemon.getFrontSprite;
      this.pokemonBackImageSrc = this.pokemon.getFrontSprite;
    }
  }

  toggleHover() {
    this.isHovered = !this.isHovered;
    if (this.pokemon.getBackSprite != null) {
      if (this.isHovered) {
        this.pokemonFrontImageSrc = this.pokemon.getFrontShiny;
        this.pokemonBackImageSrc = this.pokemon.getBackShiny;
      } else {
        this.pokemonFrontImageSrc = this.pokemon.getFrontSprite;
        this.pokemonBackImageSrc = this.pokemon.getBackSprite;
      }
    } else {
      this.pokemonFrontImageSrc = this.pokemon.getFrontSprite;
      this.pokemonBackImageSrc = this.pokemon.getFrontSprite;
    }
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