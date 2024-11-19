fetch('products.json')
    .then((response) => response.json())
    .then((products) => {

        console.log(products)
        
        const swiper_products = document.querySelector('.swiper_products');
        
        products.forEach(product => {
            
            
            swiper_products.innerHTML +=`
               <div class="swiper-slide product_slide">
            <div class="product_discount">
                <h3>%50</h3>
            </div>
            <div class="product_img">
                <img src="${product.img}" alt="">
            </div>

           <div class="product_rate">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
           </div>

           <div class="product_content">
            <p>
                <a href="#">
                ${product.name}
                </a>
            </p>
           </div>
           <div class="product_price">
            
                <h3 class="price">
                <span>
                    ${product.price}
                </span>
                </h3>
                <del class="old_price">$300</del>
        
           </div>
           <div class="icons">
            <button class="add_to_cart_btn">
                <i class="fa fa-shopping-cart"></i>
                ADD TO CART
            </button>
            <button class="add_to_wishlist_btn">
                <i class="fa fa-heart"></i>
            </button>
           </div>
        </div>
        
        `
    })
    
});