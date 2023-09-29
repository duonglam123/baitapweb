var man =[
    {
        id : 1,
        name : "The Cosmo Quần short kaki",
        price : "250000",
        image : "https://www.akmen.vn/images/2018/11/quan-short-linen-vang-kem-qs186-5729-p.jpg"
    },
    {
        id : 2,
        name : "Áo Polo nam",
        price : "390000",
        image : "https://bizweb.dktcdn.net/100/399/392/articles/ao-thun-nam-tre-trung-2-2.jpg?v=1623041414513"   
    },
    {
        id : 3,
        name : "Đồ bọ thể thao nam (Yody)",
        price : "350000",
        image : "https://bizweb.dktcdn.net/100/438/408/files/bo-do-the-thao-cho-nam-yody-vn-9.jpg?v=1672813349410"   
    },
    {
        id : 4,
        name : "Áo kháo nam",
        price : "200000",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapnFxI2acnUdKjgbA47v2T4uxSSHoxZSyDg&usqp=CAU"   
    }
];

var women =[
    {
        id : 1,
        name : "Quần jeans",
        price : "390000",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7x97zJCRF7VX3BgmdupHUW5upL0Y4gasqt6qPa2nn04LugeQxTxmjXD6OFv8zH-m7Q_8&usqp=CAU"
    },
    {
        id : 2,
        name : "Áo phong",
        price : "150000",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOs75S1J0cPrmdSXUnx73OUIuLk0GsnhSbQ&usqp=CAU"
    },
    {
        id : 3,
        name : "Áo sơ mi",
        price : "250000",
        image : "https://bizweb.dktcdn.net/thumb/1024x1024/100/433/798/products/aosomitayngandangrongkephongca-a37f4596-da95-4fc2-b47d-c44992490d86.jpg?v=1675763792830"
    },
        {
        id : 4,
        name : "Váy fashion",
        price : "199000",
        image : "https://imgcdn.thitruongsi.com/tts/rs:fill:600:0:1:1/g:sm/plain/file://product/2020/07/23/6c0f3eb0-cca5-11ea-88c0-ff6d4c3e604b.jpg"
    },
];
function listProducts(){
    for(let i=0;i<man.length;i++){
        var demo ='<div class="col-3">';
            demo +='<div class="card" style="width: 300px; height:600px">';
            demo += '<img src="'+man[i].image+'" class="card-img-top" alt="...">';
            demo += '<div class="card-body">';
            demo += '<h5 class="card-title">'+man[i].name+'</h5>';
            demo +='<p class="card-text">'+man[i].price+'</p>';
            demo+='<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
            demo+='</div>';
            demo+='</div>';
            demo+='</div>';
            console.log(demo);
            document.getElementById("man").innerHTML +=demo;
    }
     for(let i=0;i<women.length;i++){
        var demo ='<div class="col-3">';
            demo +='<div class="card" style="width: 300px; height:600px">';
            demo += '<img src="'+women[i].image+'" class="card-img-top " alt="...">';
            demo += '<div class="card-body">';
            demo += '<h5 class="card-title">'+women[i].name+'</h5>';
            demo +='<p class="card-text">'+women[i].price+'</p>';
            demo+='<a href="#" class="btn btn-primary bg-danger border-0" onclick="order()">Đặt mua</a>';
            demo+='</div>';
            demo+='</div>';
            demo+='</div>';
            console.log(demo);
            document.getElementById("women").innerHTML +=demo;
    }
    
}