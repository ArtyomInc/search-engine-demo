<script setup lang="ts">
const props = defineProps(['title', 'tag', 'product', 'content']);
</script>

<template>
  <div class="flex flex-col gap-1 bg-solid rounded-2xl p-5 max-w-4xl">
    <h2 class="">
      {{ props.title }}
    </h2>
    <div class="flex gap-1">
      <div
        class="flex px-2 font-semibold border-2 rounded-full"
        v-for="item in props.tag"
      >
        {{ item }}
      </div>
    </div>
    <div class="flex" v-for="item in props.product">
      <div class="flex px-2 font-semibold border-2 rounded-full">
        {{ item }}
      </div>
    </div>
    <div>
      <p>
        {{ props.content }}
      </p>
    </div>
  </div>
</template>
