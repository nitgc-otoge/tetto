<template lang="pug">
    li.member-list-item
      img.member-list-icon(:src="icon")
      .member-list-info
        .member-list-name {{ name }}
      .right-side(v-if="twitterId")
        a.link-icon-twitter(v-if="twitterId" :href='`https://twitter.com/${twitterId}`' target="blank")
          font-awesome-icon(:icon="['fab', 'twitter']")
        a.link-icon-sc(v-if="scId" :href='`https://soundcloud.com/${scId}`' target="blank")
          font-awesome-icon(:icon="['fab', 'soundcloud']")
</template>

<script>
export default {
  name: "member",
  props: ['name', 'icon', 'twitterId', 'scId']
}
</script>

