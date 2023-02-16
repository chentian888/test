<template>
  <div>
    <v-checkbox v-model="agree" type="checkbox" hide-details outlined @click="toggle">
      <template #label>
        <div class="rentapp-buy-agree">
          I understand and agree to give ibilikPlus and CTOS the consent to process my personal data as per the PDPA Act.
        </div>
      </template>
    </v-checkbox>
    <div class="rentapp-privacy">
      This site is protected by reCAPTCHA and the Google
      <a target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a> and
      <a target="_blank" href="https://policies.google.com/terms">Terms of Service</a> apply.
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgreeMent',
  props: {
    checked: { type: Boolean, default: () => false }
  },
  data: () => ({
    agree: false
  }),
  methods: {
    toggle() {
      this.$emit('update:checked', this.agree)
    }
  }
}
</script>
