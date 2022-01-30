<template>
    <base-layout pageTitle="Detalles de mi recuerdo...">
        <ion-item v-if="!loadedMemory">
            <ion-label class="detail-memory">No existe descripción</ion-label>
        </ion-item>
        <memories-overview v-else :title="memory.title" :image="memory.image" :description="memory.description"></memories-overview>
    </base-layout>
</template>

<script>

import { IonLabel, IonItem } from "@ionic/vue"
import BaseLayout from "../components/base/BaseLayout.vue"
import MemoriesOverview from "../components/memories/MemoriesOverview.vue"

export default {
    components:{
        BaseLayout,
        IonLabel,
        IonItem,
        MemoriesOverview
    },
    data(){
        return {
            memoryId: this.$route.params.id,
            memory: null,
            isMemory: true
        }
    },
    computed: {
        loadedMemory(){
            this.getMemory()
            return this.isMemory
        }
    },
    methods: {
        getMemory(){
            this.memory = this.$store.getters.memory(this.memoryId)
            if(this.memory.description){
                this.isMemory = true
            }else{
                this.isMemory = false
            }
        }
    }
}
</script>