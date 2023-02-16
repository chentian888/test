<template>
  <div class="rentapp-buy-card">
    <div class="rentapp-buy-title">ZERO Deposit</div>
    <div class="rentapp-buy-content">
      <v-checkbox v-model="is_zero_deposit" class="zero-check" label="I would like to rent with ZERO Deposit" @click="toggle"></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZeroDeposit',
  props: {
    flag: { type: Boolean, default: () => false }
  },
  data: () => ({
    is_zero_deposit: false
  }),
  methods: {
    toggle() {
      this.$emit('update:flag', this.is_zero_deposit)
    }
  }
}
</script>
<style lang="scss">
.zero-check {
  margin-top: 0 !important;
}
</style>
