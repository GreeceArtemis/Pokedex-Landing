'use strict';

const Search = (update) => {
  const searchContainer = $('<div class="container-fluid"></div>');
  const row = $('<div class="div-pokedex row"></div>');
  const search = $('<div class="search"></div>');
  const icon = $('<i class="fa fa-search" aria-hidden="true"></i>');
  const input = $('<input id="pokemon-input" type="text">');
  const pokemons = $('<div class="grid-pokemons"></div>');

  const myModal = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div>');


  for(var i=0; i<=5;i++){
    const divImg = $('<div class="div-pokemon col-xs-2"></div>');
    const jsonPokedex=state.pokemons.pokemon_entries[i];
    console.log(jsonPokedex);
    const pokemon = {

      url:jsonPokedex.pokemon_species.url,//"http://pokeapi.co/api/v2/pokemon-species/"+jsonPokedex.entry_number+"/",
      img:null,
      name:jsonPokedex.pokemon_species.name,
      number:jsonPokedex.entry_number,
      //caracteristicas:null,
      peso:null,
      sexo:null,
      categoria:null,
      habilidad:null,
      tipo:null,
      debilidad:null
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

    $.getJSON("http://pokeapi.co/api/v2/pokemon-species/"+pokemon.number+"/",function(modalPokemon){
      const idiomaEs=4;//De esta manera eligo el objeto donde se encuentra en español
      pokemon.caracteristicas=modalPokemon.flavor_text_entries[3].flavor_text;
      const a=modalPokemon;
      console.log(pokemon.caracteristicas);
    });
    spanPokebola.on('click',function(){
      console.log('click');

      //alert('click');
      $("#myModal").append(Modal(pokemon));
      //$('#myModal').on('shown.bs.modal', function () {
       //$('#myInput').focus()
    //  })
    });

    $.getJSON("http://pokeapi.co/api/v2/pokemon/"+pokemon.number+"/",function(modalPokemon){
      const idiomaEs=4;//De esta manera eligo el objeto donde se encuentra en español
      pokemon.abilities = modalPokemon.abilities;
      console.log(pokemon.abilities);
      pokemon.altura = modalPokemon.height + ' m';
      console.log(pokemon.height);
      pokemon.peso= modalPokemon.weight + ' kg';
      console.log(pokemon.weight);
      pokemon.types = modalPokemon.types;
      console.log(pokemon.types);
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
const Modal= (pokemon)=>{


  console.log(pokemon);
  const modalDialog = $('<div class="modal-dialog" role="document"></div>');
  const modalContent = $('<div class="modal-content"></div>');
  const modalHeader = $('<div class="modal-header"></div>');
  const buttonclose = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>');
  const spanClose = $('<span aria-hidden="true">&times;</span>');
  const namePokemon = $('<h2 class="modal-title" id="myModalLabel">'+pokemon.name+'</h2>');
  const modalBody = $('<div class="modal-body"></div>');
  const infoPokemon = $('<div class="modal-info-pokemon"></div>');


  const modalImgPokemon = $('<div class="modal-img-pokemon"></div>');
  const descripcionModal = $('<div class="modal-descripcion-pokemon"></div>');
  const spanInfo=$('<span aria-hidden="true">'+pokemon.caracteristicas+'</span>');
  const caracModal = $('<div class="modal-caracteristicas-pokemon"></div>');
    const altura=$('<p><span>Altura:<br><span>'+pokemon.altura+'</span></span></p>');
    const peso=$('<p><span>Peso:<br><span>'+pokemon.peso+'</span></span></p>');
    const sexo=$("<p><span>Sexo:<br><span>"+pokemon.sexo+"</span></span></p>");
    caracModal.append(altura);
    caracModal.append(peso);
    caracModal.append(sexo);

  const tipoModal = $('<div class="modal-tipo-pokemon"></div>');
  const debilidadModal = $('<div class="modal-debilidad-pokemon"></div>');

  descripcionModal.append(debilidadModal);
  descripcionModal.append(tipoModal);
  descripcionModal.append(caracModal);
  descripcionModal.append(spanInfo);
  modalBody.append(modalImgPokemon);
  modalBody.append(descripcionModal);

  buttonclose.append(spanClose);
  modalHeader.append(buttonclose);
  modalContent.append(modalBody);
  modalContent.append(modalHeader);
  modalHeader.append(namePokemon);
  modalDialog.append(modalContent);


 return  modalDialog;
}
