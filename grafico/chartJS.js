var canvas = document.getElementById('canvasChart');
var ctx = canvas.getContext('2d');
var button = document.getElementById("setButton");
var canvasChart = null;

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

button.addEventListener("click", () => {
    var selector = document.getElementById("dataSelector").value;
    switch (selector) {
        case "eventRitcherArray":
            makeChart(eventRitcherArray, 'Ritcher');
            break;
        case "eventMagnitudoArray":
            makeChart(eventMagnitudoArray, 'Magnitudo');
            break;
        case "eventMercalliArray":
            makeChart(eventMercalliArray, 'Mercalli');
            break;
        case "eventDeathArray":
            makeChart(eventDeathArray, 'Vittime');
            break;
    }
});

function makeChart(modLabel, type) {

    if (Object.prototype.toString.call(canvasChart) === '[object Object]') {
        canvasChart.destroy();
    }

    //* Create chart
    canvasChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: eventDateArray,
            datasets: [{
                label: '# of ' + type,
                data: modLabel,
                backgroundColor: 'rgba(250, 107, 107, 0.2)',
                borderColor: 'rgba(247, 29, 29, 0.4)',
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
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            }
        }
    });

}