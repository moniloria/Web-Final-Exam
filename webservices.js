const URL = "https://products-catalog-8e792.firebaseio.com/set-1.json";

fetchData();

function fetchData(){
    var request = new XMLHttpRequest();
    request.open('GET', URL, true); //method, URL, async (operates asynchronously)
    request.onload = function() { //
        const OK = 200;
        if (request.status !== OK) {
            document.writeln('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
            return;
        }
        var remoteProducts = JSON.parse(request.responseText);

        remoteProducts.forEach(element => {
        products.push(element);
        });
        //refreshTable();
        loadProducts();
        
    }; // end of function()
    request.send();

} 