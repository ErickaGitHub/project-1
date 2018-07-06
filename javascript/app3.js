$(function () {


    // -----------------------Kim's Section Starts------------------------  
    let dessertInput = "";
    let dessertName = "";
    let ingredients = "";
    let dessertTime = "";
    let dessertId = "";
    let themeSong = document.getElementById('page-audio');

    // audio to play/pause music buttons
    $('.play-audio').click(function () {
        themeSong.play();
    });

    $('.pause-audio').click(function () {
        themeSong.pause();
    });

    // api pull request from yummly api
    function recipeSearch() {

        console.log(dessertId + " = is search term")
        let queryURL = "http://api.yummly.com/v1/api/recipe/";

        $.ajax({
                // make ajax GET request
                url: queryURL + encodeURI(dessertId) + "?_app_id=d12c5941&_app_key=608774bd91d1850727be4bd6a7ba4dde",
                method: "GET",
            })
            .then(function (response) {
                console.log(response)


                // store the needed results data
                dessertId = response.id;
                dessertName = response.name;
                ingredients = response.ingredientLines;
                recipeLink = response.attribution.url;
                dessertTime = moment.utc(parseInt(response.totalTimeInSeconds) * 1000).format("HH:mm");

                $(".single-pick").html(dessertName);
                $("#ingredients").html(ingredients);
                $("#recipe-link").html(`<a href="${recipeLink}">${recipeLink}</a>`);

            });
    };

    // Read a page's GET URL variables and return them as an associative array.
    function getUrlVars() {
        let vars = [],
            hash;
        let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (let i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
    dessertId = getUrlVars()["id"];
    recipeSearch();

    // reset to main page and clear all values
    let reset = function() {
        window.location = "index.html";
        $("#dessert-name").empty();
        $(".form-check-input").prop("checked", false);
        $("tbody").empty();
        $(".single-pick").empty();
        $("#ingredients").empty();
        $("#recipe-link").empty();
        $(".video").empty();
        themeSong.pause();
    }

    $("#reset").on("click", function () {
        reset();
        themeSong.pause();
    });
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