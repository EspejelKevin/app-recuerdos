<template>
    <ion-page>
        <ion-header>
            <ion-toolbar class="toolbar-main">
                <ion-buttons>
                    <ion-back-button color="light" :default-href="pageDefaultBackLink"></ion-back-button>
                    <ion-title>Mis recuerdos</ion-title>
                </ion-buttons>
                <ion-buttons slot="end">
                    <slot name="actions-end"></slot>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-toolbar class="toolbar-second">
                <ion-title size="small">{{pageTitle}}</ion-title>
            </ion-toolbar>
            <slot></slot>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton } from '@ionic/vue'
export default {
    props: ['pageTitle', "pageDefaultBackLink"],
    components: {
        IonPage, 
        IonHeader, 
        IonTitle, 
        IonContent,
        IonToolbar,
        IonBackButton,
        IonButtons
   }
}
</script>

<style>
    
</style>