import React from 'react';
import ReactDOM from 'react-dom/client';

import foods from "./foods"
import {choice, remove} from './helpers';



let randomFruit = choice(foods)

console.log(`I'd like one ${randomFruit} please.`)
console.log(`Here you go: ${randomFruit}`)
console.log("Delicious! May I have another?")
remove(foods, randomFruit)
console.log(`I'm sorry, we're all out. We have ${foods.length} left.`)

// const Root = () => {
//   console.log("HIIIIIIIAA")
// return(
//   <div>   
//     <p>HELLO</p>
//    <Choice items={foods} />
//   </div>
// )
//   }


// ReactDOM.render(<Root/>, 
//   document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

