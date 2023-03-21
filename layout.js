    const Adidas=[{productName:'ABC',productPrice:560,productImage:'images/leatherwallet.jpg',productBrand:'Adidas'},{productName:'ABC',productPrice:60,productImage:'images/leatherwallet.jpg',productBrand:'Adidas'},
    {productName:'AFG',productPrice:678,productImage:'images/leatherwallet.jpg',productBrand:'Adidas'},{productName:'FGH',productPrice:890,productImage:'images/leatherwallet.jpg',productBrand:'Adidas'},
    {productName:'QWE',productPrice:345,productImage:'images/blacksandal.jpg',productBrand:'Nike'},{productName:'YUI',productPrice:990,productImage:'images/blacksandal.jpg',productBrand:'Nike'},
    {productName:'YUI',productPrice:789,productImage:'images/blacksandal.jpg',productBrand:'Nike'},{productName:'OPZ',productPrice:120,productImage:'images/blacksandal.jpg',productBrand:'Nike'},
]
// const Nike=[{productName:'ABC',productPrice:560,productImage:'images/blacksandal.jpg'},{productName:'ABC',productPrice:60,productImage:'images/blacksandal.jpg'},
// {productName:'AFG',productPrice:678,productImage:'images/blacksandal.jpg'},{productName:'FGH',productPrice:890,productImage:'images/blacksandal.jpg'},
// {productName:'QWE',productPrice:345,productImage:'images/blacksandal.jpg'},{productName:'YUI',productPrice:990,productImage:'images/blacksandal.jpg'},
// {productName:'YUI',productPrice:789,productImage:'images/blacksandal.jpg'},{productName:'OPZ',productPrice:120,productImage:'images/blacksandal.jpg'},
// ]

var orderItem=document.getElementById('sorter');
let currSort;
function displayProduct(product)
{
    let content=document.getElementById('productclass')
    content.innerHTML="";
    for(let i=0;i<product.length;i++)
    {

        // var product_img=product[i].productImage;
        var product_name=product[i].productName;  
        var product_price=product[i].productPrice;
        var product_image=product[i].productImage;
        var product_brand=product[i].productBrand;

        var product_card=document.createElement('li');
        product_card.id="product_card";

        var img=document.createElement('img');
        img.src=product_image;
        var pName=document.createElement('div');
        var name=document.createTextNode(product_name)

        var pPrice=document.createElement('div');
        var price=document.createTextNode(product_price)

        var pBrand=document.createElement('div');
        var brand=document.createTextNode(product_brand)
        pName.appendChild(name);
        pPrice.appendChild(price);
        pBrand.appendChild(brand);

        console.log(pName," ",pPrice);
        product_card.appendChild(img)
        product_card.appendChild(pName);
        product_card.appendChild(pPrice);
        product_card.appendChild(pBrand);

        console.log(product_card);

        var product_div=document.getElementById('productclass')
        product_div.appendChild(product_card)
    }
}

orderItem.addEventListener('change',function(e)
{
    currSort=e.target.value;
    productSorting(currSort)
})

function productSorting(currSort)
{
    if(currSort=='name_a-z')
    {
        
    }
}
function dropdownID(id)
{
    let product;
    if(id==1)
    {
        Adidas.sort(function (a,b)
        {

            // if(a.productName<b.productName)
            //     return -1;
            // if(a.productName>b.productName)
            //     return 1;
        })
        // product=Adidas.sort(productName)
        // // for(let i=0;i<Adidas.length;i++)
        // // {
        // //     product=Adidas.productName.sort();
        // // }
        // console.log(product);
    }
    return displayProduct(product)
}

window.onload(displayProduct(Adidas));











// function productCardCreation(){
//             for (let index = 0; index < person.length; index++) {
//                 let ProductName = person[index].Productname;
//                 let ProductPrice = person[index].Productprice;
//                 let Productqty = person[index].Productqty;

//                 let card = document.createElement('div');

//                 let namelable= document.createElement('div');
//                 let name = document.createTextNode(ProductName);

//                 let pricelable= document.createElement('div');
//                 let price = document.createTextNode(ProductPrice);

//                 let qtylable= document.createElement('div');
//                 let qty = document.createTextNode(Productqty);
                
//                 namelable.appendChild(name);
//                 pricelable.appendChild(price);
//                 qtylable.appendChild(qty);

//                 card.appendChild(namelable);
//                 card.appendChild(pricelable);
//                 card.appendChild(qtylable);
//                 console.log(card);
                
//                 let element = document.getElementById("pp");

//                 element.appendChild(card);
//             }
// }

// productCardCreation();
