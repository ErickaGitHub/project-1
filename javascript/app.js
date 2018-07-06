$(function () {


    // -----------------------Kim's Section Starts------------------------  
    let dessertInput = "";

    // validate search form entry
    function validateForm() {
        let x = $("[name='dessert']").val();
        if (x == "") {
            console.log("No text entered");
        }
    }

    // Selet to enter search text or use radio criteria for search
    $(".form-check-input").on('click', function () {
        // make visible the search term input box
        if ($("#enter-name").is(':checked')) {
            $(".option-one").removeAttr("id");
            $(".submit-div").removeAttr("id");
            $("#intro-question").attr("id", "hide-one");
        }
        // make visiable the criteria radio questions & buttons
        if ($("#criteria-search").is(':checked')) {
            $(".option-two").removeAttr("id");
            $(".submit-div").removeAttr("id");
            $("#intro-question").attr("id", "hide-one");
        }
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