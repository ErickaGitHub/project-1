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
                console.log("the dessert name is= " + dessertName)
                rating = response.matches[i].rating
             //   console.log("the rating is= " + rating)
                ingredients = response.matches[i].ingredients
            //    console.log("the ingredients are= " + ingredients)
                dessertTime = moment.utc(parseInt(response.matches[i].totalTimeInSeconds) * 1000).format("HH:mm");
                console.log(dessertTime)

                dessertPhoto = response.matches[i].imageUrlsBySize[90]
                console.log(typeof(dessertPhoto));

                    if (response.matches[i].rating >= 4 && response.matches[i].course === "Desserts") {
                        console.log("this is highly rated = " + dessertName);

                        $("#results-table > tbody").append("<tr><td>" + dessertName + "</td><td>" + rating + "</td><td>"
                        + dessertTime + "</td><td>" +  + "</td>")
                    }
                }
      
                $("#results-table > tbody").append(`
                <tr>
                    <td> ${dessertName}  </td>
                    <td>  ${rating}  </td>
                    <td> ${dessertTime} </td>
                    <td> <img src="${dessertPhoto}">  </td>`)

            });
    }

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