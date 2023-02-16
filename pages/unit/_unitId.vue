<template>
  <div class="skyworld-unit-detail">
    <TopNav class="skyworld-unit-detail-nav" />
    <div class="unit-thumb"><img src="@/assets/img/room-thumb.png" alt="" class="img" /></div>
    <div class="skyworld-unit-info">
      <div class="unit-short-info">
        <h2 class="tit">YOLO Type A</h2>
        <div class="feat-list">
          <div class="feat-item">1 Bedroom</div>
          <div class="feat-item">1 Bedroom</div>
          <div class="feat-item">1 Bedroom</div>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="unit-description">
        <h2 class="tit">Description</h2>
        <div class="content">
          <p>
            SkyBlox, the first container-inspired co-living in the park, is located in the mature neighbourhood of Setapak within the Kuala
            Lumpur City Centre. Proudly crafted by award-winning city developer - SkyWorld Development Group,
          </p>
          <p>
            SkyBlox, the first container-inspired co-living in the park, is located in the mature neighbourhood of Setapak within the Kuala
            Lumpur City Centre. Proudly crafted by award-winning city developer - SkyWorld Development Group,
          </p>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="unit-amenities">
        <h2 class="tit">Amenities</h2>
        <div class="unit-amenities-list">
          <div v-for="item in 10" :key="item" class="amenities-item">Air-conditioner</div>
        </div>
      </div>

      <div class="unit-map"></div>
      <div class="unit-contact-us">
        <h2>Still Not Sure About It?</h2>
        <v-btn rounded block outlined size="x-large">Contact Us</v-btn>
        <div class="contact-us-desc">Let us help you to know more about our room!</div>
      </div>
      <v-divider></v-divider>
      <div class="unit-policy">
        <h2>Cancellation Policy</h2>
        <div class="unit-policy-content">
          <div class="content-text">
            Before you book, make sure you’re comfortable with this Host’s cancellation policy. Keep in mind that SkyBlox’s policy doesn’t
            cover cancellations due to illness or travel disruptions caused by COVID-19.
          </div>
          <v-icon size="30px" color="#000">mdi-chevron-right</v-icon>
        </div>
      </div>
      <div class="unit-recommend"></div>
    </div>
    <div class="skyworld-action-fixed">
      <div class="action-box">
        <div class="skyworld-unit-price">
          <div class="unit-price-title">Total move in cost</div>
          <div class="price">RM700 / Month</div>
          <div class="all-price">Show All Prices</div>
        </div>
        <v-btn rounded dark color="#000" size="x-large">Book Now</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
export default {
  name: 'SkyworldUnit',
  components: { TopNav },
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
.skyworld-unit-detail {
  min-height: 100%;
  position: relative;
  :deep(.skyworld-unit-detail-nav) {
    position: absolute;
    top: 20px;
    left: 0;
  }
  :deep(h2) {
    padding-bottom: 10px;
  }
}
.skyworld-unit-info {
  padding: 20px 24px 120px 24px;
  .unit-thumb {
    height: 265px;
  }
  .unit-short-info {
    padding: 0 0 20px 0;
    // .tit {
    //   font-weight: bold;
    //   font-size: $text-xl;
    // }
  }
}
.feat-list {
  @include flex(flex-start);
  .feat-item {
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
}
.unit-description {
  // .tit {
  //   font-weight: bold;
  //   font-size: $text-xl;
  // }
  padding: 20px 0;
  .content {
    color: #868685;
  }
}
.unit-amenities {
  padding: 20px 0;
}
.unit-map {
  height: 345px;
  background: #eee;
  margin: 0 -24px;
}
.unit-amenities-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  color: #868685;
}
.unit-contact-us {
  padding: 20px 0;
  .contact-us-desc {
    text-align: center;
    color: #868685;
    padding-top: 10px;
  }
}
.unit-policy {
  padding: 20px 0;
  .unit-policy-content {
    @include flex(flex-start);
    .content-text {
      flex: 1;
      color: #868685;
    }
  }
}
.skyworld-action-fixed {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 100;
  .action-box {
    max-width: $layout;
    background-color: #ececec;
    margin: 0 auto;
    padding: 10px 20px;
    @include flex(space-between);
    .unit-price-title {
      color: #939ca2;
    }
    .price {
      font-weight: bold;
      color: #000;
      font-size: $text-large;
      padding: 3px 0;
    }
    .all-price {
      text-decoration: underline;
    }
  }
}
</style>
