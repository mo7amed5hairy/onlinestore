let shopping_cart_icon = document.querySelector('.fa-shopping-cart');
let hide_cart_icon = document.querySelector('.fa-circle-xmark');

let cart = document.querySelector('.cart');

//show cart
shopping_cart_icon.addEventListener('click',()=>{
   cart.classList.toggle('active');
});

//hide cart
hide_cart_icon.addEventListener('click',()=>{
   cart.classList.toggle('active');
});

// fetch data form json file and store in localstorage to make addtocart


fetch('products.json')
    .then((response) => response.json())
    .then((products) => {

      let addtocartbtn = document.querySelectorAll('.add_to_cart_btn');
      let removeitem = document.querySelectorAll('.remove_item');

      addtocartbtn.forEach(cartbtn => {
          cartbtn.addEventListener('click', (event)=>{
               const product_id = event.target.getAttribute('data-id');
               const item_details =  products.find(({ id }) => id == product_id);

               storeAtLocalStorage(item_details);
               addtocart();
          })
      });

      let item_array = [];
      
      function storeAtLocalStorage(item)
      {
         item_array.push(item);
         localStorage.setItem('item_data',JSON.stringify(item_array));
       
      }

      function addtocart(){
         if(localStorage.item_data){
            let item;
         const item_data_length = JSON.parse(localStorage.item_data).length;

         //   console.log( JSON.parse(localStorage.item_data).length);
         const items_in_cart = document.querySelector('.items_in_cart');
         for(let i=0 ; i < item_data_length; i++){
         item +=`
           <div class="item">
                <img src="${JSON.parse(localStorage.item_data)[i].img}" alt="" srcset="">
                
                <div class="item_content">
                    <p>
                    ${JSON.parse(localStorage.item_data)[i].name}
                    </p>

                    <div class="item_price">
                     <h4>$${JSON.parse(localStorage.item_data)[i].price}</h4>
                    </div>

                    <div class="item_btns">
                        <button class="decrement">-</button>
                        <span class="quantity">0</span>
                        <button class="increment">+</button>
                    </div>
                </div>

                <button onclick="removeItemFromCart(this.value)" class="remove_item" value="${JSON.parse(localStorage.item_data)[i].id}">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
         `
         items_in_cart.innerHTML = item;
         }
      }
      }


 

   
      addtocart();

    });




    function removeItemFromCart(value){


        const stored = JSON.parse(localStorage.getItem("item_data"));
  const index = stored.indexOf(value);
  stored.splice(index, 1);
  localStorage.setItem("item_data", JSON.stringify(stored));



}