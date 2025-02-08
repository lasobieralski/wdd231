//fetch1.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to 
        // convert the response before we can use it
        //.json() also returns a promise...so we await 
        // it as well.
        const data = await response.json();
        doThis(data);
    }
}

function compare(a, b) {
    if (a.name > b.name) {
        //sort b before a
        return 1;
    } else if (a.name < b.name) {
        // a and b different but unchanged (already in the correct order)
        return -1;
    } else return 0; // a and b are equal
}

function sortPokemon (list) {
    let sortedList = list.sort(compare);
    return sortedList;
}

async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        doStuffList(data);
    }
}

// function doStuff(data) {
//     results = data;
//     const outputSection = document.querySelector('#output');
//     const html = `<h2>${data.name}</h2>
//                   <img src="${data.sprites.front_default}" alt="Image of ${data.name}">`;
//     outputSection.innerHTML = html;
//     console.log("first: ", results);
// }

function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach((currentItem) => {
        // const html = `<li>${currentItem.name}</li>`;
        const html = `<li>${currentItem.name}</li>`;
        // note the += here...
        pokeListElement.innerHTML += html;
    });
}

// getPokemon(url, doStuff);
console.log("second: ", results);
getPokemonList(urlList, doStuffList);
// const outputSection = document.querySelector('#output');
// This line of code will:

// 1. Use document.querySelector(): This is a powerful method in 
// JavaScript that selects the first element in the document that 
// matches the specified CSS selector.

// 2. Select the element: The CSS selector '#output' specifically 
// targets an element with the ID attribute "output". Since you've 
// added <section id="output"></section> to your HTML, this will 
// select that exact section element.

// 3. Store the element: The selected element will be stored in the 
// outputSection constant, making it available for you to use later 
// in your JavaScript code to manipulate or display the fetched 
// Pokemon data.

// For example, to display the Pokemon's name within the section, you 
// could do:
// outputSection.textContent = data.name;
//This line of code would replace the existing content within the 
// outputSection with the name of the Pokemon retrieved from the 
// data object.