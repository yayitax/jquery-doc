var promise = callToAPI(arg1, arg2);

promise.then(function(futureValue) {

    // Handle futureValue

});

promise.then(function(futureValue) {

    // Do something else

});

promise.then(function(futureValue) {

    // We got a value

}, function() {

    // Something went wrong

});

// JQuery
function successFunc() {
    console.log("success!");
}

function failureFunc() {
    console.log("failure!");
}

$.when(
    $.ajax("/main.php"),
    $.ajax("/modules.php"),
    $.ajax("/lists.php")
).then(successFunc, failureFunc);

function getLatestNews() {
    return $.get("latestNews.php", function(data) {
        console.log("news data received");
        $(".news").html(data);
    });
}

function getLatestReactions() {
    return $.get("latestReactions.php", function(data) {
        console.log("reactions data received");
        $(".reactions").html(data);
    });
}

function showAjaxedContent() {
    // The .promise() is resolved *once*, after all animations complete
    return $(".news, .reactions").slideDown(500, function() {
        // Called once *for each element* when animation completes
        $(this).addClass("active");
    }).promise();
}

function removeActiveClass() {
    return $.Deferred(function(dfd) {
        setTimeout(function() {
            $(".news, .reactions").removeClass("active");
            dfd.resolve();
        }, 4000);
    }).promise();
}

$.when(
        getLatestNews(),
        getLatestReactions()
    )
    .then(showAjaxedContent)
    .then(removeActiveClass)
    .then(function() {
        console.log("Requests succeeded and animations completed");
    }).fail(function() {
        console.log("something went wrong!");
    });