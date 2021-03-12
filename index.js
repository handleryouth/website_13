var checkbox =  document.querySelector(".checkbox");
var price1 = document.querySelector(".price1");
var price2 = document.querySelector(".price2");
var price3 = document.querySelector(".price3");

checkbox.addEventListener("click", function(){
  if (document.querySelector(".checkbox").checked === true){
    price1.innerText = "$19.99";
    price2.innerText = "$24.99";
    price3.innerText = "$39.99";
  }
  else{
    price1.innerText = "$199.99";
    price2.innerText = "$249.99";
    price3.innerText = "$399.99";
  }
})
