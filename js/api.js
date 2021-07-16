const apiKey = "UtGdsg8vwWKwaIEmaMuyCjdqszb5tz9s"

// how to find desired webcam IDs
// let url = `https://api.windy.com/api/webcams/v2/list/category=beach/region=US.FL/limit=40?show=webcams:url&key=${apiKey}`

// 1380709968 = Cocoa Beach - Cape Canaveral
// 1561821824 = Key West

// how to retrieve webcam urls with IDs
let url = `https://api.windy.com/api/webcams/v2/list/webcam=1380709968,1561821824?show=webcams:url&key=${apiKey}`



function apiFunction() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

apiFunction ();