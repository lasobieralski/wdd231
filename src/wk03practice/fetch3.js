//fetch3.js Activity Two (taking out duplicate codes)
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
    let pokeList = data.results;
    //sort our list before output
    pokeList = sortPokemon(pokeList)
    pokeList.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;
        // note the += here...
        pokeListElement.innerHTML += html;
    });
}

