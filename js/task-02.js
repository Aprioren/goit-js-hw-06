const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const makeListItem = option =>{
  return option.map(nameOfVegitable => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerText = nameOfVegitable;
    return item;
  })};

  const elements = makeListItem(ingredients);

  listRef.append(...elements);