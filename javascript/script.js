function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateInfo(e) {
  let timeZone = e.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let time = moment().tz(timeZone);
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cities = document.querySelector("#cities");
  cities.innerHTML = `
    <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${time.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${time.format("h:mm:ss")} <small>${time.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", updateInfo);
