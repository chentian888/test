<template>
  <div class="skyworld-unit">
    <TopNav class="skyworld-unit-nav" title="Our Unit" />
    <div class="skyworld-unit-list">
      <div class="skyworld-unit-head">
        <div class="tit">All Unit</div>
        <div class="action">
          <v-icon size="22px" color="#000">mdi-magnify</v-icon>
          <v-icon size="22px" color="#000">mdi-tune-variant</v-icon>
        </div>
      </div>
      <FeaturedItem v-for="item in 4" :key="item" />
    </div>
  </div>
</template>

<script>
import FeaturedItem from '@/components/FeaturedItem'
import TopNav from '@/components/TopNav'
export default {
  name: 'SkyworldUnit',
  components: { FeaturedItem, TopNav },
  asyncData({ redirect }) {},
  data() {
    return {
      colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
    }
  }
}
</script>

<style lang="scss" scoped>
.skyworld-unit {
  min-height: 100%;
  background: url('@/assets/img/head-bg.png') center top / 100% auto no-repeat;
  :deep(.skyworld-top-nav) {
    padding: 51px 0 22px 0;
  }
  &-head {
    @include flex(space-between);
    padding: 0 10px 21px 10px;
    .tit {
      font-size: $text-large;
      font-weight: bold;
    }
    .action {
      :deep(.v-icon) {
        margin-left: 15px;
      }
    }
  }
}
.skyworld-unit-list {
  border-radius: 25px 25px 0 0;
  background: #fff;
  min-height: 100vh;
  padding: 22px 10px;
}
</style>
