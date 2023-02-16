<template>
  <div>
    <div class="rentapp-payment-successful">
      <v-container>
        <div class="rentapp-pay-icon">
          <img :src="require(`~/assets/img/${is_success === '1' ? 'success' : 'failure'}.svg`)" alt="" />
        </div>
        <p class="rentapp-pay-title">Payment {{ is_success === '1' ? 'Successful' : 'Failed' }}</p>
        <p v-if="is_success === '1'" class="rentapp-pay-desc">
          Your booking was successful. We will process the tenancy agreement.<br />
          An email confirmation will be sent to email {{ email }}.
        </p>
        <p v-if="is_success === '0'" class="rentapp-pay-desc">
          Sorry. We encounter an error while processing your payment.<br />
          Please try again later.
        </p>
        <p class="rentapp-pay-tip">Click <NuxtLink :to="`/details/${booking_id}`">here</NuxtLink> to view your booking details.</p>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirMation',
  asyncData({ query }) {
    return { ...query }
  },
  data: () => {
    return {
      query: {}
    }
  },
  created() {
    this.query = this.$route.query
  }
}
</script>
<style lang="scss">
.rentapp-payment-successful {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 30px;
  width: 50%;
  margin: 30px auto 0 auto;
  border-radius: 5px;
  border: 1px solid rgb(229, 231, 235);
  text-align: center;
  .rentapp-pay-title {
    font-size: 20px;
    font-weight: bold;
  }
}
@media (max-width: 960px) {
  .rentapp-payment-successful {
    width: 90%;
  }
}
</style>
