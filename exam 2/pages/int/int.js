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






let data = []

async function getData () {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let finalResponse = await response.json()
    data = finalResponse.meals
    displayMeals()
}
getData ()



 function displayMeals() {
    let cartona = `` ;
    for(let i = 0 ; i < 19 ; i++) {
        cartona += `
        <div class=" col-3" >
        <div class=" ${data[i].strIngredient} card  text-center ">
        <div>
            <i class="${data[i].strIngredient}  fa-solid fa-drumstick-bite"></i>
            <span class="${data[i].strIngredient}" >${data[i].strIngredient}</span>
            <p class="${data[i].strIngredient}" >${data[i].strDescription}</p>
        </div>
    </div>
        </div>
        `
    }

document.getElementById('data').innerHTML =  cartona

let cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(e) {
        let hh = e.target
        let gg = hh.classList[0]
        displaymeals(gg)
    });
}
 }


 let meals = [] ; 

 async function displaymeals (gg) {
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${gg}`)
     let finalResponse =  await response.json()
     meals = finalResponse.meals
     displayMealInfo()
 }


 function displayMealInfo() {
    let cartona = `` ; 
    for (let i = 0 ; i < meals.length ; i++)
        cartona+= `

    <div class= "  col-3" >
    <div class=" ${meals[i].idMeal} card  ">
    <img class="${meals[i].idMeal}" src="${meals[i].strMealThumb}" alt="meal">
    <div class="${meals[i].idMeal} details  d-flex   align-items-center  ">
        <span class="${meals[i].idMeal}">${meals[i].strMeal}</span>
    </div>
    </div>
    </div> 

    
        `

        document.getElementById('data').innerHTML = cartona

        let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function(e) {
            let hh = e.target
            let gg = hh.classList[0]
            displayinfo(gg)

        });

    }

        
 }


 ///////////////////////////////////////////////



 let mealInfo = [] ; 

 async function displayinfo (gg) {
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${gg}`)
     let finalResponse =  await response.json()
     mealInfo = finalResponse.meals
     mealinfo()
 }
 

 
 function mealinfo () {
    console.log(mealInfo);
     let cartona = `
     <section id="home" >
     <div class="container">
         <div class="product d-flex pt-5 ">
             <div class="row  d-flex ">
                 <div class="col-4" >
                     <div class="img">
                         <img   class="w-100" src="${mealInfo[0].strMealThumb}" alt="meal">
                         <h2>${mealInfo[0].strMeal}</h2>
                     </div>
                 </div>
                 <div class="col-8">
                     <div class="info">
                         <h2>Instructions</h2>
                         <p> ${mealInfo[0].strInstructions
                         }</p>
                         <h3><span>Area : </span> ${mealInfo[0].strArea} </h3>
                         <h3><span>Category  : </span> ${mealInfo[0].strCategory}  </h3>
                         <h3><span>Recipes : </h3>
                             <ul>
                                 <li>1kg Beef</li>
                                 <li>${mealInfo[0].strMeasure1}</li>
                                 <li>${mealInfo[0].strMeasure2}</li>
                                 <li>${mealInfo[0].strMeasure3}</li>
                                 <li>${mealInfo[0].strMeasure4}</li>
                             </ul>
                             <h3><span>Tags : </h3>
         
                                 <ul class="tags" >
                                     <li>${mealInfo[0].strIngredient1}</li>
                                     <li>${mealInfo[0].strIngredient2}</li>
                                 </ul>
         
                                 <div class="btns">
                                     <a  target="_blank" href = "${mealInfo[0].strSource}"  > <button class="btn btn-warning"  >Source</button>  </a>
                                     <a  target="_blank"  href= "${mealInfo[0].strYoutube}" >  <button   class="btn btn-danger" >youTube</button>   </a>
                                 </div>
                     </div>
                 </div>
 
             </div>
         </div>
 
     </div> 
  </section>
     ` ; 
 
 
     document.getElementById(`home`).innerHTML = cartona
 }