import { Pie } from 'vue-chartjs'
// import the component - chart you need

export default Pie.extend({
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['总申请人数', '总待审核人数', '总录用人数', '总结算人数'],
      datasets: [
        {
          label: '本职位信息',
          backgroundColor: [
            '#99CCCC',
            '#99CCFF',
            '#CCFFCC',
            '#CCFFFF'
          ],
          data: [40, 20, 80, 10]  
        }
      ]
    }, {responsive: true, maintainAspectRatio: false, scaleFontSize :19})
  }
})