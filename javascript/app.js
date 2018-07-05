$(function () {


    // -----------------------Kim's Section Starts------------------------  
    let dessertInput = "";
    let dessertName = "";
    let ingredients = "";
    let dessertTime= "";

    function recipeSearch() {
        console.log(dessertInput + "this is search term")
        let queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=d12c5941&_app_key=608774bd91d1850727be4bd6a7ba4dde&q=";

        $.ajax({
                // make ajax GET request
                url: queryURL + encodeURIComponent("pie") + "&allowedCourse[]=course^course-Desserts&maxResult=20",
                method: "GET"
            })
            .then(function (response) {

                console.log(response)

                for (let i=0; i < response.matches.length; i++) {

                // store the needed results data
                dessertName = response.matches[i].recipeName
                rating = response.matches[i].rating
                ingredients = response.matches[i].ingredients
                dessertTime = moment.utc(parseInt(response.matches[i].totalTimeInSeconds) * 1000).format("HH:mm");
                dessertPhoto = response.matches[i].imageUrlsBySize[90]

                if (parseInt(response.matches[i].rating) >= 4) {
                        console.log("this is highly rated = " + dessertName);

                    $("#results-table > tbody").append(`
                    <tr id="${dessertName}">
                    <td> ${dessertName}  </td>
                    <td>  ${rating}  </td>
                    <td> ${dessertTime} </td>
                    <td> <img src="${dessertPhoto}" class="zoom" data-caption="${dessertName}"></td>`)
                }
                 
                else if (response.matches[i].attributes.course[0] !== "Desserts") {
                    $("results-table").remove();
                    $(".no-results").append(`<p> Sorry. We couldn't find any results related to your search. Please press 'reset' and try another search.</p>`)
                }

                 }
            });
    }

    console.log("materialized worked");


    recipeSearch();
    // ----------------------Kim's Section Ends----------------------------------

/*
    // ----------------------Anthony's Section Starts----------------------------
    let queryURL = "https://www.googleapis.com/youtube/v3/AIzaSyBqsfshUVe2dhIcYn_bKTXrpr9Pst1g3Vo"

    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/AIzaSyBqsfshUVe2dhIcYn_bKTXrpr9Pst1g3Vo",
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
*/


    

});