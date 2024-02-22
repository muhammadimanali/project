let searchBtn = document.getElementById("search-btn");
let linkInp = document.getElementById("link-inp");
let customName = document.getElementById("name-inp");

searchBtn.addEventListener("click", () => {
    let linkUrl = linkInp.value;
    let nameUrl = customName.value;
    let corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let finalURL = `http://ulvis.net/api.php?url=${linkUrl}&custom=${nameUrl}`;
    console.log(finalURL)
    fetch(corsProxyUrl + finalURL)
        .then((response) => response.text())
        .then((data) => {
            console.log(data)
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
    //     }).catch(()=>{
    //         if(linkInp == 0){
    //             result.innerHTML=`<h3>The input field cannot be empty</h3>`
    //         }
    //         else{
    //             result.innerHTML=`<h3>Please enter a valid country name</h3>`
    //         }
    //     })
})