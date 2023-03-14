const menuEmail = document.querySelector('.navbar-email');
const desktopEmail = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const menuMovil = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const shoppingCard = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')
const detailCard = document.querySelector('.product-detail-card');


menuEmail.addEventListener('click' , toggleMenuDesktop)
burgerMenu.addEventListener('click', toggleMenuMovil)
carrito.addEventListener('click', toggleCarrito)

function toggleMenuDesktop(){
    const isAsideClosed = shoppingCard.classList.contains('inactive')
    
    if(!isAsideClosed){
        shoppingCard.classList.add('inactive')
    }
    
    desktopEmail.classList.toggle('inactive')
}

function toggleMenuMovil(){


    menuMovil.classList.toggle('inactive')
}

function toggleCarrito(){
    const isMenuDesktopClosed= desktopEmail.classList.contains('inactive')
    const isMobileMenuClosed = desktopEmail.classList.contains('inactive')

    if(!isMobileMenuClosed){
        menuMovil.classList.add('inactive')
    }

    if(!isMenuDesktopClosed){
        desktopEmail.classList.add('inactive')
    }

    shoppingCard.classList.toggle('inactive')
}





const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'movil',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'movil',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProduct(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
    
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
    
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard);
    
    }
}

renderProduct(productList)

