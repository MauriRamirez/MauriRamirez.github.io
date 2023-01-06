// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

function loadDate() {
  var currentDate = new Date(); 
  var dateString = currentDate.toString()
                     .split(" ") 
                     .splice(0, 4) // making the string contain only the first four words
                     .join(" "); 

  $("#date").text(dateString);
}
function loadWeather() {
  var weather = $("#weather");
  var url = "https://api.forecast.io/forecast/"; // Dark Sky API url
  var apiKey = "725a305fdefd659b7115b8d59e42d9ee"; // API key from Dark Sky

  function success(position) {
    var latitude = position.coords.latitude; // latitude using geolocation
    var longitude = position.coords.longitude; // longitude using geolocation
    
    // API request:
    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      
      weather.text(Math.round((data.currently.temperature - 32)*5/9) + "°C");
      weather.img(data.currently.icon)
    });
  }
  // This message is displayed if their is a geolocation error:
  function error() {
    alert("Unable to retrieve your location for weather");
  }
  // calling the geolocation API
  navigator.geolocation.getCurrentPosition(success, error);

  // the text that will be displayed while the function is making the request
  weather.text("fetching weather...");
}
function loadIcon() {
  var icon = $("#icon");
  var url = "https://api.forecast.io/forecast/"; // Dark Sky API url
  var apiKey = "576473f50d3849819af8ea496d4cb154"; // API key from Dark Sky

  function success(position) {
    var latitude = position.coords.latitude; // latitude using geolocation
    var longitude = position.coords.longitude; // longitude using geolocation
    
    // API request:
    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      
      icon.img(data.currently.icon);
    });
  }

  // This message is displayed if their is a geolocation error:
  function error() {
    alert("Unable to retrieve your location for weather icon");
  }

  // calling the geolocation API
  navigator.geolocation.getCurrentPosition(success, error);

  // the text that will be displayed while the function is making the request
}
function loadSummary() {
  var summary = $("#summary");
  var url = "https://api.forecast.io/forecast/"; // Dark Sky API url
  var apiKey = "725a305fdefd659b7115b8d59e42d9ee"; // API key from Dark Sky

  function success(position) {
    var latitude = position.coords.latitude; // latitude using geolocation
    var longitude = position.coords.longitude; // longitude using geolocation
    
    // API request:
    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      
      summary.text(data.currently.summary);
    });
  }

  // This message is displayed if their is a geolocation error:
  function error() {
    alert("Unable to retrieve your location for weather");
  }

  // calling the geolocation API
  navigator.geolocation.getCurrentPosition(success, error);

  // the text that will be displayed while the function is making the request
  summary.text("fetching weather...");
}
function loadNews() {
  var news = $("#news");
  var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey="; // News API url
  var apiKey = "576473f50d3849819af8ea496d4cb154"; // API key from News API

  $.getJSON(url + apiKey, function(data) {

    // map() method to call article urls and titles
    var titles = data.articles.map(function(articles) {
      return "<a href='" + articles.url + "'>" + articles.title + "</a>";
    });
     // joining the titles with two line breaks
    news.html(titles.join("<br><br>"));
  });
  // the text that will be displayed while the function is making the request
  news.text("fetching news..."); 
}
loadDate();
loadWeather();
loadIcon();
loadSummary();
loadNews();
