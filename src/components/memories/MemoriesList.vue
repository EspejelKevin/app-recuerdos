<template>
  <ion-list lines="full">
    <memory-list-item
      v-for="m in memories"
      :key="m.id"
      :m="m"
    >
    </memory-list-item>
  </ion-list>
</template>

<script>

import { IonList } from "@ionic/vue";
import { MemoryListItem } from "./MemoryListItem.vue"

export default {
  props: ["memories"],
  components: {
    IonList,
    MemoryListItem
  }
};
</script>