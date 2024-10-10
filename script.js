
let input = document.querySelector("input")

let one = document.querySelector("#one")


let recife = async() => {
      let respone =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);   
      let data = await respone.json();
    //   console.log(data);
    //   console.log(data.meals[9].strArea);
      
        
      if(data?.meals){
        data?.meals.forEach(meal => {
            console.log(meal.strMealThumb)
            one.innerHTML +=`<div class="parant"><div class='card'>
            <h6> <p>hello</p>${meal.strArea}</h6><br/>
      <p>Category : ${meal.strCategory }</p>
            <img class='img' src=${meal.strMealThumb} 
            </div> <br/></div>`
        });
      }

    
}

input.addEventListener("input",(e)=>{
    recife()    
})