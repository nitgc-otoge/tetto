<template lang="pug">
  .container
    h3.content-title Venue
    .content.text-center
      p.description 「第二回 BMS衆議院選」
        br
        | 会場はこちら
        br
        a.link-btn.gotovenue(href="https://venue.bmssearch.net/bmsshuin2" target="blank") GO TO VENUE
    h3.content-title Commitment
    .content
      p.highlight あらゆる音を伝播させる鉄塔のようにあなたの心に響く曲の数々を提供します
      p.highlight あなたが聴くのは無骨で飾り気がなくしかし確かに寄り添う夜景のようなメロディー...
    .team-member-list
      h3.content-title Candidates
        small (A to Z)
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

