"use strict"

console.log("Let's get this party started!");


$("form").on("submit", async function gifRequest(event) {

    const inputVal = $("input").val();

    event.preventDefault();
    let gif = await axios.get("http://api.giphy.com/v1/gifs/search",{params: {api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", q:`${inputVal}`}});
    console.log(gif.data);
    showGifs(gif);


    //"

});
/** Accepts a json object, and appends the gif url to the DOM */
function showGifs(gif) {
    let gifUrl = gif.data.data[0].images.original.url;
    $(".gifs").append(`<img src="${gifUrl}">`);
}


/** Adds event listener to delete button and empties Gif container */
    $(".delete").on("click", function deleteGif() {
        $(".gifs").empty();
    })
