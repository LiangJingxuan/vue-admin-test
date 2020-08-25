<template>
<div style="height; 100%" ref="echart">
  echart
</div>
</template>

<script>
import echart from 'echarts'

export default {
  name: 'Echart',
  props: {
    chartData: {
      type: Object,
      default () {
        return {
          xData: [],
          series: []
        }
      }
    },
    isAxisChart: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      echart: null,
      axisOption: {},
      normalOption: {},
    }
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    }
  },
  methods: {
    initChart() {
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData() {
      if (this.isAxisChart) {

      } else {

      }
    }
  },
}
</script>

<style>

</style>
