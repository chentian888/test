<template>
  <div class="mt-10 rentapp-payment-detail">
    <v-container>
      <v-row align="center">
        <v-col cols="12" sm="5">
          <div class="tit">Booking Number: {{ msg.reference_number }}</div>
          <div class="tit">{{ msg.listing.title }}</div>
          <div>{{ msg.listing.address.city }}, {{ msg.listing.address.state.name }}</div>
          <div>{{ msg.listing.tags.join('•') || '' }}</div>
          <v-dialog v-model="dialog" width="720">
            <template #activator="{ on, attrs }">
              <!-- <div class="text-decoration-underline blue--text darken-2">View more</div> -->
              <v-btn text color="primary" v-bind="attrs" v-on="on"> View more </v-btn>
            </template>

            <v-card>
              <v-card-title primary-title>Payment details</v-card-title>
              <v-card-text>
                Please check the payment breakdown below. Should you have any inquiries, please contact the owner or agent before proceeding
                with your payment.
              </v-card-text>
              <v-list-item v-for="(item, index) in msg.fees.fees" :key="index">
                <v-list-item-content>
                  <h4>{{ item.product_name }}</h4>
                </v-list-item-content>
                <v-list-item-action>
                  <h4>{{ msg.currency || 'MYR' }} {{ item.amount }}</h4>
                </v-list-item-action>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content><h4>Total</h4></v-list-item-content>
                <v-list-item-action>
                  <h4>{{ msg.currency || 'MYR' }} {{ msg.fees.total }}</h4>
                </v-list-item-action>
              </v-list-item>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="7">
          <v-stepper v-model="e6" vertical>
            <div v-for="(item, index) in msg.progress" :key="index">
              <v-stepper-step :complete="item.is_completed" :step="item.step">
                <div>Step {{ item.step }}</div>
              </v-stepper-step>

              <v-stepper-content :step="e6">
                <div>{{ item.name }}</div>
                <div>
                  Status:
                  <span :class="[item.is_completed ? 'green--text' : 'grey--text']"
                    >{{ item.is_completed ? 'Completed' : 'Pending' }}
                  </span>
                  <v-btn v-if="item.name === 'Payment' && !item.is_completed && msg.payment_link" color="primary" small :href="msg.payment_link">
                    Pay now
                  </v-btn>
                </div>
                <div v-for="(text, ind) in item.description" :key="ind">{{ text }}</div>
              </v-stepper-content>
            </div>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const { bookingId } = params
    let msg = {}
    if (bookingId) {
      msg = await app.$api.rentapp.bookingDetail(bookingId)
    }

    // base select data
    return {
      msg
    }
  },
  data() {
    return {
      e6: 1,
      dialog: false
    }
  }
}
</script>
<style lang="scss">
.rentapp-payment-detail {
  .tit {
    font-size: 16px;
  }
}
</style>
