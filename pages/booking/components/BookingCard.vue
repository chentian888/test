<template>
  <div class="rentapp-price-card">
    <div class="rentapp-price__user">
      <div class="rentapp-price__user-avatar">
        <img :src="logo" :alt="content.profile.name" />
      </div>
      <div>
        <div class="rentapp-price__user-title">{{ content.title }}</div>
        <div class="rentapp-price__user-desc">Hosted by {{ content.profile && content.profile.name }}</div>
      </div>
    </div>
    <div class="payment-desc">
      <div class="p-title">MOVE IN COST</div>
      <div class="content">
        Please check the payment breakdown below. Should you have any inquiries, please contact the owner or agent before proceeding with
        your payment.
      </div>
    </div>
    <div class="rentapp-price-confirm">
      <div v-for="item in fee.fees" :key="item.product_name" class="rentapp-price-confirm__message-list">
        <div class="rentapp-price-confirm__message-item">
          <div><span v-if="item.payset === 0" class="red--text accent-4">*</span>{{ item.product_name }}</div>
          <div>{{ content.currency }} {{ item.amount }}</div>
        </div>
      </div>
      <div class="rentapp-price-confirm__message-result">
        <div>TOTAL MOVE IN COST</div>
        <div>{{ content.currency }} {{ fee.total || 0 }}</div>
      </div>
      <div class="pay-way">
        <v-radio-group :value="isPartial" @change="radioChange">
          <v-radio :value="0">
            <template #label>
              <div class="pay-way-flag">
                <v-tooltip bottom>
                  <template #activator="{ on }">
                    <div class="label" v-on="on">Pay in full</div>
                  </template>
                  Pay the total move in cost now and you are all set
                </v-tooltip>
                <div class="value">{{ content.currency }} {{ fee.total || 0 }}</div>
              </div>
            </template>
          </v-radio>
          <v-radio v-show="hasPartial" :value="1">
            <template #label>
              <div class="pay-way-flag">
                <v-tooltip bottom>
                  <template #activator="{ on }">
                    <div class="label" v-on="on">Pay partial</div>
                  </template>
                  Pay partial fee only and the rest move in cost pay only when you ready to move in
                </v-tooltip>

                <div class="value">{{ content.currency }} {{ totalFee || 0 }}</div>
              </div>
            </template>
          </v-radio>
        </v-radio-group>
      </div>

      <div
        v-if="content.id && !$vuetify.breakpoint.mobile"
        :class="['rentapp-price-confirm__buttons-agree', { active: agree }]"
        @click="submit"
      >
        Confirm And Pay
      </div>
    </div>
    <MobileConfirmBar
      v-if="$vuetify.breakpoint.mobile"
      :fee="isPartial ? totalFee : fee.total"
      :agree="agree"
      :currency="content.currency"
      @submit="submit"
    />
    <v-snackbar v-model="snackbar" color="error" top :timeout="3500">
      You must check I understand and agree in the bottom left corner
    </v-snackbar>
  </div>
</template>

<script>
import MobileConfirmBar from './MobileConfirmBar'
export default {
  name: 'BookingDetail',
  components: { MobileConfirmBar },
  props: {
    content: { type: Object, default: () => ({ profile: { logo: '' } }) },
    isPartial: { type: Number, default: () => 0 },
    zero: { type: [Number, Boolean], default: () => 0 },
    agree: { type: [Number, Boolean], default: () => 0 }
  },
  data: () => {
    return {
      snackbar: false
    }
  },
  computed: {
    fee() {
      return !this.zero ? this.content.fees || { fees: {} } : this.content.fees_zero_deposit
    },
    totalFee() {
      let total = 0
      const partial = this.fee.fees.filter((ele) => ele.payset === 0)
      total = partial.reduce((preVal, currVal) => {
        return preVal + currVal.amount
      }, 0)
      return total
    },
    hasPartial() {
      const res = this.fee.fees.filter((ele) => ele.payset === 1) || []
      return res.length > 0
    },
    logo() {
      return this.$store.state.user.logo
    }
  },
  methods: {
    submit() {
      if (!this.agree) {
        this.snackbar = true
        return
      }
      this.$emit('submit')
    },
    radioChange(val) {
      this.$emit('update:isPartial', val)
    }
  }
}
</script>
<style lang="scss">
.rentapp-price-card {
  box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.16);
  border-radius: 11px;
  padding: 24px 0;
  background-color: #fff;
  border-radius: 30px;
}
.rentapp-price__user {
  padding: 0 24px 24px 24px;
  @include flex(flex-start);
  .rentapp-price__user-avatar {
    @include flex();
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;

    margin-right: 24px;
    border: 1px solid #c9c9c9;
    img {
      object-fit: cover;
      max-width: 100%;
    }
  }
  .rentapp-price__user-title {
    height: 32px;
    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
    color: $theme-color;
  }
  .rentapp-price__user-desc {
    height: 18px;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
}
.rentapp-price-confirm {
  .rentapp-price-confirm__buttons-agree {
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
    &.active,
    &:hover {
      background-color: #0379b7;
      color: #fff;
    }
  }

  .rentapp-price-confirm__message-list {
    .rentapp-price-confirm__message-item {
      border-bottom: 1px solid #c9c9c9;
      padding: 0 24px;
      height: 40px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      color: #000000;
    }
  }

  .rentapp-price-confirm__message-result {
    padding: 20px 24px 0 24px;
    // height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #000000;
  }
}
.payment-desc {
  padding: 10px 24px;
  border-top: 1px solid #c9c9c9;
  .p-title {
    font-size: 16px;
    font-weight: bold;
  }
  .content {
    color: $light-color;
  }
}
.pay-way {
  padding: 0 24px;
  .pay-way-flag {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #000;
    font-size: 14px;
    .value {
      font-weight: bold;
    }
  }
}
</style>
