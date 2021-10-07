const userData = document.getElementById('userData');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const type = urlParams.get('type');
const user = urlParams.get('user');

window.onload = () => {
  if(type && user){
    userData.innerText = `${type}: ${user}`;
  }
}


(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo',
      ],
      datasets: [{
        data: [
          27141 - 199,
          27141 - 199 - 119,
          27141 - 199 - 119 - 939,
          27141 - 199 - 119 - 939 - 995 + 15000,
          27141 - 199 - 119 - 939 - 995 - 319,
          27141 - 199 - 119 - 939 - 995 - 319 - 1570,
          27141 - 199 - 119 - 939 - 995 - 319 - 1579 + 23000
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#198754',
        borderWidth: 4,
        pointBackgroundColor: '#198754'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
