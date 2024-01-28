$('.nav-list-b').on('click'  , function(){

    $('.box').animate({width: 'toggle'}  ,   1000  )
}   )


$('.nav-list-b').on('click'  , function(){
  $('.ul-container').animate({height: 'toggle'}  ,   500   )
}   )


$("#first").on('click'  , function(){
    first.classList.add(`d-none`)
    socend.classList.remove(`d-none`)

    
}   )

$("#socend").on('click'  , function(){
    first.classList.remove(`d-none`)
    socend.classList.add(`d-none`)
    
}   )


let search = document.querySelector(".search")
let Categories = document.querySelector(".Categories")
let Area = document.querySelector(".Area")
let Ingredients = document.querySelector(".Ingredients")
let ContactUs = document.querySelector(".ContactUs")






$(search).on('click', function() {
    window.location.href = '../search/search.html' ;
}  )


$(Categories).on('click', function() {
    window.location.href = '../cat/cat.html' ;
}  )
$(Area).on('click', function() {
    window.location.href = '../area/area.html' ;
}  )
$(Ingredients).on('click', function() {
    window.location.href = '../int/int.html' ;
}  )
$(ContactUs).on('click', function() {
    window.location.href = '../contacts/contact.html' ;
}  )








let uservalid =  {}

  function userv () {
    const userName = document.getElementById('userName').value;
    const validUserName = /^[a-zA-Z0-9_]{3,}$/; // تحقق من صحة اسم المستخدم
    document.getElementById('validUser').classList.toggle('hidden',  validUserName.test(userName));
    uservalid = validUserName.test(userName)
  }


  $(userName).on('input' , function() {
    userv()
    if(uservalid & emailvalid & phonelvalid & agevalid & pasvalid & revalid ){
        document.getElementById('submitButton').classList.remove('hidden');
      }
      else{
        document.getElementById('submitButton').classList.add('hidden');
      }
  } )
/////////////////////////////////////////////////////////////////////////////////////////////

  let emailvalid =  {}

  function emailv () {
    const email = document.getElementById('email').value;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // تحقق من صحة البريد الإلكتروني
    document.getElementById('validEmail').classList.toggle('hidden', validEmail.test(email));
    emailvalid = validEmail.test(email)
  }

  $(email).on('input' , function() {
    emailv ()
    if(uservalid & emailvalid & phonelvalid & agevalid & pasvalid & revalid){
        document.getElementById('submitButton').classList.remove('hidden');
      }
      else{
        document.getElementById('submitButton').classList.add('hidden');
      }
  } )



  let phonelvalid =  {}

  function phonev () {
    const phone = document.getElementById('phone').value;
    const validPhone = /^\d{10}$/; // تحقق من صحة رقم الهاتف
    document.getElementById('validPhone').classList.toggle('hidden', validPhone.test(phone));
    phonelvalid =  validPhone.test(phone)
  }


  $(phone).on('input' , function() {
    phonev()
    if(uservalid & emailvalid & phonelvalid & agevalid & pasvalid & revalid){
        document.getElementById('submitButton').classList.remove('hidden');
      }
      else{
        document.getElementById('submitButton').classList.add('hidden');
      }
  } )


/////////////////////////////////////////////////////////////////////////////////////////////////




let agevalid =  {}

function agev () {
    const age = document.getElementById('age').value;
    const validAge = /^(1[8-9]|[2-9][0-9])$/; // تحقق من صحة العمر
    document.getElementById('validAge').classList.toggle('hidden', validAge.test(age));
  agevalid =  validAge.test(age)
}


$(age).on('input' , function() {
  agev()
  if(uservalid & emailvalid & phonelvalid & agevalid & pasvalid){
      document.getElementById('submitButton').classList.remove('hidden');
    }
    else{
      document.getElementById('submitButton').classList.add('hidden');
    }
} )

/////////////////////////////////////////////////////////////////////////////////////////////////////////4



let pasvalid =  {}
let cc = 5;

function pasv () {
    const password = document.getElementById('password').value;
     cc = password ;
     const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // تحقق من صحة كلمة المرور
     document.getElementById('validPass').classList.toggle('hidden', validPassword.test(password));
    pasvalid =  validPassword.test(password)
}


$(password).on('input' , function() {
    pasv()
  if(uservalid & emailvalid & phonelvalid & agevalid & pasvalid & revalid){
      document.getElementById('submitButton').classList.remove('hidden');
    }
    else{
      document.getElementById('submitButton').classList.add('hidden');
    }
} )

////////////////////////////////////////////////////////////////////////////////////



let revalid =  {}

function repas () {
    const rePassword = document.getElementById('rePassword').value;
     const validRePassword = (cc === rePassword); // تحقق من تطابق كلمتي المرور
     document.getElementById('validRE').classList.toggle('hidden', validRePassword);

     revalid = validRePassword

     console.log(revalid);
}


$(rePassword).on('input' , function() {
    repas()
  if(uservalid & emailvalid & phonelvalid & agevalid & pasvalid & revalid ){
      document.getElementById('submitButton').classList.remove('hidden');
    }
    else{
      document.getElementById('submitButton').classList.add('hidden');
    }
} )

