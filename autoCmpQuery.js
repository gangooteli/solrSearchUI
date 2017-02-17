
$(document).ready(function(){

	searchString = $('input');
	server = "http://localhost:8983/solr/";
	fParam = "wiki/suggest?hl=on&indent=on&q=";
	eParam = "&wt=json";
	searchQuery="";
	result="";
	
	searchString.bind("keyup", function(){
		table = $('tbody');
		tString = $('input').val().trim();
		
		if (tString.length <= 0){
			table.empty();
		} else {
			tString = "list of c";//----------------
			
			//searchQuery = server + fParam + tString + eParam;
			searchQuery = "file:///Users/shekhar/Dropbox/Public/nikhil/test.json";//-----------------
			$.ajax({
				type	:'GET',
				//url		:'http://localhost:8983/solr/wiki/suggest',
				url		:searchQuery,
				crossDomain:true,
				// data	:{
				// 	hl : 'on',
				// 	indent: 'on',
				// 	q : tString,
				// 	wt : 'json'

				// },
				dataType: 'jso',
				success: function(result){
						//console.log(result['suggest']['businessSuggester'][tString]["suggestions"]);
						suggestions = result['spellcheck']['suggestions'][tString]["suggestions"];
						//ul = $('ul');
						table.empty();
						for (i = 0; i < suggestions.length; i++) {
							console.log(suggestions[i]['term']);
							tr = $('<tr></tr>');
							tr.append($('<td>' + suggestions[i]['word'] + '</td>'));
							console.log(tr);
							tr.appendTo(table);
						}
					//console.log(result.hasOwnProperty("suggest"));//----------------
				}
			});
		}

	});
});

// http://localhost:8983/solr/wiki/suggest?hl=on&indent=on&q=list%20of%20c&wt=json
//https://shrib.com/3cBgjdVS6d7bDgT
//103.47.153.188