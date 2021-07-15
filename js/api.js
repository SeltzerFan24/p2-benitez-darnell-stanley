const apiKey = "UtGdsg8vwWKwaIEmaMuyCjdqszb5tz9s"
let url = `https://api.windy.com/api/webcams/v2/list?show=webcams:title;image;regions,location;categories;player&key=${apiKey}`

function apiFunction() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

apiFunction ();