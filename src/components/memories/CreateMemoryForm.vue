<template>
  <form class="ion-padding" @submit.prevent="submitForm">
            <ion-list>
                <ion-item>
                    <ion-label position="floating">Título del recuerdo:</ion-label>
                    <ion-input v-model="memory.title" type="text" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Imagen (URL):</ion-label>
                    <ion-input v-model="memory.image" type="url" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Descripción:</ion-label>
                    <ion-textarea v-model="memory.description" rows="5" type="text" required></ion-textarea>
                </ion-item>
            </ion-list>
            <ion-button type="submit" expand="block" color="dark" fill="outline">Guardar</ion-button>
        </form>
</template>

<script>

import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/vue"

export default {
    emits: ["save-memory"],
    components:{
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton
    },
    data(){
        return {
            memory: {id: new Date().toISOString(), title:"", image:"", description:""}
        }
    },
    methods:{
        submitForm(){
            this.$emit("save-memory",this.memory)
        }
    }
}
</script>

<style>

</style>