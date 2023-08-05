let theInput = document.querySelector("input");
let suggestions = document.querySelector('.suggestions');

const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];


fetch(endpoint).then(result => {
    let myData = result.json()
    return myData
}).then(data => {
    cities.push(...data)
})


function matchesWords(word,cities) {
    return cities.filter(place => {
        const regex = new RegExp(word,'gi')
        return place.city.match(regex)
    })
}


function findPlace() {
    let temp = matchesWords(this.value,cities);
    const html = temp.map(place => {
        const regex  = new RegExp(this.value,'gi')
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
        
        <span class="name">${cityName},${stateName}</span>
        <span class="population">${place.population}</span>





        
        </li>
        `
    }).join('')
    suggestions.innerHTML = html
}


theInput.addEventListener("keyup", findPlace)





























// fetch(endpoint)
//     .then((blob) => {
//         let result = blob.json();
//         return result;
//     })
//     .then((data) => {
//         cities.push(...data);
//     });

//     function findMatches(wordMatches, cities) {
//     return cities.filter((place) => {
//         const regex = new RegExp(wordMatches, "gi");
//         return place.city.match(regex) || place.state.match(regex);
//     });
//     }



//     function findPlace() {
//         const matchArray = findMatches(this.value, cities)
//         const html = matchArray.map(place => {
//             const regex = new RegExp(this.value, 'gi');
//             const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//             const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
//             return `
//             <li>
//             <span class="name">${cityName}, ${stateName}</span>
//             <span class="population">${place.population}</span>
//             </li>
            
//             `
//         }).join("")
//         suggestions.innerHTML = html;
//     }

// theInput.addEventListener("keyup", findPlace);
// theInput.addEventListener("change", findPlace);














