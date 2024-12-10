<template>
  <v-sheet
    class="fill-height d-flex flex-column"
    style="background-color: transparent"
  >
    <v-row class="chart-container flex-grow-1">
      <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
      <div class="d-none d-md-flex">
        <div class="chart-center-text" v-if="centerText">
          <span style="font-size: 16px; display: block">
            {{ centerText.label }}
          </span>
          <span style="font-size: 24px; display: block">
            {{ centerText.value }}
          </span>
        </div>
      </div>
    </v-row>
    <v-row
      class="legend-container justify-start justify-md-center pt-md-6 mt-md-16 px-4"
    >
      <div
        v-for="(label, index) in chartData.labels"
        :key="index"
        class="legend-item d-flex align-center mr-4"
        @click="toggleDatasetVisibility(index)"
        :style="{
          opacity: hiddenDatasets[index] ? 0.5 : 1,
          cursor: 'pointer',
        }"
      >
        <span
          :style="{
            backgroundColor: chartData.datasets[0].backgroundColor[index],
          }"
          class="legend-color-box mr-2"
        ></span>
        <span>{{ label }}</span>
      </div>
    </v-row>
  </v-sheet>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Doughnut } from 'vue-chartjs';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// ลงทะเบียน Chart.js modules
ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

// Props
const props = defineProps({
  systems: {
    type: Array,
    required: true,
  },
});

// Refs
const centerText = ref({ label: '', value: '' });
const hiddenDatasets = ref(Array(props.systems.length).fill(false));

// กำหนดข้อมูลกราฟ
const chartData = ref({
  labels: props.systems.map((item) => item.name),
  datasets: [
    {
      label: 'จำนวนการเข้าใช้',
      data: props.systems.map((item) => item.usage),
      backgroundColor: props.systems.map((item) => item.color),
      borderColor: '#FFFFFF',
      borderWidth: 2,
    },
  ],
});

// ออปชันของกราฟ
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  cutout: '40%',
  rotation: -90,
  circumference: 180,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      external(context) {
        const tooltipModel = context.tooltip;
        if (tooltipModel && tooltipModel.dataPoints) {
          const index = tooltipModel.dataPoints[0].dataIndex;
          const dataset = context.chart.data.datasets[0];
          const label = context.chart.data.labels[index];
          const value = dataset.data[index];

          centerText.value = { label, value: `${value} ครั้ง` };
        }
      },
    },
    datalabels: {
      display: false,
    },
  },
});

// ฟังก์ชัน toggle visibility
const toggleDatasetVisibility = (index) => {
  hiddenDatasets.value[index] = !hiddenDatasets.value[index];
  const chart = ChartJS.getChart('my-chart-id');
  chart.getDatasetMeta(0).data[index].hidden = hiddenDatasets.value[index];
  chart.update();
};

// ตั้งค่า centerText เมื่อ mount
onMounted(() => {
  if (props.systems.length > 0) {
    centerText.value = {
      label: props.systems[0].name,
      value: props.systems[0].usage,
    };
  }
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
}

.chart-center-text {
  position: absolute;
  top: 84%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #333;
}

.legend-container {
  text-align: center;
}

.legend-item {
  font-size: 14px;
  display: flex;
  align-items: center;
}

.legend-color-box {
  width: 16px;
  height: 16px;
  display: inline-block;
  border-radius: 50%;
}
</style>
