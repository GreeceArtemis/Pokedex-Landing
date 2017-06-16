
'use strict';

const render = (root,url) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
  if (state.selectedStation == null) {
    wrapper.append(Search(_ => render(root)));

    root.append(wrapper);

  }


  root.append(wrapper);
}

const state = {
  pokemons: null,
  selectedPokemon: null,
};

const pokedexURL="http://pokeapi.co/api/v2/pokedex/1/";
$( _ => {


  getJSON(pokedexURL, (err, json) => {

    if (err) { return alert(err.message);}

    state.pokemons = json;

    const root = $('.root');
    render(root,pokedexURL);

  });

});
