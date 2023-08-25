let Today = document.getElementById("Today")
let currentMonth = document.getElementById("currentMonth")
let LocationInput = document.getElementById('LocationInput');
let SecondDay = document.getElementById("SecondDay")
let ThirdDay = document.getElementById("ThirdDay")
let countryName = document.querySelector(".countryName")
let todayWeather = document.querySelector(".todayWeather")
let todayIcon = document.querySelector(".todayIcon")
let status1 = document.querySelector(".status1")
let status2 = document.querySelector(".status2")
let status3 = document.querySelector(".status3")
let humidty = document.querySelector(".humidty")
let wind = document.querySelector(".wind")
let compass = document.querySelector(".compass")
let secondDayIcon = document.querySelector(".secondDayIcon");
let ThirdDayIcon = document.querySelector(".ThirdDayIcon")
let maxDegree2 = document.querySelector(".maxDegree2")
let maxDegree3 = document.querySelector(".maxDegree3")
let minDegree2 = document.querySelector(".minDegree2")
let minDegree3 = document.querySelector(".minDegree3")

let DataCotainer;
async function GetData(country){
   let Data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${country}&days=3
   `);
   DataCotainer = await Data.json();
   today();
   secondDay();
   thirdDay();


}
GetData("cairo")

let days=["Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",];

let month = ['Jan','Feb','March','April','May','June','July','Aug','Spet','Oct','Nov','Dec'];


LocationInput.addEventListener('input', async function(){
    if(LocationInput.value.length >3){
     GetData(LocationInput.value)

      
    }

})


let date = new Date();
function today(){
    Today.innerHTML = days[date.getDay()];
    currentMonth.innerHTML=date.getDate()+month[date.getMonth()]
    countryName.innerHTML = DataCotainer.location.name;
    todayWeather.innerHTML = `${DataCotainer.current.temp_c} C`;
    todayIcon.setAttribute('src' , `https:${DataCotainer.current.condition.icon}`);
    status1.innerHTML= DataCotainer.current.condition.text;
    wind.innerHTML= DataCotainer.current.wind_kph+'kmh';
    humidty.innerHTML = DataCotainer.current.humidity+'%';
    compass.innerHTML = DataCotainer.current.wind_dir;
}

function secondDay(){
    if(date.getDay()==6){
        SecondDay.innerHTML= days[0]; 
    }
    else[
        SecondDay.innerHTML= days[date.getDay()+1]
    ]    
     secondDayIcon.setAttribute("src" , `https:${DataCotainer.forecast.forecastday[0].day.condition.icon}`)
     maxDegree2.innerHTML= DataCotainer.forecast.forecastday[0].day.maxtemp_c;
     minDegree2.innerHTML= DataCotainer.forecast.forecastday[0].day.mintemp_c;
     status2.innerHTML =DataCotainer.forecast.forecastday[0].day.condition.text;
}


function thirdDay(){
    if(date.getDay()==6){
        ThirdDay.innerHTML= days[1];   
    }
    else if(date.getDay()==5){
        ThirdDay.innerHTML= days[1];   
    }
    else
    {
        ThirdDay.innerHTML= days[date.getDay()+2];   
    }
     
    ThirdDayIcon.setAttribute("src" , `https:${DataCotainer.forecast.forecastday[1].day.condition.icon}`)
    maxDegree3.innerHTML=DataCotainer.forecast.forecastday[1].day.maxtemp_c;
    minDegree3.innerHTML=DataCotainer.forecast.forecastday[1].day.mintemp_c;
    status3.innerHTML =DataCotainer.forecast.forecastday[1].day.condition.text;     
}