<template>
  <v-sheet
    class="fill-height d-flex flex-column"
    style="width: 100%; height: 100%"
  >
    <div class="d-flex flex-grow-1" style="width: 100%">
      <canvas id="chart-area" ref="chartCanvas" />
    </div>
  </v-sheet>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import {
  Chart as ChartJS,
  LineController,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js'

// ลงทะเบียน Chart.js modules
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

// Props รับข้อมูลสำหรับกราฟ
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [], // ค่าเริ่มต้นเป็นอาร์เรย์ว่าง
  },
})

// Refs และตัวแปร
const chartCanvas = ref(null) // อ้างอิงไปยัง element canvas
let chartInstance = null // สำหรับเก็บอินสแตนซ์ของกราฟ

// ฟังก์ชันสร้างกราฟ
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
        backgroundColor: 'rgba(173, 216, 230, 0.5)', // สีฟ้าอ่อน
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
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false }, // ซ่อนเส้นแนวตั้ง
        ticks: { font: { size: 16, family: 'Kanit' } },
        border: { color: '#000000' },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true, // แสดงเส้นแนวนอน
          color: '#d3d3d3',
          lineWidth: 1,
          drawBorder: true,
          drawTicks: true,
        },
        ticks: { font: { size: 16, family: 'Kanit' } },
        border: { color: '#000000' },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw} `
          },
        },
      },
    },
  }

  chartInstance = new ChartJS(ctx, { type: 'line', data, options })
}

// ฟังก์ชันอัปเดตข้อมูลในกราฟ
const updateChart = () => {
  if (chartInstance) {
    chartInstance.data.labels = props.data.map((item) => item.usage_name)
    chartInstance.data.datasets[0].data = props.data.map(
      (item) => item.usage_count
    )
    chartInstance.update() // อัปเดตกราฟ
  }
}

// สร้างกราฟเมื่อ component ถูก mount
onMounted(() => {
  initializeChart()
})

// อัปเดตข้อมูลในกราฟเมื่อ props.data เปลี่ยน
watch(
  () => props.data,
  () => {
    updateChart()
  },
  { deep: true }
)
</script>
