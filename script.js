// I saw that jquery is attached. But  I confused   about should I use jQuery ajax or not. If its' a must. I can change to  jQuery ajax

import Api from "./Api.js";

function renderCards(count) {
  let arr = []
  let mainDiv = document.querySelector('.factsMain')
  for (let i = 1; i <= count; i++) {
    
    const factItemDiv = document.createElement('div');
    factItemDiv.classList.add('factItem');
    
    const factDescriptionDiv = document.createElement('div');
    factDescriptionDiv.classList.add('factDesription');
    factDescriptionDiv.setAttribute('id',i);
    
    const img = document.createElement('img');
    img.src = "./images/loading.svg"
    
    factItemDiv.append(img,factDescriptionDiv);
    
    
    mainDiv.append(factItemDiv)
    Api.getFacts().then(response => {
      factDescriptionDiv.textContent = response.fact
      img.style.display = "none"
    })
    
  }

  // Promise.allSettled(arr).then(results=>{
  //   let mainDiv = document.querySelector(".factList")
  //   results.forEach( (result ,index )=> {      
  //   })
  // })
  
  
}

renderCards(4)