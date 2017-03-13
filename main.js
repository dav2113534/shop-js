//strictly javascript 
//state is an object where are shopping list items are going to be stored 
var state = {
    items: []
};

//adds items into our state 
function addItem(state, item) {
    state.items.push({
        name: item,
        checked: false,
    })
}