<template lang="pug">
  .wrapper
    .header
      .team-header
        h3.jumbo-team-subtitle 音楽を、その手に。
        h2.jumbo-team-name 鉄党
      Navigation
    transition(mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut")
      router-view
</template>

<script>
import Vue from 'vue'
import Navigation from './components/Navigation.vue'

export default {
  components: {
    Navigation
  },
}
</script>

