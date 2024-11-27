<template>
    <v-sheet
      class="fill-height d-flex flex-column"
      style="width: 100%; height: 100%"
    >
      <div class="d-flex flex-grow-1" style="width: 100%">
        <canvas id="chart-bar" ref="chartCanvas" />
      </div>
    </v-sheet>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted, watch } from 'vue'
  import {
    Chart as ChartJS,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  
  // ลงทะเบียน BarController และส่วนที่จำเป็น
  ChartJS.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
  )
  
  export default defineComponent({
    name: 'BarChart',
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
  
        // สร้างข้อมูล datasets แบบหลายชุด
        const datasets = [
          {
            label: 'Dataset 1',
            backgroundColor: 'rgba(54, 162, 235, 0.7)', // สีน้ำเงิน
            data: props.data.map((item) => item.dataset1_count),
          },
          {
            label: 'Dataset 2',
            backgroundColor: 'rgba(255, 99, 132, 0.7)', // สีแดง
            data: props.data.map((item) => item.dataset2_count),
          },
          {
            label: 'Dataset 3',
            backgroundColor: 'rgba(75, 192, 192, 0.7)', // สีเขียว
            data: props.data.map((item) => item.dataset3_count),
          },
        ]
  
        const data = {
          labels: props.data.map((item) => item.usage_name),
          datasets: datasets,
        }
  
        const options = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false, // ซ่อนเส้นแนวตั้ง
              },
              ticks: {
                font: {
                  size: 14,
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
                color: '#d3d3d3', // สีของเส้น
                lineWidth: 1,
              },
              ticks: {
                font: {
                  size: 14,
                  family: 'Kanit',
                },
              },
              border: {
                color: '#000000',
              },
            },
          },
          plugins: {
            legend: {
              display: true, // แสดงคำอธิบายชุดข้อมูล
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.dataset.label}: ${context.raw}`
                },
              },
            },
          },
        }
  
        // สร้างกราฟใหม่
        chartInstance = new ChartJS(ctx, {
          type: 'bar',
          data,
          options,
        })
      }
  
      const updateChart = () => {
        if (chartInstance) {
          // อัปเดตข้อมูลในกราฟ
          chartInstance.data.labels = props.data.map((item) => item.usage_name)
          chartInstance.data.datasets.forEach((dataset, index) => {
            dataset.data = props.data.map((item) => item[`dataset${index + 1}_count`])
          })
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
  
      return {
        chartCanvas,
      }
    },
  })
  </script>
  