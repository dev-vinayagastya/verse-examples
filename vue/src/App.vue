<script setup>
import { VerseViewer } from "@ctruhtech/verse-vue";
</script>

<template>
  <main style="max-width: 720px; margin: 3rem auto; padding: 0 1rem; font: 16px system-ui">
    <h1>My product</h1>
    <VerseViewer host="https://verse.ctruh.com" src="demo-chess-set" aspect="16:9" autoplay-tour />
  </main>
</template>
