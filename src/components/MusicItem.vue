<template lang="pug">
  .music-list-item
    .music-item-genre {{ genre }}
    .music-item-name {{ name }}
    .music-item-artist {{ artist }}
    .music-item-like
      button.like-btn Like
</template>

<script>
export default {
  name: "music_item",
  props: ['genre', 'name', 'artist']
}
</script>
