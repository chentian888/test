const Mobile = [
  { country_code: 'CN', name: '中国', regExp: '^(\\+?0?86\\-?)?1[345789]\\d{9}$' },
  { country_code: 'TW', name: '台湾', regExp: '^(\\+?886\\-?|0)?9\\d{8}$' },
  { country_code: 'HK', name: '香港', regExp: '^(\\+?852\\-?)?[569]\\d{3}\\-?\\d{4}$' },
  { country_code: 'MY', name: '马来西亚', regExp: '^(\\+?6?0){1}(([145]{1}(\\-|\\s)?\\d{7,8})|([236789]{1}(\\s|\\-)?\\d{7}))$' },
  { country_code: 'PH', name: '菲律宾', regExp: '^(\\+?0?63\\-?)?\\d{10}$' },
  { country_code: 'TH', name: '泰国', regExp: '^(\\+?0?66\\-?)?\\d{10}$' },
  { country_code: 'SG', name: '新加坡', regExp: '^(\\+?0?65\\-?)?\\d{10}$' },
  { country_code: 'DZ', name: '阿尔及利亚', regExp: '^(\\+?213|0)(5|6|7)\\d{8}$' },
  { country_code: 'SY', name: '叙利亚', regExp: '^(!?(\\+?963)|0)?9\\d{8}$' },
  { country_code: 'SA', name: '沙特阿拉伯', regExp: '^(!?(\\+?966)|0)?5\\d{8}$' },
  { country_code: 'US', name: '美国', regExp: '^(\\+?1)?[2-9]\\d{2}[2-9](?!11)\\d{6}$' },
  { country_code: 'CZ', name: '捷克共和国', regExp: '^(\\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$' },
  {
    country_code: 'DE',
    name: '德国',
    regExp: '^(\\+?49[ \\.\\-])?([\\(]{1}[0-9]{1,6}[\\)])?([0-9 \\.\\-\\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$'
  },
  { country_code: 'DK', name: '丹麦', regExp: '^(\\+?45)?(\\d{8})$' },
  { country_code: 'GR', name: '希腊', regExp: '^(\\+?30)?(69\\d{8})$' },
  { country_code: 'AU', name: '澳大利亚', regExp: '^(\\+?61|0)4\\d{8}$' },
  { country_code: 'GB', name: '英国', regExp: '^(\\+?44|0)7\\d{9}$' },
  { country_code: 'CA', name: '加拿大', regExp: '^(\\+?1)?[2-9]\\d{2}[2-9](?!11)\\d{6}$' },
  { country_code: 'IN', name: '印度', regExp: '^(\\+?91|0)?[789]\\d{9}$' },
  { country_code: 'NZ', name: '新西兰', regExp: '^(\\+?64|0)2\\d{7,9}$' },
  { country_code: 'ZA', name: '南非', regExp: '^(\\+?27|0)\\d{9}$' },
  { country_code: 'ZM', name: '赞比亚', regExp: '^(\\+?26)?09[567]\\d{7}$' },
  { country_code: 'ES', name: '西班牙', regExp: '^(\\+?34)?(6\\d{1}|7[1234])\\d{7}$' },
  { country_code: 'FI', name: '芬兰', regExp: '^(\\+?358|0)\\s?(4(0|1|2|4|5)?|50)\\s?(\\d\\s?){4,8}\\d$' },
  { country_code: 'FR', name: '法国', regExp: '^(\\+?33|0)[67]\\d{8}$' },
  { country_code: 'IL', name: '以色列', regExp: '^(\\+972|0)([23489]|5[0248]|77)[1-9]\\d{6}' },
  { country_code: 'HU', name: '匈牙利', regExp: '^(\\+?36)(20|30|70)\\d{7}$' },
  { country_code: 'IT', name: '意大利', regExp: '^(\\+?39)?\\s?3\\d{2} ?\\d{6,7}$' },
  { country_code: 'JP', name: '日本', regExp: '^(\\+?81|0)\\d{1,4}[ \\-]?\\d{1,4}[ \\-]?\\d{4}$' },
  { country_code: 'NO', name: '挪威', regExp: '^(\\+?47)?[49]\\d{7}$' },
  { country_code: 'BE', name: '比利时', regExp: '^(\\+?32|0)4?\\d{8}$' },
  { country_code: 'PL', name: '波兰', regExp: '^(\\+?48)? ?[5-8]\\d ?\\d{3} ?\\d{2} ?\\d{2}$' },
  { country_code: 'BR', name: '巴西', regExp: '^(\\+?55|0)\\-?[1-9]{2}\\-?[2-9]{1}\\d{3,4}\\-?\\d{4}$' },
  { country_code: 'PT', name: '葡萄牙', regExp: '^(\\+?351)?9[1236]\\d{7}$' },
  { country_code: 'RU', name: '俄罗斯', regExp: '^(\\+?7|8)?9\\d{9}$' },
  { country_code: 'RS', name: '塞尔维亚', regExp: '^(\\+3816|06)[- \\d]{5,9}$' },
  { country_code: 'R', name: '土耳其', regExp: '^(\\+?90|0)?5\\d{9}$' },
  { country_code: 'VN', name: '越南', regExp: '^(\\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$' }
]

export default Mobile