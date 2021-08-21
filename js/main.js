
// 8 GB memory
document.getElementById('8gb-memory').addEventListener('click', function(){
    const memoryCostInput = document.getElementById('memory-cost');
    const memorycostNumber = memoryCostInput.innerText ;
    memoryCostInput.innerText = parseInt(0) ;
})

// 16 GB memory
document.getElementById('16gb-memory').addEventListener('click', function(){
    const memoryCostInput = document.getElementById('memory-cost') ;
    const memorycostNumber = memoryCostInput.innerText ;
    memoryCostInput.innerText = parseInt(180) ;
})


// 256 GB Storage
document.getElementById('storage-256').addEventListener('click', function(){
    const storageCostInput = document.getElementById('storage-cost') ;
    const storageCostNumber = storageCostInput.innerText ;
    storageCostInput.innerText = parseInt(0) ;
    
})

// 512 GB storage
document.getElementById('storage-512').addEventListener('click', function(){
    const storageCostInput = document.getElementById('storage-cost') ;
    const storageCostNumber = storageCostInput.innerText ;
    storageCostInput.innerText = parseInt(100) ;
})

// 1 TB storage 
document.getElementById('storage-1tb').addEventListener('click', function(){
    const storageCostInput = document.getElementById('storage-cost') ;
    const storageCostNumber = storageCostInput.innerText ;
    storageCostInput.innerText = parseInt(180) ;
})


// Free shipping 
document.getElementById('free-delivery').addEventListener('click', function(){
    const freeDeliveryText = document.getElementById('delivery-cost');
    const freeDelivery = freeDeliveryText.innerText;
    freeDeliveryText.innerText = parseInt(0);
})

// Express Shipping
document.getElementById('express-delivery').addEventListener('click', function(){
    const freeDeliveryText = document.getElementById('delivery-cost');
    const freeDelivery = freeDeliveryText.innerText;
    freeDeliveryText.innerText = parseInt(20);
})


// changing total price 
// const totalText = document.getElementById('total-cost');
// totalCost = totalText.innerText;
// totalText.innerText = 