<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SearchBar from '../components/SearchBar.vue';
import TopicFinded from '../components/TopicFinded.vue';
import axios from 'axios';

const route = useRoute();
let findedData: Ref<any> = ref([{ name: 0 }]);

const search = async (field: string) => {
  const response = await axios.get('http://localhost:3000/search', {
    params: { field: field },
  });
  findedData.value = response.data;
};

onMounted(async () => {
  //@ts-ignore
  search(route.query.field?.toString());
});
</script>

<template>
  <section class="mx-8 my-4 gap-4 flex justify-start flex-col">
    <div class="flex">
      <SearchBar :field="$route.query.field" @search="search"></SearchBar>
    </div>
    <div>{{ $route.query.field }} {{ $route.query.filter }}</div>
    <div class="flex flex-col gap-2">
      <TopicFinded
        v-for="item in findedData"
        :title="item.title"
        :tag="item.tag"
        :product="item.product"
        :content="item.content"
      ></TopicFinded>
    </div>
  </section>
</template>
