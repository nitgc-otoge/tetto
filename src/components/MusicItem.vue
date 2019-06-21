<template lang="pug">
  .music-list-item
    .music-item-genre {{ genre }}
    .music-item-name {{ name }}
    span.music-item-split by
    .music-item-artist {{ artist }}
</template>

<script>
export default {
  name: "music_item",
  props: ['genre', 'name', 'artist']
}
</script>
