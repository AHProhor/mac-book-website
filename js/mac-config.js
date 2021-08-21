
function memoryPriceAdding(productId,price){
    const memoryPrice = document.getElementById(productId);
    mainMemoryPrice = parseInt(memoryPrice.innerText);
    memoryPrice.innerText = price;
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