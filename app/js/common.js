var scroll_hd=document.querySelector('.scroll-head');
var logo=document.querySelector('.top-box');
var wheel=document.querySelectorAll('.wheel-box');
// var wheel1=document.querySelector('.wheel-box1');
// var wheel2=document.querySelector('.wheel-box2');
// var wheel3=document.querySelector('.wheel-box3');
var how=document.querySelector('.title-box');
var but=document.querySelector('#button');
var but1=document.querySelector('#button_down');
var how=document.querySelector('.how-work');
var howmache=document.querySelector('.how-mach');
var how=document.querySelector('.how-work');
var how=document.querySelector('.how-work');
var style=getComputedStyle(but);
console.log(style.paddingTop);


document.body.onscroll=function (event) {
    // var bounti = scroll_hd.getBoundingClientRect();
    // var bounti1 = document.body.getBoundingClientRect();
    // var howwork = how.getBoundingClientRect();
    // var howm = howmache.getBoundingClientRect();
    Array.from(wheel).forEach(function (w) {
        if(w.getBoundingClientRect().top < window.innerHeight){
            w.classList.add('while-move');
        }else{
            w.classList.remove('while-move');
        }
    })


    // console.log(bounti1);
    // var style='position:fixed;color:blue'
    // console.log(bounti1)
    // if(-bounti1.top>bounti.height){
    //     scroll_hd.classList.add('fixed');
    //     logo.classList.add('logo-scroll');
    //     // wheel.classList.add('while-move');
    //     but.style='opacity:1';
    // }
    // if(-bounti1.top<bounti.height) {
    //     scroll_hd.classList.remove('fixed');
    //     logo.classList.remove('logo-scroll');
    //     // wheel.classList.remove('while-move');
    //     but.style='opacity:0';
    // }
    // if(-bounti1.top>howwork.height) {
    //     wheel1.classList.add('while-move');
    // }
    // if(-bounti1.top<howwork.height) {
    //     wheel1.classList.remove('while-move');
    // }
    // if(-bounti1.top>howm.height) {
    //     wheel2.classList.add('while-move');
    // }
    // if(-bounti1.top<howwork.height) {
    //     wheel2.classList.remove('while-move');
    // }
};
button.onclick=function (event){
    var smoothJumpUp = function() {
    if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 30);
    }
}
    smoothJumpUp();
}
// button_down.onclick=function (event){
//     var smoothJumpUp = function() {
//         if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
//             window.scrollBy(0,50);
//             setTimeout(smoothJumpUp, 30);
//         }
//     }
//     smoothJumpUp();
// }
// //
// var smoothJumpUp = function() {
//     if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
//         window.scrollBy(0,-50);
//         setTimeout(smoothJumpUp, 20);
//     }
// }
$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3
});

// var year=document.querySelector("#year");
// var sp_year=document.querySelector(".sp-year");
// var sp_year_er=document.querySelector(".sp-year-er");
// var make=document.querySelector("#make");
// var sp_make=document.querySelector(".sp-make");
// var sp_make_er=document.querySelector(".sp-make-er");
// var phoneReg = /^[0-9\-\+]{9,15}$/;
// var tel=document.querySelector("#tel");
// var sp_tel=document.querySelector(".sp-tel");
// var sp_tel_er=document.querySelector(".sp-tel-er");
// var model=document.querySelector("#model");
// var sp_model=document.querySelector(".sp-model");
// var sp_model_er=document.querySelector(".sp-model-er");
// var email=document.querySelector("#email");
// var sp_email=document.querySelector(".sp-email");
// var sp_email_er=document.querySelector(".sp-email-er");
// year.onchange=function(){
//     if(year.value.length>4||year.value.length<4){
//         sp_year_er.style.display='block';
//         year.style.background='red';
//     }
//     else {
//         sp_year_er.style.display='none';
//         sp_year.style.display='block';
//         year.style.background='green';
//     }
// }
// make.onchange=function(){
//     if(make.value<2){
//         sp_make_er.style.display='block';
//         make.style.background='red';
//         // alert ("enter correct make!");
//         // return;
//     }
//     else {
//         sp_make_er.style.display='none';
//         sp_make.style.display='block';
//         make.style.background='green';
//     }
// }
// model.onchange=function(){
//     if(model.value<2){
//         sp_model_er.style.display='block';
//         model.style.background='red';
//         // alert ("enter correct make!");
//         // return;
//     }
//     else {
//         sp_model_er.style.display='none';
//         sp_model.style.display='block';
//         model.style.background='green';
//     }
// }
// tel.onchange=function(){
//     if(tel.value.length>12||tel.value.length<12){
//         sp_tel_er.style.display='block';
//         tel.style.background='red';
//
//     }
//     else {
//         sp_tel_er.style.display='none';
//         sp_tel.style.display='block';
//         tel.style.background='green';
//     }
// }
// email.onchange=function(){
//     if(email.value.indexOf("@") == -1||email.value.indexOf(".") == -1){
//         sp_email_er.style.display='block';
//         email.style.background='red';
//
//     }
//     else {
//         sp_email_er.style.display='none';
//         sp_email.style.display='block';
//         email.style.background='green';
//     }
// }
//
// function provGuest() {
//     var obj_form=document.forms.my;
//     var obj_pole_year =obj_form.year;
//     var obj_pole_make =obj_form.make;
//     var obj_pole_model =obj_form.model;
//     var obj_pole_tel =obj_form.tel;
//     var obj_pole_email =obj_form.email;
//
//
//     if (obj_pole_year.value==''){ //если в поле нет текста, то выводим сообщение об этом пользователю
//         obj_pole_year.style.borderColor='black';
//         alert ("write year!");
//         return;
//     }
//     if (obj_pole_make.value==""){ //если в поле нет текста, то выводим сообщение об этом пользователю
//         alert ("write make!");
//         return;
//     }
//     if (obj_pole_model.value==""){ //если в поле нет текста, то выводим сообщение об этом пользователю
//         alert ("write model!");
//         return;
//     }
//     if (obj_pole_tel.value==""){ //если в поле нет текста, то выводим сообщение об этом пользователю
//         alert ("write model!");
//         return;
//     }
//     txt = obj_pole_email.value;
//     if (txt==""){ //если в поле нет текста, то выводим сообщение об этом пользователю
//         alert ("write E-mail!");
//         return;
//     }
//     if (txt.indexOf("@") == -1) { //проверяем существование символа @
//         alert("enter correct E-mail");
//         return;
//     }
//     if (txt.indexOf(".") == -1) { //проверяем существование символа .
//         alert("enter correct E-mail");
//         return;
//     }
//     // if (textMessage.length<10){
//     //     alert ("Длина сообщения должна быть не менее 10 символов");
//     //     return;
//     // }
// //все обязательные данные введены, поэтому отправляем форму
// //     obj_form.submit();
//
//         obj_form.submit();
//         parent.location='http://site.ru/';
//         alert("Form sent!");
//
//
//     // window.location = "http://javascript.ru";
//     // window.location.replace("https://stackoverflow.com/");
//     // var popup = document.getElementById("myPopup");
//     // popup.classList.toggle("show");
//     // function myFunction() {
//     //     var popup = document.getElementById("myPopup");
//     //     popup.classList.toggle("show");
//     // }
//     // obj_form.myFunction();
// }
// // function myFunction() {
// //     var popup = document.getElementById("myPopup");
// //     popup.classList.toggle("show");
// }
var on = document.querySelector('.button-red');
var popup = document.querySelector('.popup');
var close = document.querySelector('.fa-window-close');
var btn = document.querySelector('.btn');
var successW = document.querySelector('.success-window');
on.onclick = function () {
    console.log(popup);
    popup.classList.add('popup-on')
};
close.onclick = function () {
    popup.classList.remove('popup-on')
};
btn.onclick=function () {
    popup.querySelector('form').style.display='none';
    successW.style.display= 'block';
    setTimeout(function () {
        popup.classList.remove('popup-on')
        popup.querySelector('form').style.display='flex';
        successW.style.display= 'none';
    },3000)
}

var forms = document.forms;


Array.from(forms).forEach(function (form) {

form.oninput = function (e) {
    e.preventDefault();
  var password = this.querySelector("input[name='password']")?this.querySelector("input[name='password']"):false;
  var name = this.querySelector("input[name='name']")?this.querySelector("input[name='name']"):false;
  var email = this.querySelector("input[name='email']")?this.querySelector("input[name='email']"):false;
  var text = this.querySelector("input[name='text']")?this.querySelector("input[name='text']"):false;
  var button = this.querySelector("button")?this.querySelector("button"):false;
  var count = this.querySelectorAll('input').length;

    var success = 0;
    if(password && password.value.length > 5){
        password.style.borderColor = 'green';
        success++;

    }else {
        if(password){
            password.style.borderColor = 'red';
        }

    }
    if(name && name.value.length > 5){
        name.style.borderColor = 'green';
        success++;

    }else {
        if(name) {
            name.style.borderColor = 'red';
        }

    }
    if(email && email.value.length > 5){
        email.style.borderColor = 'green';
       success++;
    }else {
        if(email) {
            email.style.borderColor = 'red';
        }
    }
        if(success == count){
        console.log('ok')
        button.disabled = false;

    }
    // if(text.value.length > 5){
    //     textt.style.borderColor = 'green'
    //
    // }else {
    //     text.style.borderColor = 'red'
    // }
}

})