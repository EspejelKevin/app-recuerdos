<template>
    <base-layout pageTitle="Mi nuevo recuerdo" page-default-back-link="/memories">
        <form>
            <ion-list>
                <ion-item>
                    <ion-label position="floating">Título del recuerdo:</ion-label>
                    <ion-input type="text" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Imagen (URL):</ion-label>
                    <ion-input type="url" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Descripción:</ion-label>
                    <ion-textarea rows="5" type="text" required></ion-textarea>
                </ion-item>
            </ion-list>
            <ion-button expand="full" color="dark">Guardar</ion-button>
        </form>
    </base-layout>
</template>

<script>

import BaseLayout from "../components/base/BaseLayout.vue"
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/vue"

export default {
    components:{
        BaseLayout,
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton
    }
}
</script>