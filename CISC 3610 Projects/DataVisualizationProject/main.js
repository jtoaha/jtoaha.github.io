/**
 * Jamila Toaha
 * 05/06/20
 * Data Visualization Project
 * As required by assignment, data for charts are loaded from an external file via an ajax request.
 */
function start(data){
  var ctx = document.getElementById('bar-chart').getContext('2d');

  var [years, millionGallonsPerDay] = sortData(data);

  // Bar chart
    var barChart = new Chart(document.getElementById('bar-chart'), {
    type: 'horizontalBar',
    data: {
      labels: [...years],
      datasets: [
        {
          label: 'NYC Consumption (Million gallons per day)',
          backgroundColor: '#3e95cd',
          data: [...millionGallonsPerDay]
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: 'A History of Water Consumption In New York City'
      }
    }
});

}

// document.addEventListener('DOMContentLoaded', start);


//As required by assignment, data for charts are loaded from an external file via an ajax request.
$.ajax({
    url: "https://data.cityofnewyork.us/resource/ia2d-e54m.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "Ai3RBUGUNk1e3ntZxES7UA9bd"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
    start(data);
});

function sortData(data){
    var years = [];
    var millionGallonsPerDay = [];
    for(let datum of data){
        years.push(datum.year);
        millionGallonsPerDay.push(datum.nyc_consumption_million_gallons_per_day)
    }
    return [years, millionGallonsPerDay]
}
