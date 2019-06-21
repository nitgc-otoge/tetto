<template lang="pug">
  .container
    h3.content-title Music
    .music-list
      MusicItem(
        v-for="item in musics"
        v-bind:name="item.name"
        v-bind:genre="item.genre"
        v-bind:artist="item.artist"
        :key="item.key"
      )
</template>

<script>
import Vue from 'vue'
import MusicItem from '../components/MusicItem.vue'
import music_data from '../data/music_data.json'

export default {
  name: 'music',
  components: {
    MusicItem
  },
  data() {
    return {
      musics: music_data
    }
  }
}
</script>
