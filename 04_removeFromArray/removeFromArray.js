const removeFromArray = function(arrayOfItems, ...itemsToRemove) {
    items = Array.from(arrayOfItems)
    for (let i=0; i < items.length; i++){
        for (let j=0; j < arrayOfItems.length; j++){
        if (arrayOfItems[i] == itemsToRemove[j]){
            arrayOfItems.splice(i, 1)
            i = 0
            j = 0
    }
        }
    }
    return arrayOfItems
};

// Do not edit below this line
module.exports = removeFromArray;
