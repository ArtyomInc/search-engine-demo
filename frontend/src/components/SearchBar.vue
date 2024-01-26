<script setup lang="ts">
import { ref, Ref, defineProps, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import FilterIcons from '../assets/icons/filter_alt.svg';
import SearchIcons from '../assets/icons/search.svg';

let field: Ref<string> = ref('');
const props = defineProps(['field']);
const emit = defineEmits(['search']);

onMounted(() => {
  field.value = props.field;
});

const router = useRouter();
const searchOrder = () => {
  if (field.value.length != 0 && field.value != undefined) {
    router.push({
      name: 'search',
      query: {
        field: field.value,
        filter: JSON.stringify({ tag: 'test', product: 'test' }),
      },
    });
    emit('search', field.value);
  }
};
</script>

<template>
  <div
    class="bg-white w-full max-w-4xl h-10 rounded-full flex items-center border border-background"
  >
    <input
      placeholder="search"
      v-model="field"
      class="mx-4 w-full h-full outline-none border-none text-background"
      @keydown.enter="searchOrder"
    />
    <button
      class="h-full aspect-square flex justify-center items-center hover:bg-solid/50"
    >
      <img :src="FilterIcons" alt="filter" />
    </button>
    <button
      class="h-full aspect-square rounded-r-full flex justify-center items-center hover:bg-solid/50"
      @click="searchOrder"
    >
      <img :src="SearchIcons" alt="search" />
    </button>
  </div>
</template>
