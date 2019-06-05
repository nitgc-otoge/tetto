<template lang="pug">
  .container
    h3.content-title Commitment
    p.description あらゆる音を伝播させる鉄塔のようにあなたの心に響く曲の数々を提供します。
      br 
      | あなたが聴くのは無骨で飾り気がなく、しかし確かに寄り添う夜景のようなメロディー...。
    .team-member-list
      h3.content-title Starring
      ul.member-list
        MemberList(
          v-for="item in members"
          v-bind:name="item.name"
          v-bind:icon="item.icon"
          :key="item.key"
        )
</template>

<script>
import Vue from 'vue'
import MemberList from '../components/Member.vue'
import member_data from '../data/member_data.json'

export default {
  name: 'teaser',
  components: {
    MemberList
  },
  data() {
    return {
      members: member_data
    }
  }
}
</script>

