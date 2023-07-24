// I saw that jquery is attached. But  I confused   about should I use jQuery ajax or not. If its' a must. I can change to  jQuery ajax

import Api from "./Api.js";

async function main() {
  let arr = []
  for (let i = 1; i <= 4; i++) {
    arr.push(Api.getFacts() )
  }

  Promise.allSettled(arr).then(results=>{
    let mainDiv = document.querySelector(".factList")
    results.forEach( (result ,index )=> {
      const {fact , lenght} = result.value
      console.log(result);
      const factItemDiv = document.createElement('div');
      factItemDiv.classList.add('factItem');
    
      const factDescriptionDiv = document.createElement('div');
      factDescriptionDiv.classList.add('factDesription');
      factDescriptionDiv.setAttribute('id',index );
      
      factDescriptionDiv.innerText = fact;
      factItemDiv.appendChild(factDescriptionDiv);

      mainDiv.append(factItemDiv)
      
    })


  })
}


main()