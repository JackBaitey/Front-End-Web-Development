function fetchAPI(url,callback){
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(data) {
		callback(data)
	});
}
export {fetchAPI};