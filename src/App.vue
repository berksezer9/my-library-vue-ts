<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import MyButton from "@/components/MyButton.vue";
import {ref} from "vue";
import {StorageID, Retrieve, Save, getItemOrDefault} from "./";
import type {GeneralPrefixes, KeySuffix} from "./";

const generalPrefixForAllKeyPrefixes: GeneralPrefixes = {'general_prefix': 'general_prefix'};
const keySuffix: KeySuffix = 'key_suffix';
const storageID: StorageID = new StorageID(generalPrefixForAllKeyPrefixes, keySuffix);
enum storageKeys {
  count = 'count',
}
const retrieve = new Retrieve(Object.values(storageKeys), storageID);
const save = new Save({}, storageID);

const appCount = ref<number>( getItemOrDefault(retrieve, storageKeys.count, 0) );

function atClick () {
  appCount.value += 1;

  save.saveItem(storageKeys.count, appCount.value);
}

</script>

<template>
  <button @click.prevent="atClick">
    {{appCount}}
  </button>
  <HelloWorld msg="Vite + Vue" />
  <MyButton text="hola">Hola</MyButton>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
