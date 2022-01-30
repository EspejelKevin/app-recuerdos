<template>
    <ion-item
      :router-link="`/memories/details/${m.id}`"
      >
      <ion-thumbnail>
        <ion-img :src="m.image"></ion-img>
      </ion-thumbnail>
      <ion-label class="memorie-title">{{ m.title }}</ion-label>
    </ion-item>
</template>

<script>

import { IonItem, IonLabel, IonThumbnail, IonImg } from "@ionic/vue";

export default {
  props: ["m"],
  components:{
    IonItem, 
    IonLabel,
    IonThumbnail, 
    IonImg
  }
}
</script>