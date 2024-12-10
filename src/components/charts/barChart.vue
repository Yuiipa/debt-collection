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

<script setup>
import { ref, watch, onMounted } from 'vue';
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// ลงทะเบียน BarController และส่วนที่จำเป็น
ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

// Props รับข้อมูลสำหรับกราฟ
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [], // ค่าเริ่มต้นเป็นอาร์เรย์ว่าง
  },
});

// Refs และตัวแปร
const chartCanvas = ref(null); // อ้างอิงไปยัง element canvas
let chartInstance = null; // สำหรับเก็บอินสแตนซ์ของกราฟ

// ฟังก์ชันสร้างกราฟ
const initializeChart = () => {
  if (chartInstance) {
    chartInstance.destroy(); // ทำลายกราฟเก่าก่อนสร้างใหม่
  }

  const ctx = chartCanvas.value.getContext('2d');

  // สร้างข้อมูล datasets แบบหลายชุด
  const datasets = [
          {
            label: 'บุคคลธรรมดา',
            backgroundColor: 'rgba(54, 162, 235, 0.7)', // สีน้ำเงิน
            data: props.data.map((item) => item.dataset1),
          },
          {
            label: 'ห้างหุ้นส่วนสามัญ(ไม่จดทะเบียน)',
            backgroundColor: 'rgba(255, 99, 132, 0.7)', // สีแดง
            data: props.data.map((item) => item.dataset2),
          },
          {
            label: 'ห้างหุ้นส่วนสามัญ(จดทะเบียน)',
            backgroundColor: 'rgba(75, 192, 192, 0.7)', // สีเขียว
            data: props.data.map((item) => item.dataset3),
          },
          {
            label: 'ห้างหุ้นส่วนจำกัด',
            backgroundColor: 'rgba(54, 162, 235, 0.7)', // สีน้ำเงิน
            data: props.data.map((item) => item.dataset4),
          },
          {
            label: 'บริษัทจำกัด',
            backgroundColor: 'rgba(255, 99, 132, 0.7)', // สีแดง
            data: props.data.map((item) => item.dataset6),
          },
          {
            label: 'บริษัทจำกัดมหาชน',
            backgroundColor: 'rgba(75, 192, 192, 0.7)', // สีเขียว
            data: props.data.map((item) => item.dataset6),
          },
          {
            label: 'ทนายความ',
            backgroundColor: 'rgba(54, 162, 235, 0.7)', // สีน้ำเงิน
            data: props.data.map((item) => item.dataset7),
          },
          {
            label: 'สำนักงานทนายความ',
            backgroundColor: 'rgba(255, 99, 132, 0.7)', // สีแดง
            data: props.data.map((item) => item.dataset8),
          },
        ]

  const data = {
    labels: props.data.map((item) => item.usage_name),
    datasets: datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 14, family: 'Kanit' },
        },
        border: { color: '#000000' },
      },
      y: {
        beginAtZero: true,
        grid: { color: '#d3d3d3', lineWidth: 1 },
        ticks: {
          font: { size: 14, family: 'Kanit' },
        },
        border: { color: '#000000' },
      },
    },
    plugins: {
      legend: { display: true, position: 'top' },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
  };

  // สร้างกราฟใหม่
  chartInstance = new ChartJS(ctx, {
    type: 'bar',
    data,
    options,
  });
};

// ฟังก์ชันอัปเดตข้อมูลในกราฟ
const updateChart = () => {
  if (chartInstance) {
    chartInstance.data.labels = props.data.map((item) => item.usage_name);
    chartInstance.data.datasets.forEach((dataset, index) => {
      dataset.data = props.data.map((item) => item[`dataset${index + 1}`] || 0);
    });
    chartInstance.update(); // อัปเดตกราฟ
  }
};

// สร้างกราฟเมื่อคอมโพเนนต์ถูก mount
onMounted(() => {
  initializeChart();
});

// อัปเดตข้อมูลในกราฟเมื่อ props.data เปลี่ยน
watch(
  () => props.data,
  () => {
    updateChart();
  },
  { deep: true }
);
</script>
