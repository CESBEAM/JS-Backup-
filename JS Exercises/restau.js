form = document.getElementById('orderForm');



form.addEventListener('submit',orderButton);



function orderButton(e){
    e.preventDefault();
    
    var fieldInput = document.getElementById('placeOrder').value;
    var qtyInput = document.getElementById('quantyOrder').value;

    if(fieldInput==1){
    var qtyInput;
    var total = 50 * qtyInput;
    var change = 50 * qtyInput - 120;  
      
    document.getElementById('output').innerHTML = "Your order is Sisig  with total of  "+ total+ " and here's your total change "+change;

    document.getElementById('money').innerHTML = '<h4>$: ' +change+'</h4>';

    //clear Fields
    document.getElementById('placeOrder').value = '';
    document.getElementById('quantyOrder').value = '';

    }else if(fieldInput==2){
        var qtyInput;
        var total2 = 10 * qtyInput;
        var change2 = 10 * qtyInput - 120;

        document.getElementById('output').innerHTML = "Your order is Burger with total of  "+ total2+ " and here's your total change "+change2;
    document.getElementById('money').innerHTML = '<h4>$: ' +change2+'</h4>';

    //clear Fields
    document.getElementById('placeOrder').value = '';
    document.getElementById('quantyOrder').value = '';

    }else if(fieldInput==3){
        var qtyInput;
        var total3 = 20 * qtyInput;
        var change3 = 20 * qtyInput - 120;

        document.getElementById('output').innerHTML = "Your order is Hotsilog with total of  "+ total3+ " and here's your total change "+change3;
        document.getElementById('money').innerHTML = '<h4>$: ' +change3+'</h4>';

        //clear Fields
    document.getElementById('placeOrder').value = '';
    document.getElementById('quantyOrder').value = '';

    }else if(fieldInput==4){
        var qtyInput;
        var total4 = 12 * qtyInput;
        var change4 = 12 * qtyInput - 120;

        document.getElementById('output').innerHTML = "Your order is Spaghetti with total of  "+ total4+ " and here's your total change "+change4;
        document.getElementById('money').innerHTML = '<h4>$: ' +change4+'</h4>';

        //clear Fields
    document.getElementById('placeOrder').value = '';
    document.getElementById('quantyOrder').value = '';

    }else if(fieldInput==5){
        var qtyInput;
        var total5 = 20 * qtyInput;
        var change5 = 20 * qtyInput - 120;

        document.getElementById('output').innerHTML = "Your order is Adobo with total of  "+ total5+ " and here's your total change "+change5;
        document.getElementById('money').innerHTML = '<h4>$: ' +change5+'</h4>';

        //clear Fields
    document.getElementById('placeOrder').value = '';
    document.getElementById('quantyOrder').value = '';

    }else{
        document.getElementById('output').innerHTML = "gues pick a other order";
    }

    
}