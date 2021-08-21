
function memoryPriceAdding(productId,price){
    const productPrice = document.getElementById(productId);
    mainMemoryPrice = parseInt(productPrice.innerText);
    productPrice.innerText = price;
    let totalPrice = document.getElementById('total-price');
    const totalPriceText = parseInt(totalPrice.innerText);
    totalPrice.innerText = totalPriceText + price;    
}

// extra memory added section
document.getElementById('memory-btn-8gb').addEventListener('click',function(){
    memoryPriceAdding('memory-price',0);
});
document.getElementById('memory-btn-16gb').addEventListener('click',function(){
    memoryPriceAdding('memory-price',180);
});

// Extra storage added section
document.getElementById('ssd-256gb').addEventListener('click',function(){
    memoryPriceAdding('storage-price',0);
});
document.getElementById('ssd-512gb').addEventListener('click',function(){
    memoryPriceAdding('storage-price',100);
});
document.getElementById('ssd-1tb').addEventListener('click',function(){
    memoryPriceAdding('storage-price',180);
});

// Delivery charge added
document.getElementById('free-deliver').addEventListener('click',function(){
    memoryPriceAdding('delicery-price',0);
});
document.getElementById('delivery-on-price').addEventListener('click',function(){
    memoryPriceAdding('delicery-price',20);
});


// promotion section  

document.getElementById('promo-btn').addEventListener('click',function(){
    //console.log('clicked');
    let paymentPrice = 0;
    const userPromo = document.getElementById('user-promo');
    const userInput = userPromo.value;
    if(userInput == 'stevekaku'){
        const total = document.getElementById('total-price');
        const totalprice = parseInt(total.innerText);
        paymentPrice = totalprice - (totalprice *.2);
        userPromo.value= ('');
        document.getElementById('final-payment').innerText = paymentPrice;
    }
    else{
        userPromo.value= ('');
    }
});