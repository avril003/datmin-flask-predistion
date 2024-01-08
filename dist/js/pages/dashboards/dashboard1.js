$(function () {
  "use strict";

  // Existing Chartist Bar Chart
  var chart2 = new Chartist.Bar(
    ".amp-pxl",
    {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      series: [
        [9, 5, 3, 7, 5, 10, 3],
        [6, 3, 9, 5, 4, 6, 4],
      ],
    },
    {
      axisX: {
        position: "end",
        showGrid: false,
      },
      axisY: {
        position: "start",
      },
      high: "12",
      low: "0",
      plugins: [Chartist.plugins.tooltip()],
    }
  )
  var chart3 = new Chartist.Pie(
    ".amp-pxl2",
    {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      series: [
        [9, 5, 3, 7, 5, 10, 3],
        [6, 3, 9, 5, 4, 6, 4],
      ],
    },
    {
      axisX: {
        position: "end",
        showGrid: false,
      },
      axisY: {
        position: "start",
      },
      high: "12",
      low: "0",
      plugins: [Chartist.plugins.tooltip()],
    }
  )
});