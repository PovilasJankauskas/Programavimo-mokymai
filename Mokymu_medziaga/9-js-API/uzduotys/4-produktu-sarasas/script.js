function addProductsIntoDiv(products) {
    console.log(products)
}


window.addEventListener('load', () => {
fetch('https://fakestoreapi.com/products/')
.then(response => response.json())
.then(data => console.log(data));
});

