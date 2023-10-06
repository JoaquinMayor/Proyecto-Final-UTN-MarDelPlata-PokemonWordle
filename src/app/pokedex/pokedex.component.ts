import { Component } from '@angular/core';
import 'tslib';
@Component({
    selector: 'app-pokedex',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
    /*   let min = 1;
      let max = 120;
      
      async function unPokemon(id) {
          let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
          try {
              const result = await fetch(url);
              if (result.status === 200) {
                  const json = await result.json();
                  return json;
              } else {
                  alert("No se encontro el Digimon")
              }
          } catch (e) {
              console.log(e);
          }
      }
      
      async function hacerLista() {
          let pokemons = [];
          let pokemon;
          for (let i = min; i < max; i++) {
              pokemon = await unPokemon(i);
              pokemons.push(pokemon);
          }
      
          return pokemons;
      }
      
      async function tabla() {
          let tabla = document.getElementById("lista");
          let lista = [];
          lista = await hacerLista();
      
          html = "";
          for (element of lista) {
              html += `<a href="./pokemon.html" onclick="verPokemon(${element.id})"><li class="pokemon">Nombre: ${element.name}
              <img src="${element.sprites.front_default}" alt="Pokemon"></img></li><a>`;
          }
          tabla.innerHTML = html;
      }
      
      // Función para filtrar los Pokémon según el texto ingresado
      async function filtrarPokemons(texto) {
          let pokemons = await hacerLista();
          let listaFiltrada = [];
      
          let form = document.getElementById("containerForm");
          let mensajeCantidad = form.querySelector("p");
          let mensajeNoEncontrados = form.querySelector("p");
      
          if (texto.trim() !== "") {
              listaFiltrada = pokemons.filter(pokemon =>
                  pokemon.name.toLowerCase().includes(texto.toLowerCase())
              );
          } else {
              listaFiltrada = pokemons;
          }
      
          if (listaFiltrada.length === 0) {
              if (mensajeNoEncontrados) {
                  mensajeNoEncontrados = document.createElement("p");
                  mensajeNoEncontrados.appendChild(document.createTextNode("No se encontraron coincidencias"));
                  form.appendChild(mensajeNoEncontrados);
                  form.removeChild(mensajeCantidad);
              }
          } else {
              if (mensajeCantidad) {
                  form.removeChild(mensajeCantidad);
              }
      
              mensajeCantidad = document.createElement("p");
              mensajeCantidad.appendChild(document.createTextNode("Cantidad de coincidencias: " + listaFiltrada.length));
              form.appendChild(mensajeCantidad);
          }
      
          mostrarPokemons(listaFiltrada);
      }
      
      function mostrarPokemons(pokemons) {
          let tabla = document.getElementById("lista");
          let html = "";
      
          for (element of pokemons) {
              //Se genera el HTML para cada Pokémon en la lista
              html += `<a href="./pokemon.html" onclick="verPokemon(${element.id})"><li class="pokemon">Nombre: ${element.name}
              <img src="${element.sprites.front_default}" alt="Pokemon"></img></li><a>`;
          }
          //Se actualiza el contenido del elemento <ul id="lista"></ul> en el DOM
          tabla.innerHTML = html;
      }
      
      function verPokemon(dato){
          localStorage.setItem("dato", dato);
      
      }
      
      tabla(); */
}
