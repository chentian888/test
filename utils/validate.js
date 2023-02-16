export const isIdCard = (value) => {
  return /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(
    value
  )
}

export const isBankCard = (value) => {
  return /^[1-9]\d{9,29}$/.test(value)
}

export const isEmail = (value) => {
  return /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(value)
}

export const isCH = (value) => {
  return /^(?:[\u4E00-\u9FA5·]{2,16})$/.test(value)
}

export const isPhone = (value) => {
  return /^1[0-9]{10}$/.test(value)
}

export const isHttpLink = (value) => {
  return /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\\/]))?$/.test(value)
}

export const isNumber = (value) => {
  return /^\d+(\.\d+)?$/.test(value)
}

export const isInteger = (value) => {
  return /^\d+$/.test(value)
}

export const isAndroid = () => {
  const u = navigator.userAgent.toLowerCase()
  return /android/.test(u) || /linux/.test(u)
}

export const isIOS = () => {
  return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
}

export const isSpecialCharacter = (value) => {
  return /[`~!@#$%^&*()_\-+=<>?:"{}|,.\\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/.test(value)
}

export const isLoginPassword = (value) => {
  return /(?=.*[a-zA-Z])(?=.*[0-9]).{8,32}/.test(value)
}

export const isPayPassword = (value) => {
  return /^[0-9]{6}$/.test(value)
}
