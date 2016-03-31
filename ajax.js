(function(){
	"use strict"

	var work = "https://api.github.com/users/jisaacks/orgs";

	$(".click-me").on("click", function(){
		$.ajax({
			type: "GET",
			url: work,
			dataType: "JSON",
			success: function show(data) {
				console.log(data);
				for (var i = 0; i < data.length; i++){
					var avatar = data[i].avatar_url;
					var login = data[i].login;


					$(".items")
					  .append( $("<li>") )
					  .find("li:last-child")
					    .append( $("<article>") )
					    .find('article')
						  .append( $("<p>") )
						  .find('p')
						    .append( $('<img>') )
						    .find('img')
						      .attr('src', avatar)
						      .end()  // go back one "find()"
						    .append(login);

				};

			}
		})

	});


})();