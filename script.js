const forecast =document.getElementById('forecast');

catchWeather();
async function catchWeather(){
 const response = await fetch('http://dataservice.accuweather.com/currentconditions/v1/204409?apikey=940MbBDIpwx2RAcAzooCDywK48UHSv4W')
 const data = await response.json();
 const {WeatherText,Temperature} = data[0];
 document.getElementById('weathCond').textContent =WeatherText;
 document.getElementById('temp').textContent =Temperature.Metric.Value;
 } 

 document.getElementById('wrapper').addEventListener("click",myFunction
 ) ;

 
 function myFunction(){
     if(forecast.style.display !== "none"){
         forecast.style.display="none";
        }else{
        forecast.style.display="block";
     }
 }
 
 catchForeCast();
async function catchForeCast(){
 const response = await fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/204409?apikey=940MbBDIpwx2RAcAzooCDywK48UHSv4W')
 const data = await response.json();
//  console.log(data.DailyForecasts);
 const D1 = document.getElementById('D1')
 const D2 = document.getElementById('D2')
 const D3 = document.getElementById('D3')
 const D4 = document.getElementById('D4')
 const D5 = document.getElementById('D5')
   let {Day,Temperature} = data.DailyForecasts[0] ;
     D1.textContent=Day.IconPhrase;
   ( {Day} = data.DailyForecasts[1]) ;
     D2.textContent=Day.IconPhrase;
    ({Day} = data.DailyForecasts[2]) ;
     D3.textContent=Day.IconPhrase;
    ({Day} = data.DailyForecasts[3]) ;
     D4.textContent=Day.IconPhrase;
   ( {Day} = data.DailyForecasts[4]) ;
     D5.textContent=Day.IconPhrase;
     
    
//  const {WeatherText,Temperature} = data[0];
//  document.getElementById('weathCond').textContent =WeatherText;
//  document.getElementById('temp').textContent =Temperature.Metric.Value;
 } 
 