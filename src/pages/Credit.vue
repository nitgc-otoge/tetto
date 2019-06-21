<template lang="pug">
  .container
    h3.content-title Credit
    .content
      h4.sub-title Candidates
      ul.member-list
        MemberList(
          v-for="item in members_candidates"
          v-bind:name="item.name"
          v-bind:icon="item.icon"
          :key="item.key"
        )
      h4.sub-title Support Members
      ul.member-list
        SupportMemberList(
          v-for="item in members_support"
          v-bind:name="item.name"
          v-bind:job="item.job"
          v-bind:icon="item.icon"
          :key="item.key"
        )
</template>

<script>
import Vue from 'vue'
import MemberList from '../components/Member.vue'
import SupportMemberList from '../components/SupportMember.vue'
import member_data from '../data/member_data.json'

export default {
  name: 'credit',
  components: {
    MemberList,
    SupportMemberList
  },
  data() {
    return {
      members_candidates: member_data.candidate,
      members_support: member_data.support
    }
  }
}
</script>
