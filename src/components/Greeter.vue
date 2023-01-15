<script setup lang="ts">
export interface Props {
  msg: string;
  luckyNumber: number;
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    Hello {{ msg }}! <span class="icon-heart" style="color:tomato"></span>
  </div>
</template>
