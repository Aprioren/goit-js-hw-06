const itemsRef = document.querySelectorAll('.item');

itemsRef.forEach(evt =>{
    console.log(`Categoty : ${evt.children[0].textContent} 
    Elements : ${evt.children[1].children.length}`);
});
