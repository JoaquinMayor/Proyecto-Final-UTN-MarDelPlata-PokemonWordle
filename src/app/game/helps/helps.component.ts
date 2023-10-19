import { Stats } from './../../models/stats.model';
import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonApiServices } from 'src/app/services/pokemonApi.service';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.scss']
})
export class HelpsComponent {
  @Input() stat: Stats = new Stats("", 0, 0, 0, 0, 0, 0, 0, 0, "", "");
  @Input() pokemon: Pokemon = new Pokemon(0, "", "", "", "", "", "", "", "", 0, 0, 0, 0, 0, 0, 0, 0);
  colors: string[] = ['rojo', 'verde'];
  color: string = '';
  bestStat:string = "";

  constructor(private pokemonApiServices: PokemonApiServices) { }

  compareType1() {
    if (this.pokemon.getType1 !== this.stat.getType1) {
      return 'rojo';
    } else {
      return 'verde';
    }
  }

  compareType2() {
    if (this.pokemon.getType2 !== this.stat.getType2) {
      return 'rojo';
    } else {
      return 'verde';
    }
  }

  compareHeight() {
    if (this.pokemon.getHeigth < this.stat.getHeigth) {
      return './assets/flechaHaciaArriba.png';
    } else {
      return './assets/flechaHaciaAbajo.png';
    }
  }

  compareWeight() {
    if (this.pokemon.getWeigth < this.stat.getWeigth) {
      return './assets/flechaHaciaArriba.png';
    } else {
      return './assets/flechaHaciaAbajo.png';
    }
  }

  selectBestStat(pokemon: any) {
    let statSelected = "hp";
    let stat = this.pokemon.getHp;
    if (stat < this.pokemon.getAtk) {
      stat = this.pokemon.getAtk;
      statSelected = "atk";
    }
    if (stat < this.pokemon.getDefense) {
      stat = this.pokemon.getDefense;
      statSelected = "def";
    }
    if (stat < this.pokemon.getSpecialAtk) {
      stat = this.pokemon.getSpecialAtk;
      statSelected = "spAtk";
    }
    if (stat < this.pokemon.getSpecialDef) {
      stat = this.pokemon.getSpecialDef;
      statSelected = "spDef";
    }
    if (stat < this.pokemon.getSpeed) {
      stat = this.pokemon.getSpeed;
      statSelected = "speed";
    }

    return statSelected;
  }

  compareBestStat() {
    let bestStat1 = this.selectBestStat(this.pokemon);
    let bestStat2 = this.selectBestStat(this.stat);
    this.bestStat = bestStat2;
    if (bestStat1 != bestStat2) {
      return 'rojo';
    } else {
      return 'verde';
    }
  }
}
