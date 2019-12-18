// Using the core $.ajax() method
$.ajax({

        // The URL for the request
        url: "post.php",

        // The data to send (will be converted to a query string)
        data: {
            id: 123
        },

        // Whether this is a POST or GET request
        type: "GET",

        // The type of data we expect back
        dataType: "json",
    })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(function(json) {
        $("<h1>").text(json.title).appendTo("body");
        $("<div class=\"content\">").html(json.html).appendTo("body");
    })
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    .fail(function(xhr, status, errorThrown) {
        alert("Sorry, there was a problem!");
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.dir(xhr);
    })
    // Code to run regardless of success or failure;
    .always(function(xhr, status) {
        alert("The request is complete!");
    });


// Using jQuery's Ajax convenience methods

// Get plain text or HTML
$.get("/users.php", {
    userId: 1234
}, function(resp) {
    console.log(resp); // server response
});

// Add a script to the page, then run a function defined in it
$.getScript("/static/js/myScript.js", function() {
    functionFromMyScript();
});

// Get JSON-formatted data from the server
$.getJSON("/details.php", function(resp) {

    // Log each key in the response data
    $.each(resp, function(key, value) {
        console.log(key + " : " + value);
    });
});

// Using .load() to populate an element
$("#newContent").load("/foo.html");

// Using .load() to populate an element based on a selector
$("#newContent").load("/foo.html #myDiv h1:first", function(html) {
    alert("Content updated!");
});

// Turning form data into a query string
$("#myForm").serialize();

// Creates a query string like this:
// field_1=something&field2=somethingElse

// Creating an array of objects containing form data
$("#myForm").serializeArray();

// Creates a structure like this:
// [
//   {
//     name : "field_1",
//     value : "something"
//   },
//   {
//     name : "field_2",
//     value : "somethingElse"
//   }
// ]

// Using validation to check for the presence of an input
$("#form").submit(function(event) {

    // If .required's value's length is zero
    if ($(".required").val().length === 0) {

        // Usually show some kind of error message here

        // Prevent the form from submitting
        event.preventDefault();
    } else {

        // Run $.ajax() here
    }
});

// Validate a phone number field
$("#form").submit(function(event) {
    var inputtedPhoneNumber = $("#phone").val();

    // Match only numbers
    var phoneNumberRegex = /^\d*$/;

    // If the phone number doesn't match the regex
    if (!phoneNumberRegex.test(inputtedPhoneNumber)) {

        // Usually show some kind of error message here

        // Prevent the form from submitting
        event.preventDefault();
    } else {

        // Run $.ajax() here
    }
});

// Using a proxy with a prefilter
$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    if (options.crossDomain) {
        options.url = "http://mydomain.net/proxy/" + encodeURIComponent(options.url);
        options.crossDomain = false;
    }
});

// Using the optional dataTypes argument
$.ajaxPrefilter("json script", function(options, originalOptions, jqXHR) {

    // Do all of the prefiltering here, but only for
    // requests that indicate a dataType of "JSON" or "script"
});


// Using YQL and JSONP
$.ajax({
    url: "http://query.yahooapis.com/v1/public/yql",

    // The name of the callback parameter, as specified by the YQL service
    jsonp: "callback",

    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",

    // Tell YQL what we want and that we want JSON
    data: {
        q: "select title,abstract,url from search.news where query=\"cat\"",
        format: "json"
    },

    // Work with the response
    success: function(response) {
        console.log(response); // server response
    }
});

// Setting up a loading indicator using Ajax Events
$("#loading_indicator")
    .ajaxStart(function() {
        $(this).show();
    })
    .ajaxStop(function() {
        $(this).hide();
    });