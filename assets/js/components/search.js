'use strict';

const Search = (update) => {
  const searchContainer = $('<div class="container"></div>');
  const row = $('<div class="div-pokedex row"></div>');
  const search = $('<div class="search"></div>');
  const icon = $('<i class="fa fa-search" aria-hidden="true"></i>');
  const input = $('<input id="pokemon-input" type="text">');
  const pokemons = $('<div class="grid-pokemons"></div>');

  const myModal = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div>');


  for(var i=0; i<=5;i++){
    const divImg = $('<div class="div-pokemon"></div>');
    const jsonPokedex=state.pokemons.pokemon_entries[i];
    console.log(jsonPokedex);
    const pokemon = {

      url:jsonPokedex.pokemon_species.url,//"http://pokeapi.co/api/v2/pokemon-species/"+jsonPokedex.entry_number+"/",
      img:null,
      name:jsonPokedex.pokemon_species.name,
      number:jsonPokedex.entry_number,
      caracteristica:null,
      Peso:null,
      Sexo:null,
      categoria:null,
      Habilidad:null,
      Tipo:null,
      Debilidad:null
    };
    const img = $('<img class="img-pokemon" >');
    const urlImg =  "http://serebii.net/art/th/";
    const number = pokemon.number+".png";
    const icons = $('<div class="icon-pokemon"></div>');
    const spanPokebola=$('<span class="span-pokebola"><img src="assets/icon/pokeball_gray.png"></span>');
    const spanHeart=$('<span class="span-heart"><img src="assets/icon/valentines-heart.png"></span>');
    const spanArrows =$('<span class="span-arrows"><img src="assets/icon/data.png"></span>');
    icons.append(spanPokebola);
    spanPokebola.attr("data-toggle","modal");
    spanPokebola.attr("data-target","#myModal");
    icons.append(spanHeart);
    icons.append(spanArrows);
    //console.log(pokemon);
    const name = $('<p>'+pokemon.name+'</p>');
    divImg.append(img);
    img.attr("src",urlImg+number);
    divImg.append(icons);
    divImg.append(name);
    pokemons.append(divImg);
    spanHeart.on('click',function(){
      console.log('click');
      //alert('click');
      $("#myModal").append(Modal());
      //$('#myModal').on('shown.bs.modal', function () {
       //$('#myInput').focus()
    //  })
    });
  }




  //input.on('keyup', (e) => {
    //const filteredpokemons = filterByDistrict(state.pokemons,$(e.target).val());
  //  reRender(pokemons,filteredStations,update);
  //});


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
  row.append(search);
  row.append(pokemons);
  row.append(myModal);
  searchContainer.append(row);


return searchContainer;
}
const Modal= ()=>{

  const modalDialog = $('<div class="modal-dialog" role="document"></div>');
  const modalContent = $('<div class="modal-content"></div>');
  const modalHeader = $('<div class="modal-header"></div>');
  const buttonclose = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>');
  const spanClose = $('<span aria-hidden="true">&times;</span>');
  const namePokemon = $('<h2 class="modal-title" id="myModalLabel">NaMe pokemon</h2>');
  const modalBody = $('<div class="modal-body"></div>');






  buttonclose.append(spanClose);
  modalHeader.append(buttonclose);
  modalContent.append(modalBody);
  modalContent.append(modalHeader);
  modalHeader.append(namePokemon);
  modalDialog.append(modalContent);


 return  modalDialog;
}
