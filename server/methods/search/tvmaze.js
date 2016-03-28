Meteor.methods({
  tvmaze:function(search, type){
    check(search, String);
    check(type, String);
    
    try {
      var response = HTTP.call("GET", "http://api.tvmaze.com/search/shows", {params: {q: search}});
        var d = response.data;
    } 
    catch (error) {
      console.log(error);
      return error.status_message;
    }

    var results = [];
		for (var i in d) {
			if (search.hasOwnProperty(i)) {
				
				s = d[i].show;
				var id = s.id || 0;
				var title = s.name || name || "Unknown";
				var release_date = s.premiered || 0;
				var year = (release_date != 0) ? release_date.slice(0,4) : 0;
				var overview = s.summary.replace(/<(?:.|\n)*?>/gm, '') || "No overview found.";
				overview = (overview.length > 250) ? overview.slice(0,250) + "..." : overview;
				if(s.image){var poster_path = s.image.medium} else {var poster_path = ""};
				var link = s.url || "http://www.tvmaze.com//" + show.id + "/" + title;
				var media_type = type || "undefined";
				var index = i;
				if (s.externals.thetvdb) {var tvdb = s.externals.thetvdb} else { var tvdb = undefined };
        
				results.push({
				  "id": id,
				  "tvdb": tvdb,
				  "title": title,
				  "year": year,
				  "release_date": release_date,
				  "overview": overview,
				  "poster_path": poster_path,
				  "link": link,
				  "media_type": media_type,
				  "index": index
				});
			}
		}
    return results
 }
});
