import React from 'react';


// const Choice = (items) => {
//     let idx = Math.floor(Math.random() * items.length +1)
//     console.log(idx)
//     return items[idx]
 
// }

function choice(items){
    let idx = Math.floor(Math.random() * items.length +1)
    return items[idx]
}

function remove (items, item){
    console.log(items)
    let removeIdx = items.indexOf(item)
    
        if (removeIdx == -1){
            return undefined
        }

        else{
            console.log("remove", items[removeIdx])
            items.splice(removeIdx, 1)
            console.log(items)
            return item
        }

}


export {choice, remove};