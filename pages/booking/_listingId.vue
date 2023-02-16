<template>
  <div class="skyworld-space-booking">
    <TopNav title="Booking" />
    <img src="@/assets/img/logo.png" alt="" class="skyworld-space-logo" />
    <div class="skyworld-booking-content">
      <BookingBaseInfo :content="msg" />
      <v-divider></v-divider>
      <TenancyPeriod
        :items="msg.configuration.tenure_period"
        :from.sync="form.booking_date_from"
        :to.sync="form.booking_date_to"
        :tenure-period.sync="form.tenure_period"
      />
      <div v-if="form.tenure_period" class="rentapp-tenure-text">Your tenancy will end at {{ tenancyEndTime }}</div>
      <v-divider></v-divider>
      <ZeroDeposit v-if="msg.configuration.is_allow_zero_deposit" :flag.sync="form.is_zero_deposit" />
      <v-divider v-if="msg.configuration.is_allow_zero_deposit"></v-divider>
      <div class="rentapp-buy-card">
        <div class="rentapp-buy-title">Please fill in the form</div>
        <div class="rentapp-buy-content">
          <form ref="form">
            <v-text-field
              v-model.trim="$v.form.applicant_name.$model"
              :error-messages="applicantNameErrors"
              label="Name"
              outlined
            ></v-text-field>
            <v-row :no-gutters="$vuetify.breakpoint.mobile">
              <v-col cols="4" sm="3">
                <v-select v-model="form.applicant_id_type" label="Id type" :items="idType" outlined></v-select>
              </v-col>
              <v-col cols="8" sm="9">
                <v-text-field
                  v-model.trim="$v.form.applicant_id_value.$model"
                  :error-messages="applicantIdValueErrors"
                  label="Id number"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-select v-model="form.applicant_race" label="Race" :items="race" outlined></v-select>
            <v-select v-model="form.applicant_gender" label="Gender" :items="gender" outlined></v-select>
            <v-text-field
              v-model.trim="$v.form.applicant_email.$model"
              :error-messages="applicantEmailErrors"
              label="Email"
              outlined
            ></v-text-field>
            <v-row :no-gutters="$vuetify.breakpoint.mobile">
              <v-col cols="4">
                <v-select v-model="form.phone_number_prefix" label="Prefix" :items="phonePrefix" outlined></v-select>
              </v-col>
              <v-col cols="20">
                <v-text-field
                  v-model.trim="$v.form.applicant_phone_number.$model"
                  :error-messages="applicantPhoneNumberErrors"
                  label="Phone number"
                  outlined
                >
                  <CountDown
                    slot="append"
                    ref="countDown"
                    :token.sync="form.otp_token"
                    :prefix="form.phone_number_prefix"
                    :phone="form.applicant_phone_number"
                    @validate="triggerOptValidate"
                  />
                </v-text-field>
              </v-col>
            </v-row>
            <v-text-field v-model.trim="$v.form.otp.$model" :error-messages="otpErrors" label="Verification code" outlined></v-text-field>
            <h3><p>Supporting Documents</p></h3>
            <p>1. Make sure IC is clear and readable</p>
            <p>2. Avoid flash or glare</p>
            <i>Example</i>
            <v-row>
              <v-col cols="24">
                <v-card outlined>
                  <img :src="icFrontBase64 ? icFrontBase64 : require('~/assets/img/ic_front_sample.png')" class="img" alt="" />
                </v-card>
              </v-col>
              <v-col cols="24">
                <v-card outlined>
                  <img :src="icBackBase64 ? icBackBase64 : require('~/assets/img/ic_back_sample.png')" class="img" alt="" />
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="24">
                <v-file-input
                  v-model="$v.form.applicant_document_front.$model"
                  :error-messages="icFrontErrors"
                  label="Upload IC Front"
                  accept="image/*"
                  outlined
                  prepend-icon=""
                  prepend-inner-icon="mdi-tray-arrow-up"
                  @change="icFrontSelect"
                >
                </v-file-input>
              </v-col>
              <v-col cols="24">
                <v-file-input
                  v-model="$v.form.applicant_document_back.$model"
                  :error-messages="icBackErrors"
                  label="Upload IC Back"
                  accept="image/*"
                  outlined
                  prepend-icon=""
                  prepend-inner-icon="mdi-tray-arrow-up"
                  @change="icBackSelect"
                ></v-file-input>
              </v-col>
            </v-row>
          </form>
        </div>
      </div>

      <BookingCard :content="msg" :zero="form.is_zero_deposit" :is-partial.sync="form.is_pay_partial" :agree="agree" @submit="submit" />
      <Agreement :checked.sync="agree" />
      <v-snackbar v-model="showError" color="error" top :timeout="4500">
        {{ errorMsg }}
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import { required, maxLength, minLength, email, numeric, alphaNum } from 'vuelidate/lib/validators'
import BookingCard from './components/BookingCard'
import BookingBaseInfo from './components/BookingBaseInfo'
import TenancyPeriod from './components/TenancyPeriod'
import ZeroDeposit from './components/ZeroDeposit'
import Agreement from './components/Agreement'
// import CountDown from '~/components/CountDown'
import TopNav from '@/components/TopNav'
import Mobile from '~/utils/mobile'

// setInteractionMode('eager')

export default {
  name: 'BookingDetail',
  components: { BookingCard, BookingBaseInfo, TenancyPeriod, ZeroDeposit, Agreement, TopNav },
  layout: 'default',
  async asyncData({ app, params, store }) {
    const { listingId } = params
    let msg = {}
    if (listingId) {
      // Request booking information if the parameter exists
      msg = await app.$api.rentapp.info(listingId)
    }

    // base select data
    const selectRace = await app.$api.rentapp.race()
    const selectGender = await app.$api.rentapp.gender()
    const selectPrefix = await app.$api.rentapp.phonePrefix()
    const prefix = selectPrefix.map((ele) => ({ text: ele.prefix + ' ' + ele.name, value: ele.prefix, ...ele }))
    const race = selectRace.map((ele) => ({ text: ele.name, value: ele.code }))
    const gender = selectGender.map((ele) => ({ text: ele.name, value: ele.code }))
    const idType = [
      { text: 'NRIC', value: 'NRIC' },
      { text: 'Passport Number', value: 'Passport Number' }
    ]

    store.commit('user/setLogo', (msg.profile.logo && msg.profile.logo.url) || require('~/assets/img/logo.png'))
    return {
      msg,
      phonePrefix: prefix,
      race,
      gender,
      idType
    }
  },
  // The validation method provided by the Vuelidate library
  validations() {
    // check the format of mobile phone number in most countries
    const phoneValidate = (value) => {
      const country = this.phonePrefix.find((ele) => ele.prefix === this.form.phone_number_prefix) || {}
      const countryMobile = Mobile.find((ele) => ele.country_code === country.country_code) || {}
      return countryMobile.regExp ? new RegExp(countryMobile.regExp).test(this.form.phone_number_prefix + value) : true
    }
    const rule = {
      applicant_name: { required },
      applicant_phone_number: { required, numeric, phoneValidate },
      applicant_email: { required, email },
      otp: { required },
      applicant_document_front: { required },
      applicant_document_back: { required }
    }
    if (this.form.applicant_id_type === 'NRIC') {
      rule.applicant_id_value = { required, alphaNum, minLength: minLength(12), maxLength: maxLength(12) }
    } else {
      rule.applicant_id_value = { required, alphaNum }
    }
    return { form: rule }
  },
  data: () => ({
    valid: true,
    optSendFail: false,
    files: [],
    agree: false,
    errorMsg: '',
    showError: false,
    icFrontBase64: '',
    icBackBase64: '',
    form: {
      listing_id: '',
      booking_date_from: '',
      booking_date_to: '',
      applicant_id_type: 'NRIC',
      applicant_id_value: '',
      phone_number_prefix: '+60',
      applicant_phone_number: '',
      applicant_email: '',
      applicant_name: '',
      applicant_document_front: null,
      applicant_document_back: null,
      otp_token: '',
      otp: '',
      secret: '',
      referral_code: '',
      applicant_gender: 'MALE',
      applicant_race: 'MALAY',
      is_zero_deposit: false,
      is_pay_partial: 0,
      tenure_period: 0
    }
  }),
  computed: {
    tenancyEndTime() {
      return this.$dayjs(this.form.booking_date_from).add(this.form.tenure_period, 'month').subtract(1, 'day').format('YYYY-MM-DD')
    },
    applicantNameErrors() {
      const errors = []
      if (!this.$v.form.applicant_name.$dirty) return errors
      !this.$v.form.applicant_name.required && errors.push('Name is required.')
      return errors
    },
    applicantEmailErrors() {
      const errors = []
      if (!this.$v.form.applicant_email.$dirty) return errors
      !this.$v.form.applicant_email.email && errors.push('Must be valid e-mail')
      !this.$v.form.applicant_email.required && errors.push('E-mail is required')
      return errors
    },
    applicantIdValueErrors() {
      const errors = []
      if (!this.$v.form.applicant_id_value.$dirty) return errors
      if (this.form.applicant_id_type === 'NRIC') {
        if (!this.$v.form.applicant_id_value.minLength || !this.$v.form.applicant_id_value.maxLength) {
          errors.push('NRIC length must be 12')
        }
      }
      !this.$v.form.applicant_id_value.alphaNum && errors.push('Accepts only alphanumerics')
      !this.$v.form.applicant_id_value.required && errors.push('ID is required')
      return errors
    },
    applicantPhoneNumberErrors() {
      const errors = []
      if (!this.$v.form.applicant_phone_number.$dirty) return errors
      !this.$v.form.applicant_phone_number.numeric && errors.push('Must be valid Phone number')
      !this.$v.form.applicant_phone_number.required && errors.push('Phone number is required')
      !this.$v.form.applicant_phone_number.phoneValidate && errors.push('The format of the mobile phone number is wrong')
      return errors
    },
    otpErrors() {
      const errors = []
      if (!this.$v.form.otp.$dirty) return errors
      !this.$v.form.otp.required && errors.push('Otp is required')
      return errors
    },
    icFrontErrors() {
      const errors = []
      if (!this.$v.form.applicant_document_front.$dirty) return errors
      !this.$v.form.applicant_document_front.required && errors.push('IC front is required')
      return errors
    },
    icBackErrors() {
      const errors = []
      if (!this.$v.form.applicant_document_back.$dirty) return errors
      !this.$v.form.applicant_document_back.required && errors.push('IC back is required')
      return errors
    }
  },
  created() {},
  mounted() {
    this.recaptchaInit()
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
  methods: {
    // recaptcha init
    async recaptchaInit() {
      try {
        await this.$recaptcha.init()
      } catch (e) {
        //
      }
    },
    submit() {
      this.$v.form.$touch()
      if (!this.$v.form.$invalid) {
        this.submitApply()
      }
    },

    clear() {
      // this.$refs.observer.reset()
    },

    // submit
    async submitApply() {
      const { form, msg } = this
      const { referral_code = '' } = this.$route.query
      try {
        const secret = await this.$recaptcha.execute()
        const params = {
          ...form,
          secret,
          listing_id: msg.id,
          referral_code,
          is_zero_deposit: form.is_zero_deposit ? 1 : 0,
          applicant_phone_number: form.phone_number_prefix + form.applicant_phone_number
        }
        const formData = new FormData()
        for (const key in params) {
          if (key !== 'phone_number_prefix') {
            formData.append(key, params[key])
          }
        }
        const data = await this.$api.rentapp.submitApply(formData)
        if (data && data.payment_link) {
          window.location.href = data.payment_link
        }
      } catch (e) {
        this.showErrorDialog(e.response.data.message)
        //  error
      }

      // window.location.href = 'https://sandbox-payexapi.azurewebsites.net/Payment/Form/7e756d7850f240adb710ee609560cf13'
    },

    triggerOptValidate() {
      this.$v.form.applicant_phone_number.$touch()
      const fail = this.$v.form.applicant_phone_number.$invalid
      if (!fail) {
        this.$refs.countDown.send()
      }
    },

    showErrorDialog(msg = '') {
      if (!msg) return
      this.errorMsg = msg
      this.showError = true
    },

    // file 2 base64
    file2Base64(file) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
          resolve(reader.result)
        }
      })
    },

    // IC Front
    async icFrontSelect() {
      if (this.form.applicant_document_front) {
        const img = await this.file2Base64(this.form.applicant_document_front)
        this.icFrontBase64 = img
      } else {
        this.icFrontBase64 = ''
      }
    },

    // IC Back
    async icBackSelect() {
      if (this.form.applicant_document_back) {
        const img = await this.file2Base64(this.form.applicant_document_back)
        this.icBackBase64 = img
      } else {
        this.icBackBase64 = ''
      }
    }
  }
}
</script>

<style lang="scss">
.skyworld-space-booking {
  background: url('@/assets/img/head-bg.png') center top / 100% auto no-repeat;
  padding-top: 48px;
}
.skyworld-booking-content {
  padding: 30px 23px;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
}
.skyworld-space-logo {
  width: 103px;
  height: 52px;
  margin: 26px auto;
  display: block;
}
.rentapp-buy-card {
  padding: 20px 0;
  .rentapp-buy-title {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 15px;
  }
}
.rentapp-buy-agree {
  font-weight: bold;
  color: #939ca2;
  &.active {
    color: #000;
  }
}
.rentapp-tenure-text {
  padding-bottom: 20px;
  margin-top: -15px;
}
</style>
