import "./style.css";

import { getWeather } from "./getdata";
import { current } from "./interfaces/current";
import { Location } from "./interfaces/location";

let location = "";
const weather: HTMLSpanElement = document.getElementById("weather")!;
const temp: HTMLSpanElement = document.getElementById("temp")!;
const feelslike: HTMLSpanElement = document.getElementById("fl")!;
const search = document.getElementById("search")! as HTMLInputElement;
const find = document.getElementById("find")! as HTMLButtonElement;
const card = document.getElementById("card")! as HTMLDivElement;
const card2 = document.getElementById("card2")! as HTMLDivElement;
const wimg = document.getElementById("wimg")! as HTMLImageElement;
const time = document.getElementById("time")! as HTMLSpanElement;
const body = document.body! as HTMLBodyElement;
const header = document.getElementById("header") as HTMLElement;
const humidity = document.getElementById('humi')! as HTMLSpanElement;
const wind_speed = document.getElementById('wind')! as HTMLSpanElement;
const pressure = document.getElementById('press')! as HTMLSpanElement;
const visibility = document.getElementById('vis')! as HTMLSpanElement;


//onchange fucntion for search field
search.addEventListener("change", function setsearch(ev) {
  location = (ev.target as HTMLInputElement).value;
});

//onclick function for find button
find.addEventListener("click", async () => {
  if (location.length > 0) {
    //apicall
    let res = await getWeather(location);

    const current_weather: current = res.current;
    const Location: Location = res.location;

    weather.innerText = current_weather.weather_descriptions;
    time.innerText = Location.localtime;
    temp.innerHTML = `${current_weather.temperature.toString()}°C`;
    feelslike.innerHTML = `, Feels Like ${current_weather.feelslike}°C`;
    wimg.src = current_weather.weather_icons;
    header.innerText = `${Location.name}, ${Location.region}, ${Location.country}`;
    humidity.innerText = current_weather.humidity.toString();
    wind_speed.innerText = current_weather.wind_speed.toString()
    pressure.innerText = current_weather.pressure.toString()
    visibility.innerText = current_weather.visibility.toString()

    if (current_weather.is_day === "no") {
      body.style.backgroundColor = "#4b1baa";
      card.style.backgroundColor = "#461fb1";
      card2.style.backgroundColor = "#461fb1";
      search.style.backgroundColor = "#461fb1";
      find.style.backgroundColor = "#461fb1";
    } else {
      body.style.backgroundColor = "#e6b565";
      card.style.backgroundColor = "#d7813a";
      card2.style.backgroundColor = "#d7813a";
      search.style.backgroundColor = "#d7813a";
      find.style.backgroundColor = "#d7813a";
    }
    card.style.visibility = "visible";
    card2.style.visibility = "visible";
    
  }
});
