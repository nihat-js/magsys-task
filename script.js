// I saw that jquery is attached. But  I confused   about should I use jQuery ajax or not. If its' a must. I can change to  jQuery ajax 

class Api {
  static baseURL = "https://catfact.ninja/fact"

  static getFacts (){
    return new Promise((resolve,reject)=>{
      fetch(this.baseURL).then(response => {
        if (response.ok){
          return response.json()
        }else{
          reject(response.status)
        }
      }).then (response=> resolve(response) )
    })
  }  

  
  
  
}