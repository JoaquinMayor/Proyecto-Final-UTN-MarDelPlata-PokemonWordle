import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonApiServices } from 'src/app/services/pokemonApi.service';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.scss']
})
export class HelpsComponent {
  pokemon: Pokemon = new Pokemon(0, "", "", "", "", "", "", "", "", 0, 0, 0, 0, 0, 0, 0, 0);
  pokeUsados: Pokemon[] = [];
  colors: string[] = ['rojo', 'verde'];
  color: string = '';
  constructor(private pokemonApiServices: PokemonApiServices) { }

  ngOnInit() {
    this.pokemon = this.pokemonApiServices.getSinglePokemon();
    console.log(this.pokemon);
  }

  pokeElegido(poke: any) {
    this.pokemon = poke;
    this.pokeUsados.push(poke);
    this.color = this.colors[Math.floor(Math.random() * (this.colors.length - 0 + 1))];
    console.log(this.pokeUsados);
  }

  compareType1(poke: Pokemon) {
    if (poke.getType1 !== this.pokemon.getType1) {
      return true;
    } else {
      return false;
    }
    return this.color;
  }
}
