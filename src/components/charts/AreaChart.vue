<template>
  <v-sheet class="fill-height d-flex flex-column">
    <div class="d-flex flex-grow-1">
      <canvas id="chart-area" ref="chartCanvas" />
    </div>
  </v-sheet>
</template>
  
  <script>
import { defineComponent, ref, onMounted, watch, computed } from 'vue'
import {
  Chart as ChartJS,
  LineController, // เพิ่ม LineController
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js'

// ลงทะเบียน LineController และส่วนที่จำเป็นอื่นๆ
ChartJS.register(
  LineController,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
)

export default defineComponent({
  name: 'AreaChart',
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [], // Provide an empty array as default
    },
  },
  setup(props) {
    const chartCanvas = ref(null)
    let chartInstance = null

    const initializeChart = () => {
      if (chartInstance) {
        chartInstance.destroy() // ทำลายกราฟเก่าก่อนสร้างใหม่
      }

      const ctx = chartCanvas.value.getContext('2d')

      const data = {
        labels: props.data.map((item) => item.usage_name),
        datasets: [
          {
            label: 'Data',
            backgroundColor: 'rgba(173, 216, 230, 0.5)', // สีฟ้าอ่อน (พร้อมความโปร่งใส)
            borderColor: '#00008B', // สีน้ำเงินเข้ม
            borderWidth: 1,
            data: props.data.map((item) => item.usage_count),
            fill: true, // เติมพื้นที่ใต้กราฟ
            tension: 0.4, // เส้นโค้ง
          },
        ],
      }

      const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 16,
                family: 'Kanit',
              },
            },
            border: {
              color: '#000000',
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 16,
                family: 'Kanit',
              },
            },
            border: {
              color: '#000000',
            },
          },
        },
        plugins: {
          datalabels: {
            display: false, // ปิด data labels ที่จุดต่างๆ บนกราฟ
          },
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: ${context.raw} `
              },
            },
          },
        },
      }

      // สร้างกราฟใหม่
      chartInstance = new ChartJS(ctx, {
        type: 'line',
        data,
        options,
      })
    }

    const updateChart = () => {
      if (chartInstance) {
        // อัปเดตข้อมูลในกราฟ
        chartInstance.data.labels = props.data.map((item) => item.usage_name)
        chartInstance.data.datasets[0].data = props.data.map(
          (item) => item.usage_count
        )
        chartInstance.update() // อัปเดตกราฟ
      }
    }

    onMounted(() => {
      initializeChart()
    })

    // อัปเดตข้อมูลในกราฟเมื่อ props.data เปลี่ยนแปลง
    watch(
      () => props.data,
      () => {
        updateChart()
      },
      { deep: true }
    )

    const chartHeight = computed(() => {
      const baseHeight = 50
      const labelCount = 5
      const heightPerLabel = 30

      return `${baseHeight + labelCount * heightPerLabel}px`
    })

    return {
      chartCanvas,
      chartHeight,
    }
  },
})
</script>
  