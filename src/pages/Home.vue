<template lang="pug">
  .container
    h3.content-title Venue
    .content
      p.description 「第二回 BMS衆議院選」会場はこちら
    h3.content-title Commitment
    .content
      p.highlight あらゆる音を伝播させる鉄塔のように
        br 
        | あなたの心に響く曲の数々を提供します
        br
        br
        | あなたが聴くのは無骨で飾り気がなく
        br
        | しかし確かに寄り添う夜景のようなメロディー...
    .team-member-list
      h3.content-title Candidate
      .content
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
  name: 'home',
  components: {
    MemberList
  },
  data() {
    return {
      members: member_data.candidate
    }
  }
}
</script>

