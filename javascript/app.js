$(function () {

    let q = "";

    // -----------------------Kim's Section Starts------------------------  
    let dessertInput = "";

    // validate search form entry
 /*   function validateForm() {
        let x = $("[name='dessert']").val();
        if (x == "") {
            console.log("No text entered");
        }
    }
*/
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
    };

    // search variable
    let searchTerm = function() {
        console.log('search term is= ' + q);
        $("#stay-hidden").val(q);
        $(".option-one").attr("id", "hide-one");
        $(".enter-div").attr("id", "hide-three");
        $(".submit-form").removeAttr("id");
    };

    // Select to enter search text or use radio criteria for search
    $(".form-check-input").on('click', function () {
        // make visible the search term input box
        if ($("#enter-name").is(':checked')) {
            $(".option-one").removeAttr("id");
            $(".enter-div").removeAttr("id");
            $(".reset-div").removeAttr("id");
            $("#intro-question").attr("id", "hide-one");
        }
        // make visiable the criteria radio questions & buttons
        if ($("#criteria-search").is(':checked')) {
            $(".option-two").removeAttr("id");
            $(".enter-div").removeAttr("id");
            $(".reset-div").removeAttr("id");
            $("#intro-question").attr("id", "hide-one");
        }
    });

    // On click set the api search term to a new form for submit
    $("#enter").on("click", function(event) {

        // if the search is blank or if a none alphabetical character (or space) is search, page will reset
        if ($("#dessert-name").val() == "" || !$("#dessert-name").val().match(/^[a-zA-Z\s]*$/)) {
            console.log("no text")
           reset();
        } else {
            q = $("#dessert-name").val();
            searchTerm();
        }

        if ($("input[name='dessert-type']").is(":checked")) {
            console.log("checked")
            q = "apple pie"
        //    q = $("input[name='dessert-type']").val() + $("input[name='dessert-type']").val() + $("input[name='dessert-type']").val()
            searchTerm();
        }
        return false;

    });
    
     
    
    // ----------------------Kim's Section Ends/Anthony's Section Starts----------------------------------

    /*
        // --------------------------------------------------
        let queryURL = "https://www.googleapis.com/youtube/v3/AIzaSyBqsfshUVe2dhIcYn_bKTXrpr9Pst1g3Vo"

        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/AIzaSyBqsfshUVe2dhIcYn_bKTXrpr9Pst1g3Vo",
            method: "GET"
        }).then(function (response) {
            console.log(response);
        })
    */


    // ---------------------Anthony's Section Ends/ Ericka's Section Starts----------------------------------




});