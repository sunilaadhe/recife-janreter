
let input = document.querySelector("input");
let one = document.querySelector("#one");

let recife = async () => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);
    let data = await response.json();

    if (data?.meals) {
  
        one.innerHTML = '<div class="prnt"></div>';
        let prnt = one.querySelector(".prnt");

        data.meals.forEach(meal => {
            prnt.innerHTML += `
                <div class='card'>
                    <h6><p>${meal.strCategory}</p>${meal.strArea}</h6><br/>
                    <p>Category : ${meal.strCategory}</p>
                    <img class='Foodimg' src=${meal.strMealThumb} alt="${meal.strMeal}">
                </div>`;
        });
    } else {
        one.innerHTML = '<p>No results found</p>';
    }
};

input.addEventListener("input", (e) => {
    recife();
});
