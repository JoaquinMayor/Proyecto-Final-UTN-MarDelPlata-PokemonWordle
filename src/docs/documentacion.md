# HomeComponent

El componente `HomeComponent` es responsable de mostrar la página de inicio de la aplicación. Este componente contiene un contenedor de opciones de menú y se encarga de cargar los usuarios y validar el inicio de sesión al inicializarse.

## Constructor

El constructor del componente recibe una inyección de dependencia: `userService` del tipo `UsuariosServices`. Esta dependencia se utiliza para acceder al servicio de usuarios.

## Método ngOnInit

El método `ngOnInit` se ejecuta cuando el componente se inicializa. Dentro de este método, se llama al método `getUsers` para obtener los usuarios desde un origen de datos externo (probablemente una API). Una vez que se obtienen los usuarios, se asignan al servicio de usuarios (`userService.users`) y se llama al método `validateLogin` del servicio para validar el inicio de sesión.

## Plantilla HTML

La plantilla HTML del componente define la estructura de la página de inicio. Contiene un contenedor (`<section class="containerMenuOpcionesHome">`) que envuelve un contenedor principal (`<section class="containerPrincipalIndex">`) que contiene las opciones de menú.

Las opciones de menú se definen mediante enlaces de navegación (`<a>`) con la directiva `routerLink` que apuntan a diferentes rutas de la aplicación. Cada enlace tiene una clase CSS asociada que define su estilo, como `wordleDificil`, `wordleFacil`, `wordleImagen` y `pokedex`.

## Estilos CSS

El componente también tiene un archivo de estilos CSS (`home.component.scss`) que se aplica a la plantilla HTML. Los estilos definen reglas para las clases CSS utilizadas en la plantilla, como `containerMenuOpcionesHome`, `containerPrincipalIndex`, `wordleDificil`, `wordleFacil`, `wordleImagen` y `pokedex`. Estas clases se utilizan para aplicar estilos específicos a los elementos correspondientes de la plantilla.

# NavbarComponent

El componente `NavbarComponent` es responsable de mostrar la barra de navegación en la parte superior de la aplicación. Este componente contiene un encabezado (`<header>`) con una estructura de navegación y opciones de menú.

## Propiedades

- `dropdownActive` (booleano): Indica si el menú desplegable está activo o no.
- `name` (string): Almacena el nombre del usuario.
- `password` (string): Almacena la contraseña del usuario.

## Constructor

El constructor del componente recibe dos inyecciones de dependencia: `userService` del tipo `UsuariosServices` y `router` del tipo `Router`. Estas dependencias se utilizan para acceder al servicio de usuarios y al enrutador de Angular.

## Métodos

- `toggleDropdown()`: Cambia el estado de `dropdownActive` para mostrar u ocultar el menú desplegable.
- `prueba()`: Navega al componente `user/logging` utilizando el enrutador de Angular.
- `logOut()`: Cierra la sesión del usuario llamando al método `logout()` del servicio de usuarios y navega a la página de inicio (`/home`).
- `getRouter()`: Retorna la URL actual utilizando el enrutador de Angular.

## Plantilla HTML

La plantilla HTML del componente define la estructura de la barra de navegación. Utiliza directivas estructurales como `*ngIf` y `*ngTemplate` para controlar la visualización de elementos basados en condiciones. También utiliza enlaces de datos con la notación `[]` para establecer valores dinámicos en los atributos.

La barra de navegación contiene un encabezado (`<header>`) con una clase `nav`, que a su vez contiene una estructura de navegación y opciones de menú. La estructura de navegación incluye un enlace de retroceso (`<a class="back">`) que se muestra si la ruta actual no es `/home`. El texto y el enlace del enlace de retroceso se generan dinámicamente utilizando una expresión condicional.

El título del logotipo (`<h1>`) se define con una clase que cambia dinámicamente según la condición de `user.getId` y `getRouter()`. El logotipo se muestra utilizando una etiqueta de imagen (`<img>`) cuya ruta se especifica en el atributo `src`.

El menú de navegación se divide en dos secciones utilizando la directiva `*ngIf`. La primera sección, con la clase `navbar_menuSinLog`, se muestra si `user.getId` es igual a `'0'`. Contiene enlaces para crear una cuenta, iniciar sesión y ver los puntajes.

La segunda sección, definida dentro de la plantilla `ng-template`, se muestra si `user.getId` no es igual a `'0'`. Contiene enlaces para ver los puntajes, un menú desplegable para el usuario y opciones dentro del menú desplegable. El menú desplegable se activa al hacer clic en un elemento con la clase `menuVistaUsuario` y se muestra u oculta utilizando la clase CSS `active`.

## Estilos CSS

El componente también tiene un archivo de estilos CSS (`navbar.component.scss`) que se aplica a la plantilla HTML. Los estilos definen reglas para las clases CSS utilizadas en la plantilla, como `nav`, `back`, `logoConLogging`, `logoSinBack`, etc. Estas clases se aplican dinámicamente utilizando la directiva `ngClass` en el elemento correspondiente de la plantilla.

## Componente GenerationComponent

Este es el componente `GenerationComponent`, que se encarga de mostrar un formulario de selección de generación y emitir el valor seleccionado mediante un evento.

### Selector
El selector asociado a este componente es `app-generation`.

### Propiedades
- `generationSelected`: Un `EventEmitter` que emite un valor de tipo `String` cuando se selecciona una generación.
- `generation`: Una variable de tipo `string` que almacena el valor seleccionado de la generación. Su valor inicial es `"0"`.

### Métodos
- `ngOnInit()`: Un método del ciclo de vida del componente que se ejecuta al inicializarlo. Establece el valor de `generation` en `"0"` y emite el valor seleccionado mediante el evento `generationSelected`.
- `choiceGeneration(event: any)`: Un método que se ejecuta cuando se produce un cambio en la selección de generación. Actualiza el valor de `generation` con el valor seleccionado y emite el valor mediante el evento `generationSelected`.
- `getRouter()`: Un método que devuelve la URL actual de la ruta utilizando el servicio `Router` de Angular.

## Vista
El template asociado a este componente se encuentra en el archivo `generation.component.html`. A continuación se muestra el fragmento de código:

```html
<section [ngClass]="{'modalRegiones': getRouter()=='/wordleFacil' || getRouter()=='/wordleDificil' ||getRouter()=='/imageGame'}">
  <select name="generation" [(ngModel)]="generation" (change)="choiceGeneration($event)" title="Generacion">
    <option value="0" title="Generacion aleatoria">Generacion aleatoria</option>
    <option value="1" title="1° Generación">1° Generación</option>
    <option value="2" title="2° Generación">2° Generación</option>
    <option value="3" title="3° Generación">3° Generación</option>
    <option value="4" title="4° Generación">4° Generación</option>
    <option value="5" title="5° Generación">5° Generación</option>
    <option value="6" title="6° Generación">6° Generación</option>
    <option value="7" title="7° Generación">7° Generación</option>
    <option value="8" title="8° Generación">8° Generación</option>
    <option value="9" title="9° Generación">9° Generación</option>
  </select>
</section>

En este fragmento de código, se utiliza la directiva estructural `ngClass` para aplicar una clase CSS llamada `modalRegiones` a la sección cuando la URL actual de la ruta coincide con '/wordleFacil', '/wordleDificil' o '/imageGame'. Esto permite aplicar estilos específicos a la sección en función de la ruta actual.

Dentro de la sección, se utiliza un elemento `select` para mostrar las opciones de generación. El atributo `ngModel` está vinculado a la propiedad `generation` del componente, lo que permite mantener actualizado el valor seleccionado. Cuando se produce un cambio en la selección, se invoca el método `choiceGeneration($event)` para actualizar el valor de `generation` y emitir el valor seleccionado mediante el evento `generationSelected`.
```

## Estilos
Los estilos asociados a este componente se encuentran en el archivo generation.component.scss.

## Importaciones
Este componente hace uso de las siguientes importaciones:

```typescript
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
```

# Documentación del código HTML Word-Game

## Descripción
El código HTML refiere al apartado de adivinanzas de Pokémon. La aplicación muestra una interfaz de usuario donde los usuarios pueden intentar adivinar el nombre de un Pokémon. La interfaz incluye elementos como botones, campos de entrada, imágenes y secciones que muestran el progreso del juego y las ayudas disponibles.

## Estructura del código
El código HTML está estructurado de la siguiente manera:

- Una sección principal que muestra la selección de generación de Pokémon y un botón para comenzar el juego.
- Un div con una superposición que se muestra mientras se carga el juego.
- Una plantilla condicional que muestra el juego en sí cuando se inicia.
- Diversas secciones y elementos HTML que representan elementos del juego, como vidas, ayudas, entrada de texto, palabras a adivinar y mensajes de finalización.

## Características principales
- La selección de generación de Pokémon.
- La carga del juego y la visualización de una superposición mientras se carga.
- La representación de las vidas del jugador.
- La opción de mostrar ayudas y abrir una tabla de ayudas.
- La entrada de texto para adivinar el nombre del Pokémon.
- La visualización de las letras adivinadas y las palabras a adivinar.
- Mensajes de finalización cuando el jugador adivina correctamente o pierde.

## Uso de directivas de Angular
El código HTML hace uso de las siguientes directivas de Angular:
- `*ngIf`: Se utiliza para mostrar o ocultar elementos en función de una expresión booleana.
- `*ngFor`: Se utiliza para iterar sobre una lista y generar elementos HTML repetidos.
- `[(ngModel)]`: Se utiliza para enlazar una propiedad a un campo de entrada, permitiendo la manipulación bidireccional de datos.
- `(click)`: Se utiliza para asociar una función al evento de clic.
- `(keydown.enter)`: Se utiliza para ejecutar una función cuando se presiona la tecla Enter.

## Archivos relacionados
El código HTML hace referencia a los siguientes archivos o recursos:
- Imágenes: Se hace referencia a varias imágenes ubicadas en la carpeta `assets/`.
- Componentes de la aplicación: Se hace referencia al componente `app-generation` y al componente `app-helps`, que se utilizan para la selección de generación de Pokémon y mostrar las ayudas, respectivamente.

# Componente WordGameComponent

El componente `WordGameComponent` es responsable de administrar un juego de adivinanza de palabras basado en nombres de Pokémon.

## Propiedades

- `generation`: Número que representa la generación de Pokémon seleccionada.
- `show`: Booleano que indica si se debe mostrar el juego.
- `showButton`: Booleano que indica si se debe mostrar el botón de inicio del juego.
- `showHelps`: Booleano que indica si se deben mostrar las opciones de ayuda.
- `idSelected`: Número que representa el Pokémon seleccionado de la lista filtrada.
- `guessPokemon`: Cadena que almacena el nombre del Pokémon ingresado por el usuario.
- `namePokemon`: Cadena que almacena el nombre del Pokémon seleccionado para adivinar.
- `usedWords`: Array que contiene los nombres de Pokémon ingresados previamente.
- `filteredPokemons`: Array que almacena los Pokémon filtrados según el texto ingresado.
- `pokemonTable`: Array que almacena la lista de Pokémon para la generación seleccionada.
- `letterOccurrences`: Objeto que registra las ocurrencias de letras en el nombre del Pokémon seleccionado.
- `correctLetters`: Array que contiene las letras adivinadas correctamente.
- `wrongLetters`: Array que contiene las letras adivinadas incorrectamente.
- `helps`: Array que almacena opciones de ayuda disponibles.

## Métodos

- `ngOnInit()`: Método del ciclo de vida que se llama cuando se inicializa el componente.
- `pikachuVoice()`: Reproduce un archivo de audio si el nombre del Pokémon ingresado es "pikachu".
- `startGame()`: Genera un número aleatorio y selecciona un Pokémon al azar.
- `validationIfPokemon()`: Verifica si el nombre del Pokémon ingresado es válido.
- `confirm()`: Restablece el estado del juego cuando el usuario confirma una respuesta.
- `validateGlobal()`: Valida el nombre del Pokémon ingresado y actualiza el estado del juego.
- `resetValidation()`: Restablece el estado de validación del juego.
- `validateName()`: Verifica si el nombre del Pokémon ingresado coincide con el Pokémon seleccionado.
- `wordCorrect()`: Agrega el nombre del Pokémon ingresado a la lista de palabras utilizadas.
- `wordColor()`: Devuelve el nombre de la clase CSS basado en la corrección de una letra adivinada.
- `generationSelected()`: Se llama cuando el usuario selecciona una generación de Pokémon.
- `generatedRandomGeneration()`: Genera un número de generación de Pokémon aleatorio.
- `showGame()`: Inicia el juego obteniendo los datos de Pokémon e inicializando el estado del juego.
- `pokemonWritter()`: Obtiene datos adicionales para el nombre del Pokémon ingresado.
- `filterPokemons()`: Filtra la lista de Pokémon según el texto ingresado.
- `renderTable()`: Obtiene la lista de Pokémon para la generación seleccionada.
- `selectPokemon()`: Se llama cuando el usuario selecciona un Pokémon de la lista filtrada.
- `acceptHelp()`: Se llama cuando el usuario acepta una opción de ayuda para revelar información adicional.
- `closeTableHelp()`: Cierra la tabla de ayuda.
- `bestScore()`: Se utiliza para actualizar los puntajes y estadísticas del usuario en función de la cantidad de vidas restantes y la URL actual del enrutador.

# Componente EasyWordleComponent

El componente `EasyWordleComponent` representa una sección principal para el juego Wordle. Permite al usuario jugar el juego y muestra la interfaz correspondiente.

## Uso

Para utilizar el componente `EasyWordleComponent`, incluye el siguiente código en tu plantilla:

```html
<section class="mainWordle">
    <app-word-game></app-word-game>
</section>
```

## Propiedades
El componente EasyWordleComponent tiene las siguientes propiedades:

`generation: string:` Representa la generación actual del juego Wordle.

`show: boolean:` Indica si se debe mostrar el juego Wordle.

## Métodos
El componente EasyWordleComponent define los siguientes métodos:

`ngOnInit(): void`: Método del ciclo de vida de Angular que se ejecuta al inicializar el componente. Se utiliza para obtener la lista de usuarios y validar el inicio de sesión.

`generationSelected(generation: any)`: Método que se llama cuando se selecciona una generación en el juego Wordle. Actualiza la propiedad generation con la generación seleccionada.

`showGame()`: Método que se llama para mostrar el juego Wordle. Establece la propiedad show en true.
Dependencias

El componente EasyWordleComponent depende de los siguientes servicios:

`UsuariosServices`: Un servicio que proporciona funcionalidades relacionadas con los usuarios.

# Componente HardWordleComponent

El componente `HardWordleComponent` representa una sección principal para el juego Wordle en modo difícil. Permite al usuario jugar el juego y muestra la interfaz correspondiente.

## Uso

Para utilizar el componente `HardWordleComponent`, incluye el siguiente código en tu plantilla:

```html
<section class="mainWordle">
    <app-word-game></app-word-game>
</section>
```

## Propiedades
El componente HardWordleComponent tiene las siguientes propiedades:

`generation: string:` Representa la generación actual del juego Wordle en modo difícil.

`show: boolean`: Indica si se debe mostrar el juego Wordle en modo difícil.
## Métodos
El componente HardWordleComponent define los siguientes métodos:

`ngOnInit(): void:` Método del ciclo de vida de Angular que se ejecuta al inicializar el componente. Se utiliza para obtener la lista de usuarios y validar el inicio de sesión.

`generationSelected(generation: any)`: Método que se llama cuando se selecciona una generación en el juego Wordle en modo difícil. Actualiza la propiedad generation con la generación seleccionada.

`showGame()`: Método que se llama para mostrar el juego Wordle en modo difícil. Establece la propiedad show en true.
Dependencias
El componente HardWordleComponent depende de los siguientes servicios:

`UsuariosServices`: Un servicio que proporciona funcionalidades relacionadas con los usuarios.

# Componente HelpsComponent

El componente `HelpsComponent` representa una lista de ayudas para comparar diferentes estadísticas de un Pokémon. Muestra las estadísticas y resalta las diferencias utilizando colores y flechas.

## Uso

Para utilizar el componente `HelpsComponent`, incluye el siguiente código en tu plantilla:

```html
<ul class="contenedorAyudas">
    <li>Tipo 1
        <p class="contenedorLetra" [ngClass]="compareType1()">{{stat.getType1}}</p>
    </li>
    <li>Tipo 2
        <p class="contenedorLetra" [ngClass]="compareType2()">{{stat.getType2}}</p>
    </li>
    <li>Peso
        <img [src]="compareWeight()" alt="Flecha" title="Flecha">
    </li>
    <li>Altura
        <img [src]="compareHeight()" alt="Flecha" title="Flecha">
    </li>
    <li>Estadistica Destacada
        <p class="contenedorLetra especial" [ngClass]="compareBestStat()">{{bestStat}}</p>
    </li>
</ul>
```

## Propiedades
El componente HelpsComponent tiene las siguientes propiedades:

``stat: Stats``: Representa las estadísticas del Pokémon.
pokemon: Pokemon: Representa los datos del Pokémon.
## Métodos
El componente HelpsComponent define los siguientes métodos:

``compareType1(): string``: Compara el tipo 1 del Pokémon con el tipo 1 de las estadísticas y devuelve una clase CSS para resaltar las diferencias.

``compareType2(): string``: Compara el tipo 2 del Pokémon con el tipo 2 de las estadísticas y devuelve una clase CSS para resaltar las diferencias.

``compareHeight(): string``: Compara la altura del Pokémon con la altura de las estadísticas y devuelve la ruta de la imagen de flecha correspondiente.

``compareWeight()``: string: Compara el peso del Pokémon con el peso de las estadísticas y devuelve la ruta de la imagen de flecha correspondiente.

``selectBestStat(pokemon: any): string``: Selecciona la estadística destacada del Pokémon y devuelve el nombre de la estadística.

``compareBestStat(): string``: Compara la estadística destacada del Pokémon con la estadística destacada de las estadísticas y devuelve una clase CSS para resaltar las diferencias.

