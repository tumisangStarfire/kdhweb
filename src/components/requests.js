
//export const apiURL = 'http://localhost:4000/v1/api';

export const apiURL = 'http://ec2-34-221-60-164.us-west-2.compute.amazonaws.com/v1/api'

export const post = async(url = String, data= {}) =>{

      const response  = await fetch(url,{
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         mode: 'cors', // no-cors, *cors, same-origin
         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
         credentials: 'same-origin', // include, *same-origin, omit
         headers: {
            'Content-Type': 'application/json'
         },
         redirect: 'follow', // manual, *follow, error
         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         body: JSON.stringify(data) // body data type must match "Content-Type" header
      });

      return response.json();
}

export const  get = async (url : String) => {
   const response  = await fetch(url);
    return response.json();
}


