const product =[
    {
        id: 0,
        Image: 'img/1.png',
        title: 'item 1',
        price: 25,
    },
    {
        id: 1,
        Image: 'img/2.png',
        title: 'item 2',
        price: 26,
    },
    {
        id: 2,
        Image: 'img/3.png',
        title: 'item 3',
        price: 27,
    },
    {
        id: 3,
        Image: 'img/4.png',
        title: 'item 4',
        price: 29,
    },
    {
        id: 4,
        Image: 'img/5.png',
        title: 'item 5',
        price: 25,
    },
    {
        id: 5,
        Image: 'img/6.png',
        title: 'item 6',
        price: 25,
    },
    {
        id: 6,
        Image: 'img/7.png',
        title: 'item 7',
        price: 25,
    },
    {
        id: 7,
        Image: 'img/8.png',
        title: 'item 8',
        price: 25,
    },
];
const categories = [...new Set(product.map((item)=>{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var{Image, title, price} = item;
    return(
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src= ${Image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var {Image, title,price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowing' src=${Image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
            );
        }).join('');
    }
}