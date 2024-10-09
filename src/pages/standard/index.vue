<script lang="ts" setup>
import { ref } from 'vue';
import keyboard from './components/keyboard.vue';
import display from './components/display.vue';
import { FMath } from '@/utils/math';
import { MATH_SYMBOL } from '@/utils/constant';

const expression = ref<string>('');
const result = ref<string>('0');

let isFinished: boolean = false;

const calc = () => {
  expression.value += result.value;
  result.value = calcExpression(expression.value);
  isFinished = true;
}

const calcExpression = (expression: string) => {
  let result = '';
  if(expression.includes(MATH_SYMBOL.PLUS)) {
    const [a, b] = expression.split(MATH_SYMBOL.PLUS);
    result = FMath.plus(a, b).toString();
  }
  if(expression.includes(MATH_SYMBOL.MINUS)) {
    const [a, b] = expression.split(MATH_SYMBOL.MINUS);
    result = FMath.minus(a, b).toString();
  }
  if(expression.includes(MATH_SYMBOL.MULTIPLE)) {
    const [a, b] = expression.split(MATH_SYMBOL.MULTIPLE);
    result = FMath.multiple(a, b).toString();
  }
  if(expression.includes(MATH_SYMBOL.DIVIDE)) {
    const [a, b] = expression.split(MATH_SYMBOL.DIVIDE);
    result = FMath.divide(a, b).toString();
  }
  return result;
}

const onClick = (val: string) => {
  switch (val) {
    case MATH_SYMBOL.PERCENT:
      result.value = FMath.divide(result.value, 100).toString();
      break;
    case MATH_SYMBOL.CLEAR:
      expression.value = '';
      result.value = '0';
      break;
    case MATH_SYMBOL.CLEAR_ERROR: //清空
      result.value = '0';
      break;
    case MATH_SYMBOL.BACK: // 消除
      result.value = result.value.length > 0 ? result.value.substring(0, result.value.length - 1) : ''
      break;
    case MATH_SYMBOL.RECIPROCAL: // 倒数
      result.value = FMath.reciprocal(result.value).toString();
      break;
    case MATH_SYMBOL.SQUARE: // 平方
      result.value = FMath.square(result.value).toString();
      break;
    case MATH_SYMBOL.SQUARE_ROOT: //平方根
      result.value = FMath.squareRoot(result.value).toString();
      break;
    case MATH_SYMBOL.PLUS: // 加法
      expression.value = result.value + '+';
      result.value = '';
      break;
    case MATH_SYMBOL.MINUS: // 减法
      expression.value = result.value + '-';
      result.value = '';
      break;
    case MATH_SYMBOL.MULTIPLE: // 乘法
      expression.value = result.value + '×';
      result.value = '';
      break;
    case MATH_SYMBOL.DIVIDE: // 除法
      expression.value = result.value + '÷';
      result.value = '';
      break;
    case '0':
      result.value += '0';
      break;
    case MATH_SYMBOL.POINT:
      if(!result.value.includes('.'))
      result.value += '.'; 
      break;
    case MATH_SYMBOL.EQUAL:
      calc()
      break;
    case MATH_SYMBOL.NEGATE:
      result.value = FMath.negate(result.value).toString();
      break;
    default:
      result.value += val;
      break;
  }
}
</script>

<template>
  <div class="container">
    <display :expression="expression" :value="result"></display>
    <keyboard @click="onClick"></keyboard>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 12px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 6fr;
  gap: 20px;
}
</style>