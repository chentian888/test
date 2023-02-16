<template>
  <div class="skyworld-featured-item" @click="handleDetail">
    <div class="thumb">
      <v-carousel height="288" hide-delimiter-background :show-arrows="false" :touchless="true">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <div class="display-3"></div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="room-tags">
      <div class="tag">Female Only</div>
      <div class="tag">WiFi</div>
      <div class="tag">Single Bed</div>
      <div class="tag">Female Only</div>
    </div>
    <div class="room-title">
      <div class="name">YOL Type A</div>
      <div class="price">RM700 / Month</div>
    </div>

    <div class="room-desc">Best for student, cozy & comfort.</div>
  </div>
</template>

<script>
export default {
  name: 'SkyworldFeaturedItem',
  data() {
    return {
      colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
    }
  },
  methods: {
    handleDetail() {
      this.$router.push({ name: 'unit-unitId', params: { unitId: '123' } })
    }
  }
}
</script>

<style lang="scss" scoped>
.skyworld-featured-item {
  margin-bottom: 42px;

  .thumb {
    height: 288px;
    border-radius: 30px;
    overflow: hidden;
    background: url('@/assets/img/room.png') center center / 100% auto no-repeat #eee;
  }
  .room-tags {
    @include flex(flex-start);
    padding: 11px 0;
    .tag {
      height: 17px;
      border-radius: 20px;
      background-color: $theme-color;
      color: #fff;
      padding: 0 7px;
      font-size: $text-xxs;
      margin-left: 5px;
      &:first-child {
        margin-left: 0;
      }
      @include flex();
    }
  }
  .room-title {
    font-weight: bold;
    font-size: $text-large;
    @include flex(space-between);
    .name {
      flex: 1;
    }
  }
  .room-desc {
    color: $theme-dark;
    font-size: 13px;
  }
}
</style>
