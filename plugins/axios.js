export default ({ $axios, error: nuxtError, redirect, $config }) => {
  // $axios.defaults.baseURL = process.client ? $config[process.env.NODE_ENV].apiUrl : $config[process.env.NODE_ENV].apiUrl
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('Accept', 'application/json')
  $axios.defaults.timeout = 30000 // 30s
  // 请求拦截
  $axios.onRequest((config) => {
    // 本项目token 存储在vuex里面
    // const token = store.state.user.token
    // if (token) config.headers.token = token
    // eslint-disable-next-line
    // config.headers['Authorization'] = store.state.token
  })

  // 服务器返回异常拦截
  $axios.onError(() => {
    // nuxtError({
    //   statusCode: error.response.status,
    //   message: error.message
    // })
    // return Promise.resolve(false)
  })

  // 接口数据返回拦截
  $axios.onResponse((response) => {
    const data = response.data || {}
    if (data.code === 401) {
      redirect('/login')
    } else if (data.code !== 200) {
      redirect('/error')
    }

    return data.data
  })
}
