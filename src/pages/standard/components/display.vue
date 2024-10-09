<script lang="ts" setup>
defineProps({
  expression: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="display-container">
    <div v-show="expression.length > 1" class="expression">
      {{ expression  }}
    </div>
    <div class="result-value">
      {{ value }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.display-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 26px;
  .expression {
    font-size: 16px;
    margin-bottom: 8px;
    color: var(--color-neutral-4);
  }
}
</style>