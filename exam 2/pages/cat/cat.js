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






let data = [];

async function getCat(aa) {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let finalResponse = await response.json();
    data = finalResponse.categories;
    console.log(data);
    display();
}

getCat();


function display() {
    let cartona = '';
    for (let i = 0; i < data.length; i++) {
        let name = data[i].strCategory
        cartona += `
                <div class= "col-3" >
                <div class="card text-center ">
                <img class="${name}" src="${data[i].strCategoryThumb}" alt="meal">
                <div class=" ${name} details">
                    <span class = "${name}" >${name}</span>
                    <p  class = "${name}" >${data[i].strCategoryDescription}</p>
                </div>
            </div>
                </div>
        `;
    }
    document.getElementById('data').innerHTML = cartona;

    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function(e) {
            let hh = e.target
            let gg = hh.classList[0]
            getmeals(gg)

        });

    }
}




let datam = [];

async function getmeals(gg ) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${gg}`);
    let finalResponse = await response.json();
    datam = finalResponse.meals;
    console.log(datam);
    displaym();
}

function displaym() {
    let cartona = '';
    for (let i = 0; i < datam.length; i++) {
        let id = datam[i].idMeal;
        cartona += `
        <div class= "col-3" >
        <div class=" ${id} card  ">
        <img class="${id}" src="${datam[i].strMealThumb}" alt="meal">
        <div class="${id} details layer  d-flex   align-items-center  ">
            <span class="${id}">${datam[i].strMeal}</span>
        </div>
    </div>
        </div>
        `;
    }
    document.getElementById('data').innerHTML = cartona;
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function(e) {
            let hh = e.target
            let gg = hh.classList[0]

            displayinfo(gg)
        });

    }
}




let mealInfo = [] ; 

async function displayinfo (gg) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${gg}`)
    let finalResponse =  await response.json()
    mealInfo = finalResponse.meals
    console.log(mealInfo);
    displayMealInfo()
}







function displayMealInfo () {
    console.log(mealInfo[0].strYoutube);
    let cartona = `

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

    ` ; 

    document.getElementById('home').innerHTML = cartona
    }