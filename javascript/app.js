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

});
