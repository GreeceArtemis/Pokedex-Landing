'use strict';

const Search = (update) => {
  const parent = $('<div class=div-pokedex></div>');
  const search = $('<div class="search"></div>');
  const icon = $('<i class="fa fa-search" aria-hidden="true"></i>');
  const input = $('<input id="pokemon-input" type="text">');
  const pokemons = $('<div class="grid-pokemons"></div>');


  for(var i=0; i<=20;i++){
    const divImg = $('<div class="img-pokemon"></div>');
    let img = $('<img >');
    const urlImg =  "http://serebii.net/art/th/";
    let number = i+".png";
    $('img').attr("src",urlImg+number);

    divImg.append(img);
    pokemons.append(divImg);
  }

  //input.on('keyup', (e) => {
    //const filteredpokemons = filterByDistrict(state.pokemons,$(e.target).val());
  //  reRender(pokemons,filteredStations,update);
  //});
  const jsonPokedex=state.pokemons.pokemon_entries.pokemon_species;
  const pokemons = {
    name: jsonPokedex.name,
    url:jsonPokedex.url,
    img:null,
    name:null,
    caracteristica:null,
    Peso:null,
    Sexo:null,
    categoria:null,
    Habilidad:null,
    Tipo:null,
    Debilidad:null
  };

/*
 const pokemonURL = () =>{
   getJSON(url, (err, json) => {

     if (err) { return alert(err.message);}

     state.stations = json;

     const root = $('.root');
     render(root);
   });


 }*/


  search.append(icon);
  search.append(input);
  parent.append(search);
  parent.append(pokemons);

  return parent;
}
