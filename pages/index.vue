<template>
  <div class="skyworld-space">
    <div class="skyworld-space-header">
      <img src="@/assets/img/logo.png" alt="" class="img logo" />
    </div>
    <div class="skyworld-space-banner"></div>
    <div class="skyworld-space-announcement">
      <div class="announcement-title">announcement</div>
      <div class="announcement-list">
        <div v-for="item in 2" :key="item" class="announcement-item">
          <img src="@/assets/img/announcement.png" alt="" />
        </div>
      </div>
    </div>
    <div class="skyworld-space-featured">
      <div class="featured-title">
        <div class="text">Featured</div>
        <div class="more" @click="handleMore">View All ></div>
      </div>
      <FeaturedItem v-for="item in 4" :key="item" />
    </div>
  </div>
</template>

<script>
import FeaturedItem from '@/components/FeaturedItem'
export default {
  name: 'SkyworldSpace',
  components: { FeaturedItem },
  asyncData({ redirect }) {},
  data() {
    return {}
  },
  methods: {
    handleMore() {
      this.$router.push({ name: 'unit' })
    }
  }
}
</script>

<style lang="scss" scoped>
.skyworld-space {
  min-height: 100%;
  background: url('@/assets/img/head-bg.png') center top / 100% auto no-repeat;
  &-header {
    padding: 66px 22px 34px 22px;
    > .logo {
      width: 78px;
      height: 40px;
    }
  }
  &-banner {
    height: 250px;
    border-radius: 25px 25px 0 0;
    background: linear-gradient(180deg, #f4f4f4 0%, rgba(249, 190, 1, 1) 50.69%, #ffffff 100%);
  }
  &-announcement {
    padding: 21px 0 40px 10px;

    .announcement-title {
      font-size: $text-large;
      font-weight: bold;
      padding: 0 10px 14px 10px;
      text-transform: capitalize;
    }
  }
  &-featured {
    border-radius: 25px 25px 0 0;
    background: #fff;
    min-height: 100vh;
    padding: 22px 10px;
    .featured-title {
      font-weight: bold;
      font-size: $text-large;
      @include flex(space-between);
      padding: 0 10px 21px 10px;
      .text {
        text-transform: capitalize;
      }
    }
  }
}
.announcement-list {
  @include flex(flex-start);
  flex-wrap: nowrap;
  overflow-y: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }

  .announcement-item {
    width: 200px;
    height: 120px;
    border-radius: 20px;
    background: #eee;
    margin-left: 20px;
    > img {
      max-height: 100%;
      display: block;
    }
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
