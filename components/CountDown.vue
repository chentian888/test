<template>
  <div>
    <v-btn rounded block :disabled="!canClick" color="primary" @click="validate"> {{ content }}</v-btn>
    <v-snackbar v-model="sendSuccess" color="success" top :timeout="4500">verification code has been sent</v-snackbar>
  </div>
</template>

<script>
// import { isPhone } from '~/utils/validate'
export default {
  name: 'CountDown',
  components: {},
  props: {
    prefix: { type: String, default: '' },
    phone: { type: String, default: '' }
  },
  data() {
    return { content: 'Send Code', totalTime: 60, canClick: true, sendSuccess: false }
  },
  computed: {},
  created() {},
  methods: {
    validate() {
      this.$emit('validate')
    },
    send() {
      const { prefix, phone } = this
      if (!this.canClick) return
      // check phone number
      if (!prefix || !phone) return
      this.sendOtpCode()
      this.canClick = false
      this.content = this.totalTime + 's'
      const clock = setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's'
        if (this.totalTime < 0) {
          clearInterval(clock)
          this.content = 'Send Code'
          this.totalTime = 60
          this.canClick = true
        }
      }, 1000)
    },
    // send otp code
    async sendOtpCode() {
      try {
        const secret = await this.$recaptcha.execute()
        const { token } = await this.$api.rentapp.otp({
          case: 'booking',
          type: 'booking_applicant',
          method: 'phone',
          identifier: `${this.prefix}${this.phone}`,
          secret
        })
        this.sendSuccess = true
        // this.form.otp_token = token
        this.$emit('update:token', token)
      } catch (error) {
        this.showErrorDialog(error)
      }
    }
  }
}
</script>
