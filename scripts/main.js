// local storage example
var $coffeeForm = $('[data-coffee-order="form"]');
var $order = $('[data-role="order"]');
var $email = $('[data-role="email"]');
var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';
var orders = {};

function storeValue(name, title) {
    localStorage.setItem(title, name.val());
}

function getSize() {
    var size = $('input[data-role=size]:checked').val();
    localStorage.setItem('size', size);
}

function getFlavor() {
    var flavor = $('[data-role="flavor"]').find(":selected").text();
    localStorage.setItem('flavor', flavor);
}

function getStrength() {
    var strength = $('[data-role="strength"]').val();
    localStorage.setItem('strength', strength);
}

// 
function setDefaults() {
    var flavorValue = (localStorage.getItem('flavor')).toLowerCase();
    $order.val(localStorage.getItem('order'));
    $email.val(localStorage.getItem('email'));
    $('input[data-role=size]:checked').val('size');
    $('input:radio[data-role=size]').filter('[value=' + localStorage.getItem('size') + ']').prop('checked', true);
    $('[data-role="flavor"]').find('option[value=' + flavorValue + ']').prop('selected', true);
    $('[data-role="strength"]').val(localStorage.getItem('strength'));
}

$coffeeForm.submit(function (event) {
  event.preventDefault();
  storeValue($order, 'order');
  storeValue($email, 'email');
  getSize();
  getFlavor();
  getStrength();
});

setDefaults();