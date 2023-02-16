export default (axios) => ({
  // phone-number-prefix
  phonePrefix(params = {}) {
    return axios.get(`/general/phone-number-prefix`, { ...params })
  },

  // race
  race(params = {}) {
    return axios.get('/general/race', { ...params })
  },

  // gender
  gender(params = {}) {
    return axios.get('/general/gender', { ...params })
  },

  // booking page info
  info(id, params = {}) {
    return axios.get(`/rent-application/listing/${id}`, { ...params })
  },

  // otp
  otp(params = {}) {
    return axios.post('/otp', { ...params })
  },

  // submit Apply info
  submitApply(formData) {
    return axios.post('/rent-application/booking', formData, { 'Content-Type': 'application/x-www-form-urlencoded' })
  },

  // booking detail info
  bookingDetail(id, params = {}) {
    return axios.get(`/rent-application/booking/${id}`, { ...params })
  }
})
