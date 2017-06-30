/**
 * Created by anshu on 6/30/2017.
 */
let cartItems=[];
let productItem;
let Price;
let amountItem;
let cartShow;
let grossAmount;
$(function () {
    cartShow= $('#item-list');
    // $('.addqty').click(funcaddQty);
    // $('.subqty').click(funcsubQty);
    productItem=[0,"Laptop","Mobile Phone","TV","Toy Car","Vase","Pencil Set"];
    Price=[0,45000,52000,340000,5000,600,30];
    amountItem=[0,0,0,0,0,0,0]
    retrieveCart();
    showCart();
});

function funcaddQty(ev){
    let ProductId=parseInt($(ev.target).parent().attr('data-id'));
    console.log(ProductId);
    cartItems[ProductId]++;
    saveCart();
    retrieveCart();
    calcgrossamount();
    calcEachAmount();
    showCart();
}

function funcsubQty(ev){
    let ProductId=parseInt($(ev.target).parent().attr('data-id'));
    console.log(ProductId);
    cartItems[ProductId]--;
    saveCart();
    retrieveCart();
    calcgrossamount();
    calcEachAmount();
    showCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cartItems))
}

function calcEachAmount(){
    for(var i=0;i<7;i++){
        amountItem[i]=Price[i]*cartItems[i];
    }
}

function retrieveCart() {
    let savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    }
}

function calcgrossamount() {
    let temp=+0;
    for(var i=1;i<7;i++)
        temp+=amountItem[i];
    grossAmount=temp;
}

function showCart() {
    cartShow.empty();
    calcEachAmount();
    calcgrossamount();
    for(var i=1;i<7;i++){
        if(cartItems[i]!=0){
            let temp=$('<li>').attr('class','list-group-item row').attr('data-id',i);
            temp.append($(`<span class="col-3 offset-1">${productItem[i]}</span><span class="col-2">${Price[i]}</span>`));
            temp.append($(`<span class="col-1 subqty">-</span>`).click(funcsubQty));
            temp.append($(`<span class="col-1">${cartItems[i]}</span>`));
            temp.append($(`<span class="col-1 addqty">+</span>`).click(funcaddQty));
            temp.append($(`<span class="col-3">${amountItem[i]}</span></li>`));
            cartShow.append(temp);
        }
    }
    $('#grand-total-amount').text(grossAmount);
}