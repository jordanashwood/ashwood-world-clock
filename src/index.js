// Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:m:ss[<small>]A[</small]"
);

// Sao Paulo
let saoPauloElement = document.querySelector("#sao-paulo");
let saoPauloDateElement = saoPauloElement.querySelector(".date");
let saoPauloTimeElement = saoPauloElement.querySelector(".time");
let saoPauloTime = moment().tz("America/Sao_Paulo");

saoPauloDateElement.innerHTML = saoPauloTime.format("dddd, MMMM Do, YYYY");
saoPauloTimeElement.innerHTML = saoPauloTime.format(
  "h:m:ss[<small>]A[</small]"
);

// London
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do, YYYY");
londonTimeElement.innerHTML = londonTime.format("h:m:ss[<small>]A[</small]");

// Sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do, YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:m:ss[<small>]A[</small]");
