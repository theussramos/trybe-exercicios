const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    author: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  for (const property in coolestTvShow) {
    console.log(property);
  }
  
  // name
  // genre
  // author
  // favoriteCharacter
  // quote
  // seasons



  console.log(Object.keys(coolestTvShow));