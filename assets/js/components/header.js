'use strict';

const Header = () => {
  const header = $('<header></header>');
  const text   = $('<h1>Pokédex</h1>');

  header.append(text);
  return header;
}
