
let input = document.querySelector("input")

let one = document.querySelector("#one")






let recife = async() => {
      let respone =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);   
      let data = await respone.json();
      console.log(data);
      console.log(data.fish);
        
      one.innerHTML= data.fish;
      
}

input.addEventListener("input",(e)=>{
    recife()    
})