fetch('products.json')
    .then((response) => response.json())
    .then((products) => {

    
        
        const swiper_products = document.querySelector('.swiper_products');
        const swiper_electronics = document.querySelector('.swiper_electronics');
        const swiper_mobiles = document.querySelector('.swiper_mobiles');


        

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
            <button class="add_to_cart_btn" data-id="${product.id}">
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

        products.forEach(product => {
            
            if(product.catetory == 'electronics'){
            swiper_electronics.innerHTML +=`
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
            <button class="add_to_cart_btn" data-id="${product.id}">
                <i class="fa fa-shopping-cart"></i>
                ADD TO CART
            </button>
            <button class="add_to_wishlist_btn">
                <i class="fa fa-heart"></i>
            </button>
           </div>
        </div>
        
        `
            }
    })

        products.forEach(product => {
            
        if(product.catetory == 'mobiles'){
            swiper_mobiles.innerHTML +=`
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
        <button class="add_to_cart_btn" data-id="${product.id}">
            <i class="fa fa-shopping-cart"></i>
            ADD TO CART
        </button>
        <button class="add_to_wishlist_btn">
            <i class="fa fa-heart"></i>
        </button>
       </div>
    </div>
    
    `
        }
    })




});












