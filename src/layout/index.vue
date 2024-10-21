<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const visible = ref<boolean>(false);
const title = ref<string>('标准');
const selectedKeys = ref<string[]>([]);

const calculators = [
  {
    icon: 'calculator',
    title: '标准',
    value: 'standard',
  },
];

const settings = [
  {
    icon: 'cog',
    title: '设置',
    value: 'settings',
  }
]

const openDrawer = () => {
  visible.value = !visible.value;
}

const onMenuClick = (key: string, _title: string) => {
  title.value = _title;
  router.push({ path: `/${key}` });
  selectedKeys.value = [key];
  visible.value = false
}
</script>

<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-nav-icon variant="text" @click.stop="openDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="visible"
      temporary>
      
      <v-list>
        <v-list-subheader>计算器</v-list-subheader>
        <v-list-item
          v-for="item in calculators"
          :key="item.value"
          @click="onMenuClick(item.value, item.title)">
          <template #prepend>
            <v-icon :icon="`mdi-${item.icon}`" />
          </template>
          <v-list-item-title v-text="item.title" />
        </v-list-item>
      </v-list>
      
      <template v-slot:append>
        <v-list>
          <v-list-item
            v-for="item in settings"
            :key="item.value"
            @click="onMenuClick(item.value, item.title)">
            <template #prepend>
              <v-icon :icon="`mdi-${item.icon}`" />
            </template>
            <v-list-item-title v-text="item.title" />
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main :style="`height: 100vh`">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>
