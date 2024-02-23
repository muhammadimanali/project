let searchBtn = document.getElementById("search-btn");
let searchWord = document.getElementById("search-inp");

searchBtn.addEventListener("click", () => {
    let word = searchWord.value;
    let finalURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    console.log(finalURL)
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data[0])
            // console.log(data[0].meanings[0])
            console.log(data[0].meanings[0].definitions)
            // console.log(data[0].name.common)
            // console.log(data[0].continents[0])
            // console.log(Object.keys(data[0].currencies)[0])
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(Object.values(data[0].languages).toString().split(",").join(", "))

            result.innerHTML = `
                <h2>${word}</h2>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Meanings:</h4>
                        <br><br>


                    </div>

                </div>
                
                `
        }).catch(()=>{
            if(inp == 0){
                result.innerHTML=`<h3>The input field cannot be empty</h3>`
            }
            else{
                result.innerHTML=`<h3>Please enter a valid country name</h3>`
            }
        })
})
/*
                    <span>${data[0].meanings[0].definitions[0]}</span>
                    <div class="data-wrapper">
                        <h4>Continent:</h4>
                        <span>${data[0].population}</span>
                    </div>
                    <div class="data-wrapper">
                        <h4>Currency:</h4>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - 
                        ${Object.keys(data[0].currencies)[0]}</span>
                    </div>
                    <div class="data-wrapper">
                        <h4>Common Language:</h4>
                        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                    </div>
                        <span>${Object.values(data[0].meanings[0].definitions[1]).toString().split(".,,")}</span> <br> <br>
                        <span>${Object.values(data[0].meanings[0].definitions[2]).toString().split(".,,")}</span> <br> <br>
                                                <span>${Object.values(data[0].meanings[0].definitions[0].definition).toString().split(".,,")}</span> <br> <br>
*/
