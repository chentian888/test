<template>
  <div v-if="content.id" class="rentapp-room-info">
    <!-- <div v-if="content.photos && content.photos.length > 0" class="rentapp-room-photo">
      <img :src="content.photos[0].url" :alt="content.photos[0].name" width="186" height="186" class="" />
    </div> -->
    <div class="rentapp-room-content">
      <div class="rentapp-room-name">{{ content.title }}</div>
      <div class="rentapp-price">
        {{ content.currency || 'MYR' }} {{ content.rental || 0 }} {{ content.rent_payment_frequency || 'Monthly' }}
      </div>
      <div class="rentapp-location">{{ content.address.city }}, {{ content.address.state.name }}</div>
      <div class="rentapp-status">{{ content.tags.join('•') || '' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingBaseInfo',
  props: {
    content: { type: Object, default: () => {} }
  }
}
</script>
<style lang="scss">
.rentapp-room-info {
  padding: 0 0 25px 0;
  @include flex(flex-start);
  .rentapp-room-content {
    flex: 1;
  }
  .rentapp-room-name {
    font-weight: bold;
    font-size: $text-xl;
    color: $theme-color;
  }
  .rentapp-price {
    font-weight: bold;
    font-size: $text-large;
    color: #000;
  }
  > div {
    padding: 3px 0;
    color: $light-color;
  }
}
</style>
