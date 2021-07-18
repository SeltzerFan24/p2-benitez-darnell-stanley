const apiKey = "UtGdsg8vwWKwaIEmaMuyCjdqszb5tz9s"

// how to find desired webcam IDs
// let url = `https://api.windy.com/api/webcams/v2/list/category=beach/region=US.FL/limit=40?show=webcams:url&key=${apiKey}`

// 1380709968 = Cocoa Beach - Cape Canaveral
// 1561821824 = Key West

// how to retrieve webcam urls, titles, and embed links with IDs

let url = `https://api.windy.com/api/webcams/v2/list/webcam=1380709968,1561821824?show=webcams:url,player,title&key=${apiKey}`

let cocoaBeachEmbed, keyWestEmbed

// leaving console logs here to show my thought process while accessing the url to embed iframes

function apiFunction() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.result.webcams[0].player.day.embed)
            console.log(data.result.webcams[1].player.day.embed)
            cocoaBeachEmbed = data.result.webcams[0].player.day.embed;
            keyWestEmbed = data.result.webcams[1].player.day.embed;
            embedIframes ();
        })
}

apiFunction ();


function embedIframes () {
    var iframeOne = document.createElement("iframe");
    var iframeTwo = document.createElement("iframe");
    iframeOne.setAttribute("src", cocoaBeachEmbed);
    iframeTwo.setAttribute("src", keyWestEmbed);
    document.getElementById("apiOne").appendChild(iframeOne);
    document.getElementById("apiTwo").appendChild(iframeTwo);
}
