<template lang="pug">
    li.member-list-item
      img.member-list-icon(:src="icon")
      .member-list-info
        .member-list-name {{ name }}
</template>

<script>
export default {
  name: "member",
  props: ['name', 'icon']
}
</script>

