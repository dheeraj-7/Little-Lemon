(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{18:function(e,a,t){"use strict";var n=t(0),c=t.n(n);t(19);a.a=(e=>{let{data:a}=e;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"imgBx",style:{background:"url(".concat(a.image,") no-repeat center / cover")}}),c.a.createElement("div",{className:"content"},c.a.createElement("span",{className:"price"},c.a.createElement("span",null,"".concat(a.price))),c.a.createElement("div",{className:"pd white"},c.a.createElement("h5",null,a.name),c.a.createElement("p",null,a.description?a.description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.")))))})},19:function(e,a,t){},22:function(e,a,t){e.exports=t.p+"static/media/bruschetta.d2c5a561.jpg"},23:function(e,a,t){e.exports=t.p+"static/media/greekSalad.779d26c7.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/dessert.5ce5f690.jpg"},25:function(e,a,t){},26:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t(0),r=t.n(c);var s=()=>r.a.createElement("section",{id:"hero",className:"container mb-3"},r.a.createElement("div",{className:"info white pd pdr-65p"},r.a.createElement("h1",{className:"lemon-primary-lemon"},"Little Lemon"),r.a.createElement("h2",null,"Chicago"),r.a.createElement("p",null,"We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."),r.a.createElement(n.b,{className:"txt-dec-none",to:"reserve"},r.a.createElement("button",{className:"reserve-btn"},"Reserve")))),i=t(18);var l=e=>{let{data:a}=e;return r.a.createElement("section",{id:"special",className:"container mb-3"},r.a.createElement("h2",null,"This Week Specials!"),r.a.createElement("div",{className:"special-body"},a.map((e,a)=>r.a.createElement(i.a,{key:a,data:e}))))},m=t(22),o=t.n(m),d=t(23),p=t.n(d),u=t(24),E=t.n(u);t(25),t(26);var g=e=>{let{data:a}=e;return r.a.createElement("div",{className:"col-25 col-50 col light"},r.a.createElement("div",{className:"center mt-3"},r.a.createElement("img",{className:"test-img",src:a.picture.large,alt:""})),r.a.createElement("h5",{className:"center my-2"},a.name.first),r.a.createElement("p",{className:"pd"},'"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tenetur"'))};var h=()=>{const[e,a]=Object(c.useState)([]);return Object(c.useEffect)(()=>{(async()=>{try{const t=await fetch("https://randomuser.me/api/?results=4"),n=await t.json();a(n.results)}catch(e){console.log("ERROR: ",e)}})()},[]),r.a.createElement("section",{className:"testimonial container py-3 my-3"},r.a.createElement("h2",null,"Testimonials from our guests!"),r.a.createElement("div",{className:"row justify-content-center align-items-center pd"},e.map((e,a)=>r.a.createElement(g,{key:a,data:e}))))};const v=[{name:"Greek Salad",price:"$8.99",image:p.a,description:"Lettuce, peppers, olives and feta cheese, garnished with garlic and croutons."},{name:"Bruschetta",price:"$6.99",image:o.a,description:"Grilled bread smeared with garlic and seasoned with salt and olive oil."},{name:"Lemon Special",price:"$4.99",image:E.a,description:"This comes straight from grandma's recipe book."}];a.default=(()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(l,{data:v}),r.a.createElement(h,null)))}}]);
//# sourceMappingURL=4.e35136c5.chunk.js.map