/**
 * Jamila Toaha
 * 05/06/20
 * Data Visualization Project
 * As required by assignment, data for charts are loaded from an external source via an ajax request.
 * Loads both a horizontal bar chart, as well as a donut chart.
 */

/***============================BAR CHART========================== */
//'A History of Water Consumption In New York City' bar chart
function startBarChart(data) {
  var ctx = document.getElementById('bar-chart').getContext('2d')

  var [years, millionGallonsPerDay] = sortBarChartData(data)

  // Bar chart
  var barChart = new Chart(document.getElementById('bar-chart'), {
    type: 'horizontalBar',
    data: {
      labels: [...years],
      datasets: [
        {
          label: 'NYC Consumption (Million gallons per day)',
          backgroundColor: '#019bfa',
          data: [...millionGallonsPerDay],
        },
      ],
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: 'A History of Water Consumption In New York City',
        fontSize: 40,
      },
      layout: {
        padding: {
          left: 50,
          right: 50,
          top: 0,
          bottom: 0,
        },
      },
    },
  })

  $('#bar-chart-section').append(
    '<p>Source: <a href="https://data.cityofnewyork.us/Environment/Water-Consumption-In-The-New-York-City/ia2d-e54m/data"> https://data.cityofnewyork.us/Environment/Water-Consumption-In-The-New-York-City/ia2d-e54m/data</a></p>'
  )
}


//As required by assignment, data for charts are loaded from an external file via an ajax request.
$.ajax({
  url: 'https://data.cityofnewyork.us/resource/ia2d-e54m.json',
  type: 'GET',
  data: {
    $limit: 5000,
    $$app_token: 'Ai3RBUGUNk1e3ntZxES7UA9bd',
  },
}).done(function (data) {
  //   alert('Retrieved ' + data.length + ' records from the dataset!')
  console.log(data)
  startBarChart(data)
})

//Sifts through data, extracting out the years and gallons consumed per day
function sortBarChartData(data) {
  var years = []
  var millionGallonsPerDay = []
  for (let datum of data) {
    years.push(datum.year)
    millionGallonsPerDay.push(datum.nyc_consumption_million_gallons_per_day)
  }
  return [years, millionGallonsPerDay]
}

/***============================DONUT CHART========================== */
//'Number of City-owned sites that are available and potentially suitable for urban agriculture in each borough of NYC' Donut Chart
function startDonutChart(data) {
  //Borough #: : 1, : 2, : 3, : 4, : 5
  var boroughStats = sortDonutChartData(data)
  console.log(boroughStats)

  var donutChart = new Chart(document.getElementById('donut-chart'), {
    type: 'doughnut',
    data: {
      labels: ['Manhattan', 'Bronx', 'Brooklyn', 'Queens', 'Staten Island'],
      datasets: [
        {
          label: 'Number of sites available in each borough',
          backgroundColor: [
            '#3e95cd',
            '#8e5ea2',
            '#3cba9f',
            '#e8c3b9',
            '#c45850',
          ],
          data: [
            boroughStats.Manhattan,
            boroughStats.Bronx,
            boroughStats.Brooklyn,
            boroughStats.Queens,
            boroughStats['Staten Island'],
          ],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text:
          'Number of City-owned sites that are available and potentially suitable for urban agriculture in each borough of NYC',
        fontSize: 30,
      },
      layout: {
        padding: {
          left: 50,
          right: 50,
          top: 0,
          bottom: 0,
        },
      },
    },
  })

  $('#donut-chart-section').append(
    '<p>Source: <a href="https://data.cityofnewyork.us/Environment/Water-Consumption-In-The-New-York-City/ia2d-e54m/data">https://data.cityofnewyork.us/Environment/City-owned-sites-that-are-available-and-potentiall/qchy-end3</a></p>'
  )
}

//As required by assignment, data for charts are loaded from an external file via an ajax request.
$.ajax({
  url: 'https://data.cityofnewyork.us/resource/qchy-end3.json',
  type: 'GET',
  data: {
    $limit: 5000,
    $$app_token: 'Ai3RBUGUNk1e3ntZxES7UA9bd',
  },
}).done(function (data) {
  //   alert("Retrieved " + data.length + " records from the dataset!");
  startDonutChart(data)
  console.log(data)
})

//sortDonutChartData goes through the data to find the number of available and potentially suitable for urban agriculture in each borough of New York City. In this case, it manually creates a field by sorting through data to categorize by borough.
function sortDonutChartData(data) {
  //Borough #: Manhattan: 1, Bronx: 2, Brooklyn: 3, Queens: 4, Staten Island: 5
  var boroughs = {
    Brooklyn: 0,
    Bronx: 0,
    Queens: 0,
    Manhattan: 0,
    'Staten Island': 0,
  }

  //This for loop will add up the number of available lots in each Borough based on extracted data
  for (let datum of data) {
    switch (datum.borough) {
      case '1':
        boroughs.Manhattan++
        break
      case '2':
        boroughs.Bronx++
        break
      case '3':
        boroughs.Brooklyn++
        break
      case '4':
        boroughs.Queens++
        break
      case '5':
        boroughs['Staten Island']++
        break
      default:
        break
    }
  }
  return boroughs
}
