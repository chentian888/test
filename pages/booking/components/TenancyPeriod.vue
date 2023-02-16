<template>
  <div class="rentapp-buy-card">
    <div class="rentapp-buy-title">Tenancy Period</div>
    <div class="rentapp-buy-content">
      <v-row>
        <v-col cols="6">
          <v-menu
            ref="dateFrom"
            v-model="menuDateFrom"
            :close-on-content-click="false"
            :return-value.sync="dateFrom"
            transition="scale-transition"
            offset-y
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="dateFrom"
                label="Check in date"
                prepend-icon="event"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="dateFrom" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuDateFrom = false">Cancel</v-btn>
              <v-btn text color="primary" @click="saveFromDate">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="6">
          <v-select
            :items="tenurePeriodItems"
            label="Tenure period"
            item-text="label"
            item-value="value"
            outlined
            @change="change"
          ></v-select>
          <!-- <v-menu
            ref="dateTo"
            v-model="menuDateTo"
            :close-on-content-click="false"
            :return-value.sync="dateTo"
            transition="scale-transition"
            offset-y
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="dateTo"
                label="Tenure period"
                prepend-icon="event"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="dateTo" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuDateTo = false">Cancel</v-btn>
              <v-btn text color="primary" @click="saveToDate">OK</v-btn>
            </v-date-picker>
          </v-menu> -->
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TenancyPeriod',
  props: {
    from: { type: String, default: () => '' },
    to: { type: String, default: () => '' },
    items: { type: Array, default: () => [] },
    tenurePeriod: { type: [Number, String], default: () => 0 }
  },

  data: () => ({
    dateFrom: '',
    dateTo: '',
    menuDateFrom: false,
    menuDateTo: false
  }),
  computed: {
    // tranform data
    tenurePeriodItems() {
      return this.items.map((ele) => ({ label: `${ele} months`, value: ele }))
    }
  },
  created() {
    this.initDateRange()
  },
  methods: {
    // date from query
    initDateRange() {
      const { move_in = '', move_out = '' } = this.$route.query
      if (move_in) {
        this.dateFrom = move_in
      } else {
        this.dateFrom = this.$dayjs().format('YYYY-MM-DD')
      }
      if (move_out) {
        this.dateTo = move_out
      } else {
        this.dateTo = this.$dayjs().add(1, 'day').format('YYYY-MM-DD')
      }
      this.$emit('update:from', this.dateFrom)
      this.$emit('update:to', this.dateTo)
    },
    saveFromDate() {
      this.$refs.dateFrom.save(this.dateFrom)
      this.$emit('update:from', this.dateFrom)
    },
    saveToDate() {
      this.$refs.dateTo.save(this.dateTo)
      this.$emit('update:to', this.dateTo)
    },
    change(val) {
      this.$emit('update:tenurePeriod', val)
    }
  }
}
</script>
