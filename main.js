var products = [];
//var temp = [];
var keepsubt = [];

function loadProducts() {
    var i = 0;
    let textTable = document.getElementById("textTable");
    var title = document.createElement("div"); // create section
    title.classList.add("title"); //class row
    title.innerText = "Product Catalogue";
    textTable.appendChild(title); // append the row to the container

    while (i < products.length){
 
        var item = document.createElement("div"); // create div
        item.classList.add("item"); // class description
        textTable.appendChild(item); // append the item to the cart

        var description = document.createElement("div"); // create div
        description.classList.add("description"); // class description
        description.innerText = products[i].name; // add text to the column, the product's name
        item.appendChild(description); // append the item to the cart
        
        var price = document.createElement("div"); 
        price.classList.add("total-price"); 
        price.innerText = "$"+products[i].price; 
        item.appendChild(price); 

        var quantity = document.createElement("div");
        quantity.classList.add("quantity");
        quantity.innerHTML =`<button class="plus-btn" type="button" name="button" onclick="plus(${i})">+</button>`;
        quantity.innerHTML += '<input type="text" name="name" id="quant'+i+'" value="0"></input>';
        quantity.innerHTML += `<button class="minus-btn" type="button" name="button" onclick="minus(${i})">-</button>`;
        item.appendChild(quantity); 

        var subtotal = document.createElement("div"); 
        subtotal.classList.add("total-price");
        subtotal.innerText = "$0";
        subtotal.id = "subt"+i;
        item.appendChild(subtotal); 
    

        i = i + 1; 
    }
    var continue2 = document.createElement("div");
    continue2.classList.add("continue"); 
    continue2.innerHTML =`<button class="continue" type="button" name="button" onclick="displayCart(${i})">Continue</button>`;
    textTable.appendChild(continue2); 
}


function plus(i){

    var quant = document.getElementById("quant"+i).value;
    quant = parseInt(quant) + 1;
    document.getElementById("quant"+i).value = quant;
    updateSubt(i);
    
}

function minus(i){
    var quant = document.getElementById("quant"+i).value;
    quant = parseInt(quant) - 1;
    if (quant < 0){
        return
    }
    document.getElementById("quant"+i).value = quant;
    updateSubt(i);
}

function updateSubt(i){
    var subTotal = document.getElementById("subt"+i);
    var quant = document.getElementById("quant"+i).value;
    keepsubt.push(parseFloat(products[i].price*quant));
    subTotal.innerText = "$"+products[i].price*quant;
    return keepsubt;
}

//button.addEventListener('click', removeCartItem)
function displayCart(){
    $('#continueModal').modal(focus);
    var i = 0;
    while (i < products.length){
        var quant = document.getElementById("quant"+i).value;
        var subtotal = products[i].price*quant;
        if (subtotal !=0){
            let continueShopping = document.getElementById("continueShopping");
            var item = document.createElement("div"); // create div
            item.classList.add("cart-display-item"); // class description
            continueShopping.appendChild(item); // append the item to the cart

            var quantity = document.createElement("div");
            quantity.classList.add("cart-display-quantity");
            quantity.innerText = quant;
            item.appendChild(quantity); 

            var description = document.createElement("div"); // create div
            description.classList.add("cart-display-description"); // class description
            description.innerText = products[i].name; // add text to the column, the product's name
            item.appendChild(description); // append the item to the cart

            var subtotal1 = document.createElement("div");
            subtotal1.classList.add("cart-display-subtotal");
            subtotal1.innerText = "$"+subtotal;
            item.appendChild(subtotal1);
        }
        i = i+1;
    }
    var totalAmount = 0;
    var x = 0;
    while (x < keepsubt.length){
        totalAmount += keepsubt[x];
        x +=1;
    }
    
    let continueShopping = document.getElementById("continueShopping");
    var total = document.createElement("div");
    total.classList.add("cart-display-total");
    total.innerText =  "Total = $"+totalAmount.toFixed(2);
    continueShopping.appendChild(total);
}

function borrar(){
    let continueShopping = document.getElementById("continueShopping");
    
    while (continueShopping.hasChildNodes()) {
        continueShopping.removeChild(continueShopping.lastChild);
    }
}
function purchase(){
    alert("Thank you for shopping!");
    keepsubt = [];
    document.getElementById("quant0").value = 0;
    document.getElementById("quant1").value = 0;
    document.getElementById("quant2").value = 0;
    document.getElementById("quant3").value = 0;
    document.getElementById("quant4").value = 0;
    updateSubt(0);
    updateSubt(1);
    updateSubt(2);
    updateSubt(3);
    updateSubt(4);
    borrar();
}