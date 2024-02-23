let searchBtn = document.getElementById("search-btn");
let inp = document.getElementById("inp");

searchBtn.addEventListener("click", () => {
    let input = inp.value;
    let finalURL = `https://api.alquran.cloud/v1/surah/${input}`;
    console.log(finalURL)
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.ayahs[0])
    //         // console.log(data[0].capital[0])
    //         // console.log(data[0].flags.svg)
    //         // console.log(data[0].name.common)
    //         // console.log(data[0].continents[0])
    //         // console.log(Object.keys(data[0].currencies)[0])
    //         // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    //         // console.log(Object.values(data[0].languages).toString().split(",").join(", "))

    //         // result.innerHTML = `
    //         //     <img src="${data[0].flags.svg}"
    //         //     class="flag-img">
    //         //     <h2>${data[0].name.common}</h2>
    //         //     <div class="wrapper">
    //         //         <div class="data-wrapper">
    //         //             <h4>Capital:</h4>
    //         //             <span>${data[0].capital[0]}</span>
    //         //         </div>
    //         //         <div class="data-wrapper">
    //         //             <h4>Continent:</h4>
    //         //             <span>${data[0].population}</span>
    //         //         </div>
    //         //         <div class="data-wrapper">
    //         //             <h4>Currency:</h4>
    //         //             <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - 
    //         //             ${Object.keys(data[0].currencies)[0]}</span>
    //         //         </div>
    //         //         <div class="data-wrapper">
    //         //             <h4>Common Language:</h4>
    //         //             <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
    //         //         </div>
    //         //     </div>
                
    //         //     `
        }).catch(()=>{
            if(inp == 0){
                result.innerHTML=`<h3>The input field cannot be empty</h3>`
            }
            else{
                result.innerHTML=`<h3>Please enter a valid country name</h3>`
            }
        })
})