<template lang="pug">
    li.member-list-item
      img.member-list-icon(:src="icon")
      .member-list-info
        .member-list-name {{ name }}
        .member-list-job {{ job }}
        .right-side
          a.link-icon-twitter(v-if="twitterId" :href='`https://twitter.com/${twitterId}`' target="blank")
            font-awesome-icon(:icon="['fab', 'twitter']")
</template>

<script>
export default {
  name: "member",
  props: ['name', 'icon', 'job', 'twitterId']
}
</script>

