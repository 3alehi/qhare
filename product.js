let product =[
    {name:"پرسیل"  , id:1 , img:"6.jpg", filter: 10 , price:25_000, lorem :'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, soluta?'},
    {name:"گلنرگ"  , id:2 , img:"4.jpg", filter: 10 , price:25_000, lorem :'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, soluta?'},
    {name:"جام"  , id:3 , img:"5.jpg", filter: 10 , price:25_000, lorem :'Lorem, ipsum dolor sit amet cnsectetur adipisicing elit. Laudantium, soluta?'},
    {name:"پریل"  , id:4 , img:"3.jpg", filter: 10 , price:25_000, lorem :'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, soluta?'},
    {name:"گل"  , id:5 , img:"2.jpg", filter: 20 , price:25_000, lorem :'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, soluta?'},
]
let se = document.querySelector('.se')
let seach = document.getElementById('seach')
let card = document.querySelector('.card')



product.forEach(product =>{
    card.innerHTML += `
    <div class="product-card">

<div class="main-images">
  <img id="blue" class="blue active" src="${product.img}" alt="blue">
</div>
<div class="shoe-details">
  <span class="shoe_name">${product.name}</span>
  <p>${product.lorem}</p>
  <div class="stars">
    <i class='bx bxs-star' ></i>
    <i class='bx bxs-star' ></i>
    <i class='bx bxs-star' ></i>
    <i class='bx bxs-star' ></i>
    <i class='bx bx-star' ></i>
  </div>
</div>
<div class="color-price">
  <div class="color-option">
    <div class="circles">
      <h4>تعدا  ${product.filter}تا ب بالا</h4>
  
    </div>
  </div>
  <div class="price">
    <span class="price_num">85000 تومن</span>
    <span class="price_letter">Nine dollar only</span>
  </div>
</div>
<div class="button">
  <div class="button-layer"></div>
  <button onclick="call1()" id="call"'>خرید</button>
</div>
</div>
    `
})

function call1(){
    window.location = "tel:495898694"

}
