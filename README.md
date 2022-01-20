<div align="center"><img style="width: 250px;" src="https://innovamat.com/wp-content/themes/innovamat/assets/images/logo-v.svg"></div>

# Prueba técnica Innovamat

Realizada en React.

---

## ¿Cómo lo ejecuto en local?

Necesitarás tener instalado `Node.js` y tener acceso a una terminal.

Lo primero es acceder a la terminal y situarnos en el directorio en el que quieres instalarlo e introducir estos comandos:

```
git clone https://github.com/PredyMaster/prueba_innovamat.git
cd prueba_innovamat
npm install --save PredyMaster/prueba_innovamat
npm start
```

Y automáticamente se abrirá en el navegador la url [http://localhost:3000/](http://localhost:3000/)


## Como funciona la App

Para no mezclar la lógica con la parte visual he dividido los Componentes en dos categorías.

Inicialmente carga un componente de tipo lógica que se llama **CargaContenido** este hace una llamada a la API y carga el contenido devuelto en el Hook useContext para evitar estar pasando props con algo que voy a usar en varios componentes, me parecía la forma más optima de comunicar los datos, en este modulo además añado dos campos nuevos, el campo de 'Key' porque en /rincones hay ID's repetidos y sobretodo para darle una clave a los map me parecía una mejor practica inventarme yo unos id's únicos, que usar id's erróneos, también he añadido el campo de favoritos para tener un control de que lecciones marca el usuario como favoritas.

Seguido cargo el componente de **Cabecera** que este doy por hecho que es un elemento fijo de la web (como una especie de Header), como he visto que la llamada a la API con '/seach' pases lo que le pases te devuelve el mismo contenido, no he implementado la parte de filtros y aprovechando que estamos en React que trabaja en tiempo Real tampoco veo la utilidad del botón de Buscar, puesto que conforme escribes en el input ya puedes iniciar la búsqueda (No obstante, los he introducido a modo de Atrezo para acercarlo visualmente al template solicitado).

En paralelo a esto se Carga **Aula**, que es el cuerpo de la App, en ella aparece un componente que está fijo todo el tiempo que es el de **Categoria** con las secciones cargadas previamente, las categorías de '/ambientes' y '/rutinas' no tienen contenido así que he dejado las llamadas comentadas para cuando lo tengan, de momento cargan un Null para mostrar una respuesta genérica.

Ajeno a Categoría, en la sección de la derecha en función de lo que haga el usuario se carga un componente u otro, si realiza una búsqueda en la Cabecera se carga el componente **Busqueda** si el usuario interactúa con el menú de categorías se activa el componente de **CategoriaCargada** y si el usuario hace click sobre una lección abre el componente **LeccionCompleta**.

En cuanto a la lógica de la App, además de CargaContenido está el modulo **BuscaLeccion** y **BuscaLeccionPost**, traté de usar un único componente y reutilizarlo pero al final decidí separarlo en dos porque una llamada era por GET, la otra por POST y al ser llamadas distintas preferí pasarlo a dos Componentes.







