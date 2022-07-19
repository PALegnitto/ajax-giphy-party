console.log("Let's get this party started!");


$("form").on("submit", async function gifRequest(event) {
    
    const inputVal = $("input").val();
    
    event.preventDefault();
    let gif = await axios.get("http://api.giphy.com/v1/gifs/search",{param: {q:`${inputVal}`, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" }});
    console.log(gif.data);

    //"

});