"use strict"

console.log("Let's get this party started!");

const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"


$("form").on("submit", async function gifRequest(event) {

    const inputVal = $("input").val();

    event.preventDefault();
    const gif = await axios.get("http://api.giphy.com/v1/gifs/search",
    {params: {api_key: API_KEY, q:inputVal}});

    console.log(gif.data);
    showGifs(gif);


    //"

});
/** Accepts a, and appends the gif url to the DOM */
function showGifs(gif) {
    const gifUrlLocation = gif.data.data;
    const urlLocation = Math.floor(Math.random() * gifUrlLocation.length)

    const gifUrl = gif.data.data[urlLocation].images.original.url;
    $(".gifs").append(`<img src="${gifUrl}">`);
}


/** Adds event listener to delete button and empties Gif container */
    $(".delete").on("click", function deleteGif() {
        $(".gifs").empty();
    })
