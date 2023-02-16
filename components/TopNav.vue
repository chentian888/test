<template>
  <div class="skyworld-top-nav">
    <div class="nav-left">
      <v-icon size="35px" color="#000" @click="handleBack">mdi-chevron-left</v-icon>
      <div class="text">{{ title }}</div>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountDown',
  components: {},
  props: {
    title: { type: String, default: '' }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {
    handleBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.skyworld-top-nav {
  .nav-left {
    @include flex(flex-start);
    .text {
      font-weight: bold;
      font-size: $text-xxl;
    }
  }
  .nav-right {
    @include flex(flex-end);
  }
}
</style>
