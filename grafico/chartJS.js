var canvas = document.getElementById('canvasChart');
var ctx = canvas.getContext('2d');
var dataSelector = document.getElementById("dataSelector");
var canvasChart = null;
var activeChart = null;

dataSelector.addEventListener("click", () => {
    var selector = document.getElementById("dataSelector").value;
    switch (selector) {
        case activeChart:
            break;
        case "eventRitcherArray":
            activeChart = "eventRitcherArray";
            makeChart(eventRitcherArray, 'Ritcher');
            break;
        case "eventMagnitudoArray":
            activeChart = "eventMagnitudoArray";
            makeChart(eventMagnitudoArray, 'Magnitudo');
            break;
        case "eventMercalliArray":
            activeChart = "eventMercalliArray";
            makeChart(eventMercalliArray, 'Mercalli');
            break;
        case "eventDeathArray":
            activeChart = "eventDeathArray";
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