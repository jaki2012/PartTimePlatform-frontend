import { Line } from 'vue-chartjs'
// import the component - chart you need

export default Line.extend({
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['2017.04.10', '2017.04.17', '2017.04.24', '2017.05.01'],
      datasets: [
        {
          label: '信用积分成长情况（最近4次兼职）',
          backgroundColor: [
            '#FF6666'
          ],
          data: [6, 8, 7, 9]  
        }
      ]
    }, {responsive: true, maintainAspectRatio: false, scaleFontSize :19,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            },
            gridLines: {
              display: true
            }
          }]
        }})
  }
})