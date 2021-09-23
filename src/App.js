import React,{Fragment,useState,useEffect} from'react';
import axios from 'axios';
import './App.css'; 	
/*
params:{
      	q:'juazeiro',
        appid:'f209145519b12fc83072d1810beab341',
        lang:'pt',
        units:'metric'
      }
*/
function App() {
	
  const  [weatherF,setWeatherF] = useState(false);
  const  [weather,setWeather] = useState(false);
  const [location,setLocation]=useState(false);
  // useEffect(()=>{
  //   navigator.geolocation.getCurrentPosition((position)=>{	
  //     getWeather(position.coords.latitude, position.coords.longitude);
  //     setLocation(true);;
  //   })
  // },[]);
  useEffect(()=>{
  	if (location === false) {
  		let cityname = prompt('Qual a cidade ?');
  		setLocation(true);
  		getWeather(cityname);
  	}
  	
  },[]);
  
  async function getWeather(cityname) {
  	if(cityname != ''){
  		
  		let respan = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=f209145519b12fc83072d1810beab341`);
		    console.log(respan.data);
		  	setWeather(respan.data);
		  	setWeatherF(true);
		}
  	}
    
  // let getWeather = async (lat,long)=>{
  	
  // 	console.log(respan.data);
  // 	console.log('foi');
  // }
 if(weatherF === false){
    return(
      	<Fragment>
	      	<div id='body'>
	        	<h3>Caregando o Clima .../</h3>
				<hr/>		
			</div>      
     	 </Fragment>
    )
  }else{
    return (
    <Fragment>
      	<div id='body'>
      		<h3>Clima na seu local ({weather['weather'][0]['description']})</h3>
		      <hr />
		      <ul>
		        <li>Temperatura atual: {weather['main']['temp']}°</li>
		        <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
		        <li>Temperatura minima: {weather['main']['temp_min']}°</li>

		        <li>Pressão: {weather['main']['pressure']} hpa</li>
		        <li>Umidade: {weather['main']['humidity']}%</li>
		      </ul>
      	</div>
    </Fragment>
  );
  }
  
}

export default App;
