<template>
    <ion-img :src="image" :alt="title" class="img-memory"></ion-img>
    <h2 class="title-memory">{{ title }}</h2>
    <p class="description-memory">{{ description }}</p>
</template>

<script>

import { IonImg } from "@ionic/vue"

export default {
    props:["title", "image", "description"],
    components:{
        IonImg
    }
}
</script>