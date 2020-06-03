//* Declare some array
var eventDateArray = [];
var eventLocationArray = [];
var eventRitcherArray = [];
var eventMagnitudoArray = [];
var eventMercalliArray = [];
var eventDeathArray = [];

//* Fill array with JSON data
for (var i = 0; i < dataArray.length; i++) {
    eventDateArray.push(dataArray[i].dataEvento);
    eventLocationArray.push(dataArray[i].luogo);
    eventRitcherArray.push(dataArray[i].ritcher);
    eventMagnitudoArray.push(dataArray[i].magnitudo);
    eventMercalliArray.push(dataArray[i].mercalli);
    eventDeathArray.push(dataArray[i].vittime);
}

//* Create chart
var ctx = document.getElementById('canvasChart').getContext('2d');

var canvasChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: eventDateArray,
        datasets: [{
            label: '# of Mercalli',
            data: eventMercalliArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});