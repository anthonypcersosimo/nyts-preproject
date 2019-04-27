var searchNyt = function(){
    var query = "celtics";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=2yGTFAjTEiylZZ0ASPcCbqwYFUjjt7MI";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            console.log(response);
            var results = response.response.docs;
            console.log(results);

            for (var i = 0; i < results.length; i++) {
                console.log(results[i].headline.main);
                console.log(results[i].byline.original);
                console.log(results[i].section_name);
                console.log(results[i].pub_date);
                console.log(results[i].web_url);

                var body = $("<div>")
                var headline = results[i].headline.main;
                var p = $("<p>").text("Headline: " + headline);
                
                body.append(p);
                $("#headlineHere").prepend(body);
            }
        });
};

searchNyt();