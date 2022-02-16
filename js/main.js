

//plugins
AOS.init();


//=======================================
//function div hover

//container that have all elements ... hov that are all elements 
function Hover(container,hov){

    container.forEach((cont)=>{


        cont.addEventListener("mouseenter",()=>{

            hov.forEach((h)=>{

                h.style.visibility='visible';

                
            })
        })
  

    })
}
//======================

//nav sticky;


window.addEventListener('scroll',()=>{

  let nav=document.querySelector("nav");
  nav.classList.toggle("fixed",window.scrollY>600);
  
  

})

//==========================================


//links active;

let Ul=document.querySelector('nav .links ul');
let links=document.querySelectorAll('nav .links ul a');

let pages=document.querySelector("nav .page ");
let Feature=document.querySelector("nav .feature ");
let links2=document.querySelectorAll('nav .links2');

//function to invisible links2
let removeLinks2=()=>{

  links2.forEach((link)=>{

    link.classList.remove('visible')
  
  })

}

//to active show
Ul.addEventListener('click',(e)=>{

    let check = e.target;

    if(check && check.dataset.link!="pages" &&  check.dataset.link!="Feature"){

      links.forEach((link)=>{

        link.classList.remove('active');
        removeLinks2();
        check.classList.add('active');
        

      })

    }

})


//visible pages and feature

links.forEach((link)=>{

  link.addEventListener("mouseover",(e)=>{

   
    removeLinks2();

    if(link.dataset.link == 'pages'){


      pages.classList.add("visible");

    }
   
    else if(link.dataset.link == 'Feature'){

      Feature.classList.add("visible");

    }

    //to invisible if leave on links2
    links2.forEach((l)=>{

      l.addEventListener('mouseleave',()=>{

        removeLinks2();
      })


    })

    
   

  })

 

})

//====================================================




//department of header hover;
let department= document.querySelectorAll(".departments .depart");

let hover= document.querySelectorAll(".departments .depart .hover");
Hover(department,hover);






//=======================================


//mens kids women sections

//sliders

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
     loop: true,
    loopFillGroupWithBlank: false,
  
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


    //   auto play

      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },


    //responsive

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },

        1020: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }

  });

  //========================

//end slider



//product 

let products = document.querySelectorAll(".product .swiper .swiper-wrapper .p")

let productHover= document.querySelectorAll(".product .swiper .swiper-wrapper .p .product-hover")

Hover(products,productHover);



//========
//social media


let socialImgs= document.querySelectorAll(".Social-Media .social-images .image")
let Imgs= document.querySelectorAll(".Social-Media .social-images .social-hover")

Hover(socialImgs,Imgs);