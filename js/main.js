
function innerTextToNumber(id){
    const element = document.getElementById(id).innerText;
    const number = parseFloat(element) ;
    return number
}





function updateTotal() {
    const memory16 = document.getElementById('16gb-memory');
    const storage512 = document.getElementById('storage-256');
    const storage1tb = document.getElementById('storage-1tb');
    const expressDelivery = document.getElementById('express-delivery') ;
    

    const bestPrice = innerTextToNumber('best-price');
    const memoryprice = innerTextToNumber ('memory-cost');
    const storageCost = innerTextToNumber('storage-cost');
    const deliveryCost = innerTextToNumber('delivery-cost');

    const total = bestPrice + memoryprice + storageCost + deliveryCost ;

    document.getElementById('total-cost').innerText = total ;
    
}


// 8 GB memory
document.getElementById('8gb-memory').addEventListener('click', function(){
    const memoryCostInput = document.getElementById('memory-cost');
    const memorycostNumber = memoryCostInput.innerText ;
    memoryCostInput.innerText = '0' ;
    updateTotal()
})

// 16 GB memory
document.getElementById('16gb-memory').addEventListener('click', function(){
    const memoryCostInput = document.getElementById('memory-cost') ;
    const memorycostNumber = memoryCostInput.innerText ;
    memoryCostInput.innerText = '180' ;
    updateTotal()
    
})


// 256 GB Storage
document.getElementById('storage-256').addEventListener('click', function(){
    const storageCostInput = document.getElementById('storage-cost') ;
    const storageCostNumber = storageCostInput.innerText ;
    storageCostInput.innerText = '0' ;
    updateTotal()
    
})

// 512 GB storage
document.getElementById('storage-512').addEventListener('click', function(){
    const storageCostInput = document.getElementById('storage-cost') ;
    const storageCostNumber = storageCostInput.innerText ;
    storageCostInput.innerText = '100' ;
    updateTotal()
})

// 1 TB storage 
document.getElementById('storage-1tb').addEventListener('click', function(){
    const storageCostInput = document.getElementById('storage-cost') ;
    const storageCostNumber = storageCostInput.innerText ;
    storageCostInput.innerText = '180' ;
    updateTotal()
})


// Free shipping 
document.getElementById('free-delivery').addEventListener('click', function(){
    const freeDeliveryText = document.getElementById('delivery-cost');
    const freeDelivery = freeDeliveryText.innerText;
    freeDeliveryText.innerText = '0';
    updateTotal()
})

// Express Shipping
document.getElementById('express-delivery').addEventListener('click', function(){
    const freeDeliveryText = document.getElementById('delivery-cost');
    const freeDelivery = freeDeliveryText.innerText;
    freeDeliveryText.innerText = '20';
    updateTotal()
})

 // promo code
 document.getElementById('promo-submit').addEventListener('click',function(){
    const total = document.getElementById('total-cost').innerText ;
    const promoTotal = Math.floor(total - (total*20/100))  ;
    const promoFieldInput = document.getElementById('promo-input');
    const promoSuccess = document.getElementById('promo-success') ;
    const promoSection = document.getElementById('promo-section');
    const promoField = promoFieldInput.value ;
    document.getElementById('total-cost').innerText = promoTotal

    // cheak promo
    if (promoField == 'stevekaku') {
        promoTotal ;
        promoSuccess.style.display = 'block' ;
        promoSection.style.display = 'none' ;
        
    }
    else {
        alert("Invalid Promo Code");
    }

    // clear field 
    promoFieldInput.value = '' ;

})


 document.getElementById('sub-total').addEventListener('click' , function(){
    updateTotal()
 })