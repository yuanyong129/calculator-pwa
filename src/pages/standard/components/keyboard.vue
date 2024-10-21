<script lang="ts" setup>
import { MATH_SYMBOL } from '@/utils/constant';

const emits = defineEmits(['click']);

const buttonList: {
  value: string,
  text?: string,
  isIcon?: boolean,
  iconName?: string,
}[] = [
  { value: MATH_SYMBOL.PERCENT, isIcon: true, iconName: 'percent-outline' },
  { value: MATH_SYMBOL.CLEAR_ERROR, text: MATH_SYMBOL.CLEAR_ERROR },
  { value: MATH_SYMBOL.CLEAR, text: MATH_SYMBOL.CLEAR },
  { value: MATH_SYMBOL.BACK, isIcon: true, iconName: 'backspace-outline' },

  { value: MATH_SYMBOL.RECIPROCAL, text: MATH_SYMBOL.RECIPROCAL },
  { value: MATH_SYMBOL.SQUARE, text: MATH_SYMBOL.SQUARE },
  { value: MATH_SYMBOL.SQUARE_ROOT, isIcon: true, iconName: 'square-root' },
  { value: MATH_SYMBOL.DIVIDE, isIcon: true, iconName: 'division' },

  { value: '7', text: '7' },
  { value: '8', text: '8' },
  { value: '9', text: '9' },
  { value: MATH_SYMBOL.MULTIPLE, isIcon: true, iconName: 'close' },
  
  { value: '4', text: '4' },
  { value: '5', text: '5' },
  { value: '6', text: '6' },
  { value: MATH_SYMBOL.MINUS, isIcon: true, iconName: 'minus' },

  { value: '1', text: '1' },
  { value: '2', text: '2' },
  { value: '3', text: '3' },
  { value: MATH_SYMBOL.PLUS, isIcon: true, iconName: 'plus' },

  { value: MATH_SYMBOL.NEGATE, isIcon: true, iconName: 'plus-minus-variant' },
  { value: '0', text: '0' },
  { value: MATH_SYMBOL.POINT, text: MATH_SYMBOL.POINT },
  { value: MATH_SYMBOL.EQUAL, isIcon: true, iconName: 'equal' },
]

const onClick = (val: string | number) => {
  emits('click', val);
}
</script>

<template>
  <div class="keyboard-container">
    <v-card 
      class="key-button"
      v-for="item in buttonList"
      :key="item.value"
      @click="() => onClick(item.value)">
      <template v-if="item.isIcon">
        <v-icon :icon="`mdi-${item.iconName}`"></v-icon>
      </template>
      <template v-else>
        <span style="font-size: 28px; font-weight: 500;">{{ item.text }}</span>
      </template>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.keyboard-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 8px;
  .key-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
  }
}
</style>