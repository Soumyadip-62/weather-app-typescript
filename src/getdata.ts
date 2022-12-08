export async function getWeather(location:string)  {
  try {
     const response = await fetch(`${import.meta.env.VITE_Base_url}access_key=${import.meta.env.VITE_Api_key}&query=${location}`,{
      headers:{
        'Access-Control-Allow-Origin': '*'
      }
     })
    // console.log(response.json());
    if (response.status === 200) {
        
          return  await response.json()
    }
  } catch (error) {
    return error
  }  
   
   
    // console.log(resp);
     
  

}