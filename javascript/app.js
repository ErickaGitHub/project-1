$(function () {


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
    // Select to enter search text or use radio criteria for search
    $(".form-check-input").on('click', function () {
        // make visible the search term input box
        if ($("#enter-name").is(':checked')) {
            $(".option-one").removeAttr("id");
            $(".enter-div").removeAttr("id");
            $("#intro-question").attr("id", "hide-one");
            let q = $("input[name=dessert-name]").val().trim();
            console.log(q);
        }
        // make visiable the criteria radio questions & buttons
        if ($("#criteria-search").is(':checked')) {
            $(".option-two").removeAttr("id");
            $(".enter-div").removeAttr("id");
            $("#intro-question").attr("id", "hide-one");
        }
    });

    // On click set the api search term to a new form for submit
    $("#enter").on("click" , function() {


    })
    
     
    
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