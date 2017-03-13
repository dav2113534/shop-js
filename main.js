//strictly javascript 
//state is an object where our shopping list items are going to be stored 
var state = {
    items: []
};

// Logic behind the shopping list and what it should do 
//When we create a shopping list we add items, once we have selected an item we check the box
// after we check it we then delete the item from the list 

//adds items into our state 
function addItem(state, item) {
    state.items.push({
        name: item,
        checked: false,
    })
}

//Next a function that deletes items once checked 

function deleteItem() {
    state.splice(0, 1);
}