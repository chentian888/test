<template>
  <div class="rentapp-mobile-price">
    <div class="rentapp-mobile-price__left">
      <div class="rentapp-mobile-price_total">TOTAL MOVE IN COST {{ currency }} {{ fee }}</div>
    </div>
    <div :class="['rentapp-mobile-price__action', { active: agree }]" @click="submit">Confirm And Pay</div>
  </div>
</template>

<script>
export default {
  name: 'MobileConfirmBar',
  props: {
    currency: { type: String, default: () => '' },
    fee: { type: [Number, String], default: () => 0 },
    agree: { type: [Number, Boolean], default: () => 0 }
  },
  data: () => {
    return {}
  },
  computed: {},
  methods: {
    submit() {
      if (!this.agree) {
        this.snackbar = true
        return
      }
      this.$emit('submit')
    }
  }
}
</script>

<style lang="scss">
.rentapp-mobile-price {
  @include flex(space-between);
  padding: 10px 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  background: #fff;
  box-shadow: 0 0 10px #eae8e8;
  .rentapp-mobile-price__left {
    flex: 1;
  }
  .rentapp-mobile-price_total {
    font-weight: bold;
    font-size: 12px;
  }
  .rentapp-mobile-price__action {
    margin: 0 auto;
    height: 40px;
    width: 145px;
    @include flex();
    padding: 0 20px;
    background-color: #f9f8fd;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
    color: #abacb0;
    cursor: pointer;
    transition: all 0.3s;
    &.active {
      background-color: #0379b7;
      color: #fff;
    }
  }
}
</style>
