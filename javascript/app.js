$(function(){


// -----------------------Kim's Section Starts------------------------  
let dessertInput= ""

function ajaxCall() {
        console.log(dessertInput + "this is search term")
        let queryURL = "http://api.yummly.com/v1";

        $.ajax({
            // make ajax GET request
            url: queryURL + encodeURIComponent(dessertInput),
            method: "GET"
        })
        .then(function (response) {
        
            console.log(response)
            for (let i = 0; i < 20; i++) {
  
            }
        });
    }

// ----------------------Kim's Section Ends--------------------------


// ----------------------Anthony's Section Starts----------------------------
let queryURL = "https://www.googleapis.com/youtube/v3/AIzaSyBqsfshUVe2dhIcYn_bKTXrpr9Pst1g3Vo"

$.ajax({
    url: "https://www.googleapis.com/youtube/v3/AIzaSyBqsfshUVe2dhIcYn_bKTXrpr9Pst1g3Vo",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  })

});
