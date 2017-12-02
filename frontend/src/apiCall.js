var inputFromEditor = "placeholder"; 

var apiUrl = "http://api.wolframalpha.com/v2/query?appid=69XEEY-JLR5EHW536&output=json&input=mitochondria" 
fetch(apiUrl).then(function(response) {
    if (response.status !== 200) {
        console.log("error is there: " + response.status); 
        return; 
    }
    response.json().then(function(data) {
        console.log(data); 
    }); 
}).catch(function(err) {
    console.log("Fetch error ", err); 
});     

console.log("Hello World"); 