<template>
  <div class="rentapp-header">
    <div class="rentapp-logo">
      <img :src="logo" alt="" />
    </div>
    <div class="rentapp-right"></div>
  </div>
</template>

<script>
export default {
  name: 'RentAppHeader',
  data() {
    return {}
  },
  computed: {
    logo() {
      return this.$store.state.user.logo
    }
  }
}
</script>
<style lang="scss">
.rentapp-header {
  height: 66px;
  @include flex(space-between);
  .rentapp-logo {
    width: 107px;
    height: 54px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
@media (max-width: 960px) {
  .rentapp-header {
    @include flex();
  }
}
</style>
