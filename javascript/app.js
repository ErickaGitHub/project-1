//$(function(){
    $.ajax({
        method: 'GET',
        url: 'https://api-endpoint.igdb.com/games/?search=halo&fields=*',
        headers: {
            'user-key': '883731a3016e0a598926c2eb709f3f68',
            'Access-Control-Allow-Origin': "127.0.0.1",
            'Accept': 'application/json'
        }
    }).done(function (response) {
        console.log(response);
    });
  
  
    
//});