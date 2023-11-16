import { Injectable } from "@angular/core";
import { Pokemon } from "../models/pokemon.model";
import { HttpClient } from '@angular/common/http';
import { Stats } from "../models/stats.model";


@Injectable({ providedIn: 'root' })
export class PokemonApiServices {
    pokemonSpecies: any;
    pokemonSpeciesURLList: any[] = [];
    pokemonArray: Pokemon[] = [];
    jsonPokemons: any[] = [];
    pokemon: Pokemon = new Pokemon(0, "", "", "", "", "", "", "", "", "", "", 0, 0, 0, 0, 0, 0, 0, 0);
    stats: Stats[] = [];

    constructor(private httpClient: HttpClient) { }
    //Hacer funcion de juntar datos de un pokemon solo
    singlePokemonApi(id: string) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        return this.httpClient.get(url);
    }

    jsonSinglePokemon(url: string) {
        return this.httpClient.get(url);
    }

    getSinglePokemon() {
        let pokemons = localStorage.getItem("pokemons");
        let position = localStorage.getItem("position")
        if (pokemons != null && position != null) {
            let json = JSON.parse(pokemons);
            let aux = json[parseInt(position)]

            let pokemon = new Pokemon(aux.id,
                aux.name,
                aux.generation,
                aux.frontSprite,
                aux.backSprite,
                aux.front_shiny,
                aux.back_shiny,
                aux.eggGroup,
                aux.description,
                aux.type1,
                aux.type2,
                aux.atk,
                aux.specialAtk,
                aux.speed,
                aux.defense,
                aux.specialDef,
                aux.hp,
                aux.heigth,
                aux.weight);
            return pokemon;
        }
        return this.pokemon;
    }

    setSinglePokemon(pokemon: Pokemon) {
        this.pokemon = pokemon;
        let flag = false;
        for (let i = 0; i < this.pokemonArray.length && flag == false; i++) {
            if (this.pokemonArray[i].getName == this.pokemon.getName) {
                flag = true;
                localStorage.setItem("pokemons", JSON.stringify(this.pokemonArray));
                localStorage.setItem("position", i.toString());
            }
        }
    }

    generationPokemonApi(generation: string) { //Junta todo el dato de la generacion
        const url = `https://pokeapi.co/api/v2/generation/${generation}`;
        return this.httpClient.get(url);
    }

    obtenerListaPokemonApi(generation: string): Promise<any> { //obtiene el dato de la generacion en formato json
        return new Promise<any>((resolve, reject) => {
            this.generationPokemonApi(generation).subscribe(
                {
                    next: (res) => {
                        this.pokemonSpecies = res;
                        resolve(undefined); // Resolvemos la promesa sin ningún valor adicional
                    },
                    error: (error) => {
                        reject(error); // Rechazamos la promesa con el error recibido
                    }
                }
            );
        });
    }

    async listaSpeciesPokemon(generation: string) { //Guarda la lista de especies de pokemon de esa generacion
        try {
            this.pokemonSpeciesURLList.splice(0, this.pokemonSpeciesURLList.length);
            this.pokemonArray.splice(0, this.pokemonArray.length);
            await this.obtenerListaPokemonApi(generation);
            for (let pokemon of this.pokemonSpecies.pokemon_species) {
                this.pokemonSpeciesURLList.push(pokemon);
            }
            this.datesSinglePokemons();
        } catch (e) {
            console.error(e);
        }
    }

    datesSinglePokemons() {
        let jsonPokemon: any;
        for (const pokemon of this.pokemonSpeciesURLList) {
            this.jsonSinglePokemon(pokemon.url).subscribe(
                res => {
                    jsonPokemon = res;
                    this.datesJsonPoke(jsonPokemon);
                }
            );
        }
    }

    datesJsonPoke(jsonPokemon: any) {
        let jsonPoke: any;
        this.singlePokemonApi(jsonPokemon.id).subscribe(
            res => {
                jsonPoke = res;
                this.createArrayPokemon(jsonPokemon, jsonPoke);
            }
        )
    }

    datesJsonSinglePokeGame(name: string) {
        let jsonPoke: any;
        this.singlePokemonApi(name).subscribe(
            res => {
                jsonPoke = res;
                this.createPokemon(jsonPoke);
            }
        )
    }

    createPokemon(jsonPokemon: any) {
        let stat: Stats = new Stats("", 0, 0, 0, 0, 0, 0, 0, 0, "", "");
        let type2 = "none";
        if (jsonPokemon.types.length == 2) {
            type2 = jsonPokemon.types[1].type.name;
        }
        stat.setName(jsonPokemon.name);
        stat.setHp(jsonPokemon.stats[0].base_stat);
        stat.setAtk(jsonPokemon.stats[1].base_stat);
        stat.setDefense(jsonPokemon.stats[2].base_stat);
        stat.setSpecialAtk(jsonPokemon.stats[3].base_stat);
        stat.setSpecialDef(jsonPokemon.stats[4].base_stat);
        stat.setSpeed(jsonPokemon.stats[5].base_stat);
        stat.setHeight(jsonPokemon.height);
        stat.setWeight(jsonPokemon.weight);
        stat.setType1(jsonPokemon.types[0].type.name);
        stat.setType2(type2);
        this.stats.push(stat);
    }

    createArrayPokemon(jsonPokemon: any, jsonPoke: any) {
        this.stats.splice(0, this.stats.length);
        let type2 = "none";
        let description = this.getDescription(jsonPokemon, "es");
        let flag: boolean = false;
        if (jsonPoke.types.length == 2) {
            type2 = jsonPoke.types[1].type.name;
        }

        const existingPokemon = this.pokemonArray.find((pokemon) => pokemon.getId === jsonPokemon.id);
        if (!existingPokemon) {
            const spanishName = this.getSpanishName(jsonPokemon);
            this.pokemonArray.push(
                new Pokemon(
                    jsonPokemon.id,
                    spanishName,
                    jsonPokemon.generation.name,
                    jsonPoke.sprites.front_default,
                    jsonPoke.sprites.back_default,
                    jsonPoke.sprites.front_shiny,
                    jsonPoke.sprites.back_shiny,
                    jsonPokemon.egg_groups[0].name,
                    description,
                    jsonPoke.types[0].type.name,
                    type2,
                    jsonPoke.stats[1].base_stat,
                    jsonPoke.stats[3].base_stat,
                    jsonPoke.stats[5].base_stat,
                    jsonPoke.stats[2].base_stat,
                    jsonPoke.stats[4].base_stat,
                    jsonPoke.stats[0].base_stat,
                    jsonPoke.height,
                    jsonPoke.weight
                )
            );
        }
        this.pokemonArray.sort((a, b) => a.getId - b.getId); // Se ordena por ID
    }

    getDescription(jsonPokemon: any, language: string): string {
        let description = "";
        let flag = false;

        for (let i = 0; i < jsonPokemon.flavor_text_entries.length && !flag; i++) {
            if (jsonPokemon.flavor_text_entries[i].language.name === language) {
                description = jsonPokemon.flavor_text_entries[i].flavor_text;
                flag = true;
            }
        }

        if (!flag) {
            for (let i = 0; i < jsonPokemon.flavor_text_entries.length && !flag; i++) {
                if (jsonPokemon.flavor_text_entries[i].language.name === "en") {
                    description = jsonPokemon.flavor_text_entries[i].flavor_text;
                    flag = true;
                }
            }
        }

        return description;
    }

    getSpanishName(jsonPokemon: any): string {
        let spanishName = "";
        let flag = false;

        for (let i = 0; i < jsonPokemon.names.length && !flag; i++) {
            if (jsonPokemon.names[i].language.name === "es") {
                spanishName = jsonPokemon.names[i].name;
                flag = true;
            }
        }

        if (!flag) {
            for (let i = 0; i < jsonPokemon.names.length && !flag; i++) {
                if (jsonPokemon.names[i].language.name === "en") {
                    spanishName = jsonPokemon.names[i].name;
                    flag = true;
                }
            }
        }

        return spanishName;
    }
}