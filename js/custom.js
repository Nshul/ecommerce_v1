/**
 * Created by anshu on 6/30/2017.
 */
let cartItems=[0,0,0,0,0,0,0]
$(function () {
    $('.buy').click(function (ev) {
        console.log(parseInt($(ev.target).parent().parent().attr('data-id')));
        addAndSave(ev);
    })
});

function addAndSave(ev){
    retrieveCart();
    let ProductId=parseInt($(ev.target).parent().parent().attr('data-id'));
    cartItems[ProductId]++;
    saveCart();
}
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cartItems))
}
function retrieveCart() {
    let savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    }
}