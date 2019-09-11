$(function() {
'use strict';
    var data = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
    datasets: [{
        label: '# of Votes',
        data: [10, 19, 3, 5, 2, 3],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        fill: false
    }]
    };
    var multiLineData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: [
            '#587ce4'
        ],
        borderWidth: 2,
        fill: false
        },
        {
        label: 'Dataset 2',
        data: [5, 23, 7, 12, 42, 23],
        borderColor: [
            '#ede190'
        ],
        borderWidth: 2,
        fill: false
        },
        {
        label: 'Dataset 3',
        data: [15, 10, 21, 32, 12, 33],
        borderColor: [
            '#f44252'
        ],
        borderWidth: 2,
        fill: false
        }
    ]
    };
    var options = {
    scales: {
        yAxes: [{
        ticks: {
            beginAtZero: true
        }
        }]
    },
    legend: {
        display: false
    },
    elements: {
        point: {
        radius: 0
        }
    }

    };

    var grdata = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'Monthly Sales',
            data: [4500, 1500, 3500, 3000,  1000, 500, 3000, 2000, 2500, 1000, 500, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1,
            fill: false
        }]
    };

    var groptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
        elements: {
            point: {
                radius: 0
            }
        }
    };

    var emailchartdata = {
    labels: ["9th July 18", "10th July 18", "11th July 18", "12th July 18", "13th July 18", "14th July 18", "15th July 18", "16th July 18", "17th July 18", "18th July 18"],
    datasets: [{
        label: 'Promotional Email',
        data: [5, 6, 3, 4, 2, 0],
        backgroundColor: [
            'rgba(155, 199, 132, 0.2)'
        ],
        borderColor: [
            'rgba(155,199,132,1)'
        ],
        borderWidth: 1,
        fill: false,
        lineTension: 0,
        radius: 5
    },
    {
        label: 'Marketing Email',
        data: [5, 7, 1, 3, 4, 2],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)'
        ],
        borderWidth: 1,
        fill: false,
        lineTension: 0,
        radius: 5
    },
    {
        label: 'Transactional Email',
        data: [5, 3, 4, 1],
        backgroundColor: [
            'rgba(55, 99, 232, 0.2)'
        ],
        borderColor: [
            'rgba(55,99,232,1)'
        ],
        borderWidth: 1,
        fill: false,
        lineTension: 0,
        radius: 5
    }]
    };

    var emailchartoptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
        elements: {
            point: {
                radius: 0
            }
        }

    };

    var doughnutGaugeData = {
    datasets : [{
        data: [50, 10, 10, 1, 20],
        backgroundColor: [
            "rgb(169, 85, 120)",
            "rgb(162, 140, 93)",
            "rgb(171, 185, 24)",
            "rgba(0, 0, 0, 0.6)",
            "rgb(61, 129, 189)"
        ],
        borderWidth: 0,
        hoverBackgroundColor: [
            "rgb(179, 95, 130)",
            "rgb(172, 150, 103)",
            "rgb(181, 195, 34)",
            "rgba(10, 10, 10, 0.6)",
            "rgb(71, 139, 199)"
        ],
        hoverBorderWidth: 0
        },
        {
        data: [50, 10, 10, 1, 20],
        backgroundColor: [
            "rgba(0, 0, 0, 0)",
            "rgba(0, 0, 0, 0)",
            "rgba(0, 0, 0, 0)",
            "rgba(0, 0, 0, 0.6)",
            "rgba(0, 0, 0, 0)"
        ],
        borderWidth: 0,
        hoverBackgroundColor: [
            "rgba(0, 0, 0, 0)",
            "rgba(0, 0, 0, 0)",
            "rgba(0, 0, 0, 0)",
            "rgba(10, 10, 10, 0.6)",
            "rgba(0, 0, 0, 0)"
        ],
        hoverBorderWidth: 0
        }]
    };
    var doughnutGaugeOptions = {
    responsive: true,
    cutoutPercentage: 0,
    legend: {
        display: false
    },
    tooltips: {
        enabled: false
    },
    title: {
        display: true,
        text: 45.52,
        position: "bottom"
    }
    };

    var doughnutPieData = {
    datasets: [{
        data: [30, 40, 30],
        backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
        ],
        borderWidth: 0,
        borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'In Progress',
        'Completed',
        'Total Respondents',
    ]
    };
    var doughnutPieOptions = {
    responsive: true,
    animation: {
        animateScale: true,
        animateRotate: true
    },
    legend: {
        position: 'bottom'
    }
    };

    var doughnutPBData = {
    datasets: [{
        data: [44.45, 45.55],
        backgroundColor: [
        'rgba(146, 208, 80, 1)',
        'rgba(255, 255, 255, 1)'
        ],
        borderColor: [
        'rgba(146, 208, 80, 0.8)',
        'rgba(255, 255, 255, 0.8)'
        ],
    }],

    labels: [
        'In Progress',
        'Others'
    ]
    };
    var doughnutPBOptions = {
    responsive: true,
    legend: {
            display: false,
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
    cutoutPercentage: 90
    };

    var doughnutPB2Data = {
    datasets: [{
        data: [45, 55],
        backgroundColor: [
        'rgba(255, 192, 0, 1)',
        'rgba(255, 255, 255, 1)'
        ],
        borderColor: [
        'rgba(255, 192, 0, 0.8)',
        'rgba(255, 255, 255,0.8)'
        ],
    }],

    labels: [
        'In Progress',
        'Others'
    ]
    };
    var doughnutPB2Options = {
    responsive: true,
    legend: {
            display: false,
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
    cutoutPercentage: 90
    };

    var doughnutPB3Data = {
    datasets: [{
        data: [45, 55],
        backgroundColor: [
        'rgba(255, 255, 0, 1)',
        'rgba(255, 255, 255, 1)'
        ],
        borderColor: [
        'rgba(255, 255, 0, 0.8)',
        'rgba(255, 255, 255, 0.8)'
        ],
    }],

    labels: [
        'In Progress',
        'Others'
    ]
    };
    var doughnutPB3Options = {
    responsive: true,
    legend: {
            display: false,
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
    cutoutPercentage: 90
    };

    var doughnutPB4Data = {
    datasets: [{
        data: [55, 45],
        backgroundColor: [
        'rgba(146, 208, 80, 1)',
        'rgba(255, 255, 255, 1)'
        ],
        borderColor: [
        'rgba(146, 208, 80, 0.8)',
        'rgba(255, 255, 255, 0.8)'
        ],
    }],

    labels: [
        'In Progress',
        'Others'
    ]
    };
    var doughnutPB4Options = {
    responsive: true,
    legend: {
            display: false,
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
    cutoutPercentage: 90
    };

    var doughnutPB5Data = {
    datasets: [{
        data: [30, 70],
        backgroundColor: [
        'rgba(46, 108, 80, 1)',
        'rgba(255, 255, 255, 1)'
        ],
        borderColor: [
        'rgba(46, 108, 80, 0.8)',
        'rgba(255, 255, 255, 0.8)'
        ],
    }],

    labels: [
        'In Progress',
        'Others'
    ]
    };
    var doughnutPB5Options = {
    responsive: true,
    legend: {
            display: false,
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
    cutoutPercentage: 90
    };

    var doughnutPB6Data = {
    datasets: [{
        data: [60, 40],
        backgroundColor: [
        'rgba(146, 8, 180, 1)',
        'rgba(255, 255, 255, 1)'
        ],
        borderColor: [
        'rgba(146, 8, 180, 0.8)',
        'rgba(255, 255, 255, 0.8)'
        ],
    }],

    labels: [
        'In Progress',
        'Others'
    ]
    };
    var doughnutPB6Options = {
    responsive: true,
    legend: {
            display: false,
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
    cutoutPercentage: 90
    };

    var doughnutPB7Data = {
    datasets: [{
        data: [24, 76],
        backgroundColor: [
        'rgba(36, 208, 40, 1)',
        'rgba(255, 255, 255, 1)'
        ],
        borderColor: [
        'rgba(36, 208, 40, 0.8)',
        'rgba(255, 255, 255, 0.8)'
        ],
    }],

    labels: [
        'In Progress',
        'Others'
    ]
    };
    var doughnutPB7Options = {
    responsive: true,
    legend: {
            display: false,
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
    cutoutPercentage: 90
    };

    var doughnutPB8Data = {
    datasets: [{
        data: [52, 48],
        backgroundColor: [
        'rgba(106, 108, 240, 1)',
        'rgba(255, 255, 255, 1)'
        ],
        borderColor: [
        'rgba(106, 108, 240, 0.8)',
        'rgba(255, 255, 255, 0.8)'
        ],
    }],

    labels: [
        'In Progress',
        'Others'
    ]
    };
    var doughnutPB8Options = {
    responsive: true,
    legend: {
            display: false,
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
    cutoutPercentage: 90
    };

    var PieData = {
    datasets: [{
        data: [20, 60, 20],
        backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
        ],
        borderWidth: 0,
        borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Business',
        'Leisure',      
        'Others'
    ]
    };
    var PieOptions = {
    responsive: true,
    legend: {
        position: 'bottom'
    },
    animation: {
        animateScale: true,
        animateRotate: true,
        onComplete: function () {
            var ctx = this.chart.ctx;
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset) {

            for (var i = 0; i < dataset.data.length; i++) {
                var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                    total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                    mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
                    start_angle = model.startAngle,
                    end_angle = model.endAngle,
                    mid_angle = start_angle + (end_angle - start_angle)/2;

                var x = mid_radius * Math.cos(mid_angle);
                var y = mid_radius * Math.sin(mid_angle);

                ctx.fillStyle = '#fff';
                if (i == 3){ // Darker text color for lighter background
                ctx.fillStyle = '#444';
                }
                var percent = String(Math.round(dataset.data[i]/total*100)) + "%";
                // Display percent in another line, line break doesn't work for fillText
                ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
            });
        }               
    }
    };

    var areaData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{
        label: 'Overall Rating',
        data: [5, 4, 3, 2, 1],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
        fill: true, // 3: no fill
    }]
    };

    var areaOptions = {
    plugins: {
        filler: {
        propagate: true
        }
    },
    legend: {
        labels: {
            fontColor: '#4386e4'
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                callback: function (value) { if (Number.isInteger(value)) { return value; } },
                stepSize: 1
            }
        }]
    }
    }

    var multiAreaData = {
    labels: ["25 Jun, 2018", "29 Jun, 2018", "3 Jul, 2018", "7 Jul, 2018", "11 Jul, 2018", "15 Jul, 2018", "19 Jul, 2018", "23 Jul, 2018"],
    datasets: [{
        label: 'Number of Resposes over the period of time',
        data: [0, 20, 25, 26, 30, 32, 34, 38, 40, 45, 50, 60],
        borderColor: ['rgba(255, 99, 132, 0.5)'],
        backgroundColor: ['rgba(255, 99, 132, 0.5)'],
        borderWidth: 1,
        fill: true
        }
    ]
    };

    var multiAreaOptions = {
    plugins: {
        filler: {
        propagate: true
        }
    },
    elements: {
        point: {
        radius: 0
        }
    },
    scales: {
        xAxes: [{
        gridLines: {
            display: false
        }
        }],
        yAxes: [{
        gridLines: {
            display: false
        }
        }]
    },
    legend: {
        labels: {
            fontColor: '#4386e4'
        },
        position: 'bottom'
    }
    }

    var scatterChartData = {
    datasets: [{
        label: 'First Dataset',
        data: [{
            x: -10,
            y: 0
            },
            {
            x: 0,
            y: 3
            },
            {
            x: -25,
            y: 5
            },
            {
            x: 40,
            y: 5
            }
        ],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)'
        ],
        borderWidth: 1
        },
        {
        label: 'Second Dataset',
        data: [{
            x: 10,
            y: 5
            },
            {
            x: 20,
            y: -30
            },
            {
            x: -25,
            y: 15
            },
            {
            x: -10,
            y: 5
            }
        ],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
        }
    ]
    }

    var scatterChartOptions = {
    scales: {
        xAxes: [{
        type: 'linear',
        position: 'bottom'
        }]
    }
    }

    var popCanvas = document.getElementById("bubbleChart");
    var popData = {
    datasets: [{
    label: ['Direct'],
    data: [{
        x: 1,
        y: 500,
        r: 15
    }],
    backgroundColor: "#fe7c96"
    },
    {
    label: ['Other'],
    data: [{
        x: 2,
        y: 1000,
        r: 10
    }],
    backgroundColor: "#7cfe96"
    },
    {
    label: ['Walkin'],
    data: [{
        x: 3,
        y: 1500,
        r: 20
    }],
    backgroundColor: "#ffee89"
    },  
    {
    label: ['OTAs'],
    data: [{
        x: 4,
        y: 2000,
        r: 5
    }],
    backgroundColor: "#89eeff"
    }]
    };

    var popOptions = {
        legend: {
        position: 'bottom',
        display: true,
        labels: {
            boxWidth: 80,
            fontColor: '#4386e4'
        }
        }
    };

    // Get context with jQuery - using jQuery's .get() method.
    if ($("#barChart").length) {
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: data,
        options: options
    });
    }

    if ($("#lineChart").length) {
    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: data,
        options: options
    });
    }

    if ($("#emailchart").length) {
        var emailchartCanvas = $("#emailchart").get(0).getContext("2d");
        var emailchart = new Chart(emailchartCanvas, {
            type: 'line',
            data: emailchartdata,
            options: emailchartoptions
        });
    }

    if ($("#lineChartgr").length) {
        var lineChartCanvasgr = $("#lineChartgr").get(0).getContext("2d");
        var lineChartgr = new Chart(lineChartCanvasgr, {
            type: 'line',
            data: grdata,
            options: groptions
        });
    }

    if ($("#bubbleChart").length) {
    var bubbleChart = new Chart(popCanvas, {
        type: 'bubble',
        data: popData,
        options: popOptions
    });
    }

    if ($("#linechart-multi").length) {
    var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
    var lineChart = new Chart(multiLineCanvas, {
        type: 'line',
        data: multiLineData,
        options: options
    });
    }

    if ($("#areachart-multi").length) {
    var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
        type: 'line',
        data: multiAreaData,
        options: multiAreaOptions
    });
    }

    if ($("#doughnutChart").length) {
    var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
        type: 'doughnut',
        data: doughnutPieData,
        options: doughnutPieOptions
    });
    }

    if ($("#doughnutGauge").length) {
    var doughnutChartGauge = $("#doughnutGauge").get(0).getContext("2d");
    var doughnutGauge = new Chart(doughnutChartGauge, {
        type: 'doughnut',
        data: doughnutGaugeData,
        options: doughnutGaugeOptions
    });
    }

    if ($("#doughnutPB").length) {
    var doughnutChartPB = $("#doughnutPB").get(0).getContext("2d");
    var doughnutPB = new Chart(doughnutChartPB, {
        type: 'doughnut',
        data: doughnutPBData,
        options: doughnutPBOptions
    });
    }

    if ($("#doughnutPB2").length) {
    var doughnutChartPB = $("#doughnutPB2").get(0).getContext("2d");
    var doughnutPB = new Chart(doughnutChartPB, {
        type: 'doughnut',
        data: doughnutPB2Data,
        options: doughnutPB2Options
    });
    }

    if ($("#doughnutPB3").length) {
    var doughnutChartPB = $("#doughnutPB3").get(0).getContext("2d");
    var doughnutPB = new Chart(doughnutChartPB, {
        type: 'doughnut',
        data: doughnutPB3Data,
        options: doughnutPB3Options
    });
    }

    if ($("#doughnutPB4").length) {
    var doughnutChartPB = $("#doughnutPB4").get(0).getContext("2d");
    var doughnutPB = new Chart(doughnutChartPB, {
        type: 'doughnut',
        data: doughnutPB4Data,
        options: doughnutPB4Options
    });
    }

    if ($("#doughnutPB5").length) {
    var doughnutChartPB = $("#doughnutPB5").get(0).getContext("2d");
    var doughnutPB = new Chart(doughnutChartPB, {
        type: 'doughnut',
        data: doughnutPB5Data,
        options: doughnutPB5Options
    });
    }

    if ($("#doughnutPB6").length) {
    var doughnutChartPB = $("#doughnutPB6").get(0).getContext("2d");
    var doughnutPB = new Chart(doughnutChartPB, {
        type: 'doughnut',
        data: doughnutPB6Data,
        options: doughnutPB6Options
    });
    }

    if ($("#doughnutPB7").length) {
    var doughnutChartPB = $("#doughnutPB7").get(0).getContext("2d");
    var doughnutPB = new Chart(doughnutChartPB, {
        type: 'doughnut',
        data: doughnutPB7Data,
        options: doughnutPB7Options
    });
    }

    if ($("#doughnutPB8").length) {
    var doughnutChartPB = $("#doughnutPB8").get(0).getContext("2d");
    var doughnutPB = new Chart(doughnutChartPB, {
        type: 'doughnut',
        data: doughnutPB8Data,
        options: doughnutPB8Options
    });
    }

    if ($("#pieChart").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: PieData,
        options: PieOptions
    });
    }

    if ($("#areaChart").length) {
    var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
    });
    }

    });

    (function($) {
    'use strict';
    $(function() {
    Chart.defaults.global.legend.labels.usePointStyle = true;
   
    if ($("#visit-sale-chart").length) {
        Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = document.getElementById('visit-sale-chart').getContext("2d");

        var gradientStrokeViolet = ctx.createLinearGradient(0, 0, 0, 181);
        gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
        gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
        var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';
      
        var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
        gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
        gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
        var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

        var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 300);
        gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
        var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
            datasets: [
                {
                label: "CHN",
                borderColor: gradientStrokeViolet,
                backgroundColor: gradientStrokeViolet,
                hoverBackgroundColor: gradientStrokeViolet,
                legendColor: gradientLegendViolet,
                pointRadius: 0,
                fill: false,
                borderWidth: 1,
                fill: 'origin',
                data: [20, 40, 15, 35, 25, 50, 30, 20]
                },
                {
                label: "USA",
                borderColor: gradientStrokeRed,
                backgroundColor: gradientStrokeRed,
                hoverBackgroundColor: gradientStrokeRed,
                legendColor: gradientLegendRed,
                pointRadius: 0,
                fill: false,
                borderWidth: 1,
                fill: 'origin',
                data: [40, 30, 20, 10, 50, 15, 35, 40]
                },
                {
                label: "UK",
                borderColor: gradientStrokeBlue,
                backgroundColor: gradientStrokeBlue,
                hoverBackgroundColor: gradientStrokeBlue,
                legendColor: gradientLegendBlue,
                pointRadius: 0,
                fill: false,
                borderWidth: 1,
                fill: 'origin',
                data: [70, 10, 30, 40, 25, 50, 15, 30]
                }
            ]
        },
        options: {
            responsive: true,
            legend: false,
            legendCallback: function(chart) {
            var text = []; 
            text.push('<ul>'); 
            for (var i = 0; i < chart.data.datasets.length; i++) { 
                text.push('<li><span class="legend-dots" style="background:' + 
                            chart.data.datasets[i].legendColor + 
                            '"></span>'); 
                if (chart.data.datasets[i].label) { 
                    text.push(chart.data.datasets[i].label); 
                } 
                text.push('</li>'); 
            } 
            text.push('</ul>'); 
            return text.join('');
            },
            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                        min: 0,
                        stepSize: 20,
                        max: 80
                    },
                    gridLines: {
                    drawBorder: false,
                    color: 'rgba(235,237,242,1)',
                    zeroLineColor: 'rgba(235,237,242,1)'
                    }
                }],
                xAxes: [{
                    gridLines: {
                    display:false,
                    drawBorder: false,
                    color: 'rgba(0,0,0,1)',
                    zeroLineColor: 'rgba(235,237,242,1)'
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9c9fa6",
                        autoSkip: true,
                    },
                    categoryPercentage: 0.5,
                    barPercentage: 0.5
                }]
            }
            },
            elements: {
            point: {
                radius: 0
            }
            }
        })
        $("#visit-sale-chart-legend").html(myChart.generateLegend());
    }
    if ($("#inline-datepicker").length) {
        $('#inline-datepicker').datepicker({
        enableOnReadonly: true,
        todayHighlight: true,
        });
    }
    });

//  var gaugeChart = o => {
//  var chart = d3.select(o.el);
//  var width = chart.attr("width");
//  var center = width / 2;
//  var outerBezelWidth = width * 0.009;
//  var outerBezelRadius = center - outerBezelWidth;
//  var innerBezelWidth = width * 0.072;
//  var innerBezelRadius = outerBezelRadius - innerBezelWidth / 2;
//  var tickHeight = outerBezelWidth + innerBezelWidth + width * 0.027;
//  var tickWidth = width * 0.009;
//  var tickHiderRadius = width * 0.345;
//  var labelY = center / 1.3;
//  var valueLabelY = width * 0.75;
//  var labelFontSize = width * 0.13;
//  var needleWidth = width * 0.054;
//  var needleCapRadius = width * 0.059;
//  var tickSpacing = 13.5;
//  var lastTickAngle = 135;
//  let angle = -135;

//  var needleScale = d3
//    .scaleLinear()
//    .domain([o.min || 0, o.max || 100])
//    .range([angle, lastTickAngle]);

//  var needleAngle = needleScale(o.value);

//  var outerBezel = chart
//    .append("circle")
//    .attr("class", "gaugeChart-bezel-outer")
//    .attr("cx", center)
//    .attr("cy", center)
//    .attr("stroke-width", outerBezelWidth)
//    .attr("r", outerBezelRadius);

//  var face = chart
//    .append("circle")
//    .attr("class", "gaugeChart-face")
//    .attr("cx", center)
//    .attr("cy", center)
//    .attr("r", outerBezelRadius - 1);

//  var innerBezel = chart
//    .append("circle")
//    .attr("class", "gaugeChart-bezel-inner")
//    .attr("cx", center)
//    .attr("cy", center)
//    .attr("stroke-width", innerBezelWidth)
//    .attr("r", innerBezelRadius);

//  while (angle <= lastTickAngle) {
//    chart
//      .append("line")
//      .attr("class", "gaugeChart-tick")
//      .attr("x1", center)
//      .attr("y1", center)
//      .attr("x2", center)
//      .attr("y2", tickHeight)
//      .attr("stroke-width", tickWidth)
//      .attr("transform", `rotate(${angle} ${center} ${center})`);

//    angle += tickSpacing;
//  }

//  var tickHider = chart
//    .append("circle")
//    .attr("class", "gaugeChart-tickHider")
//    .attr("cx", center)
//    .attr("cy", center)
//    .attr("r", tickHiderRadius);

//  var label = chart
//    .append("text")
//    .attr("class", "gaugeChart-label")
//    .attr("x", center)
//    .attr("y", labelY)
//    .attr("text-anchor", "middle")
//    .attr("alignment-baseline", "middle")
//    .attr("font-size", labelFontSize)
//    .text(o.label);

//  var valueLabel = chart
//    .append("text")
//    .attr("class", "gaugeChart-label-value")
//    .attr("x", center)
//    .attr("y", valueLabelY)
//    .attr("text-anchor", "middle")
//    .attr("alignment-baseline", "middle")
//    .attr("font-size", labelFontSize)
//    .text(o.value);

//  var needle = chart
//    .append("path")
//    .attr("class", "gaugeChart-needle")
//    .attr("stroke-width", outerBezelWidth)
//    .attr(
//      "d",
//      `M ${center - needleWidth / 2} ${center}
//                L ${center} ${tickHeight}
//                L ${center + needleWidth / 2} ${center} Z`
//    )
//    .attr("transform", `rotate(${needleAngle} ${center} ${center})`);

//  var needleCap = chart
//    .append("circle")
//    .attr("class", "gaugeChart-needle-cap")
//    .attr("cx", center)
//    .attr("cy", center)
//    .attr("stroke-width", outerBezelWidth)
//    .attr("r", needleCapRadius);
//  };

//  gaugeChart({
//    el: "#memChart",
//    label: "CPS",
//    value: 45.52
//  });

})(jQuery);