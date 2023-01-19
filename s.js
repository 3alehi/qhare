let lo = document.getElementById('loading')
let asli = document.querySelector('.asli')
let circle = document.querySelector(".color-option");
let call = document.getElementById('call')
circle.addEventListener("click", (e)=>{
  let target = e.target;
  if(target.classList.contains("circle")){
    circle.querySelector(".active").classList.remove("active");
    target.classList.add("active");
    document.querySelector(".main-images .active").classList.remove("active");
    document.querySelector(`.main-images .${target.id}`).classList.add("active");
  }
});
call.addEventListener('click' , ()=>{
    alert(55)
})