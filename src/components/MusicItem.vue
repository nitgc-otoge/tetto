<template lang="pug">
  .music-list-item(v-if="embed")
    .music-item-genre {{ genre }}
    .music-item-name {{ name }}
    .music-item-artist 
      span.music-item-split by
      | {{ artist }}
    .music-item-embed
      iframe(
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        :src="embed"
      )
</template>

<script>
export default {
  name: "music_item",
  props: ['genre', 'name', 'artist', 'embed']
}
</script>
