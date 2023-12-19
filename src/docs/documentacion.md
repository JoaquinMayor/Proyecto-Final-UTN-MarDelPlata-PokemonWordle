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