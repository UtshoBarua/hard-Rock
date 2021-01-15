document.getElementById("search").addEventListener("click",function(){
    let name = document.getElementById("input")
    getartist(name.value)
 })
// api Fetch 
function getartist(valueOfInput){
    fetch(`https://api.lyrics.ovh/suggest/${valueOfInput}`)
    .then(response => response.json())
    .then(displayName);
}
// apply Display"

function displayName(data){
    let ClassArtistName = document.getElementsByClassName("purple")
    console.log(data);
    for(let i = 0; i < ClassArtistName.length; i++){
        let elements = ClassArtistName[i];
        elements.innerHTML = data.data[i].album.title;
    }
    let album = document.getElementsByClassName("album")
    for (let i =0; i<album.length; i++){
        let elements = album[i];
        elements.innerHTML = data.data[i].artist.name;

    }
}

// lyRicsButton
 let lyricsButton = document.getElementsByClassName("getLyrics");
 
 for (let i=0; i<lyricsButton.length; i++){
     let elements = lyricsButton[i];
     elements.addEventListener("click", function(){
         console.log("hello world")
     })
 }