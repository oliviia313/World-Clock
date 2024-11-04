let cities = document.querySelector("#cities");
function showTime(e) {
  if (e.target.value.length > 0) {
    let dateTime = moment()
      .tz(e.target.value)
      .format("dddd, MMMM D, YYYY hh:mm A");
    alert(`It is currently ${dateTime} in ${e.target.value}`);
  }
}
cities.addEventListener("change", showTime);
