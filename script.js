const ctx = document.getElementById('myChart');

let myChart;
let jsonData;

fetch('data.json')
.then(function(response){
   if(response.ok == true){
    return response.json();
   } 
})
.then(function(data){
    jsonData = data;
   createChart(data, 'bar');
});

function setCharType(charType){
     myChart.destroy();
     createChart(jsonData, chartType);
}
function createChart(data, type){
 myChart = new Chart(ctx, {
  type: type,
  data: {
    labels: data.map(row => row.medicine),
    datasets: [{
      label: '# of Votes',
      data: data.map(row => row.consum),
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    maintainAspectRatio:false
  }
});
}
