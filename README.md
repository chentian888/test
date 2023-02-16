# booking

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

### `api`
[general/phone-number-prefix](https://staging-api.ibilik.com/general/phone-number-prefix)
[general/race](https://staging-api.ibilik.com/general/race)
[general/gender](https://staging-api.ibilik.com/general/gender)
[rent-application/listing/:id](https://staging-api.ibilik.com/rent-application/listing/9c9982d6-8357-4579-9006-4953f37a32d6)
[otp](https://staging-api.ibilik.com/otp)
[rent-application/booking](https://staging-api.ibilik.com/rent-application/booking/e71ba883-f660-4dcc-9942-f329bd5d5504)
```json
{
  "listing_id": "4fc44354-fe2b-4635-858b-6edd9910c777",
  "booking_date_from": "2022-07-27",
  "booking_date_to": "2022-07-28",
  "applicant_id_type": "Passport Number",
  "applicant_id_value": "A00000000",
  "applicant_phone_number": "+60162118847",
  "applicant_email": "chentian.ct@qq.com",
  "applicant_name": "chentian",
  "applicant_document_front": "",
  "applicant_document_back": "",
  "otp_token": "HoehNit1J16SKpFi7WP3QGRPLSoVLWTYhAZdXZy8POwmLAizddzhM1LW24gks03k",
  "otp": "000000",
  "secret": "03ANYolqs_WF18s5sl2Apb3CHgSGtLMgMNUYNXbp_VJmYXb_tQhFpn5boBpYuqrWyhamN1Z5d-gDdl2F6tkUWpHU3UEThU4_9GazcfeFU3_-dKHi-OHPDdim60x3LxbBcov0uGT9h6dBgRHrdQdCX351FjBQEsmkgT7Ip3vjOigRte62Aen-ASOngFa8a8clGCAOU760RPVXlabaWkuE-c0D9m_vJWYP4IKyTVaB0UY4PajI7eT_Q5e0yjJ0APhrt8tO-DhRCB0jAFtUJT3QJ5BDpfQ1Bpydl-9ZhAE1L9gnmDzmS2FMqYym-4p4irYNKGL73wdk7PedhN5R6APWEz7o6zjU4gcjCWMJFptkkHjJ5AEor1yfrzbUrGvNWn3vBPSlnQwB8pXG5rYLPjgVH-hYKHCNr6sCsKPnEI7np6Jq-w5k3Wd6sQCLO9Ty8zgGm9xeoRPuw-bNGLdNOT88w3Om_e-acT5oNkWYWHbhgdwjoEpnK4JnrnvyW9e3O6wETA2lTdyv5hNTsylyvGvTGWsBSCLdKGFGdcqA",
  "referral_code": " XHYDNNQKLX43",
  "applicant_gender": "MALE",
  "applicant_race": "MALAY",
  "is_zero_deposit": 0
}

```

### `url`
[Booking Url](https://rent-staging.ibilik.com/booking/4fc44354-fe2b-4635-858b-6edd9910c777?referral_code=XHYDNNQKLX43&move_in=2022-08-26&move_out=2022-08-27)
[Payment Url](https://sandbox-payexapi.azurewebsites.net/Payment/Form/7e756d7850f240adb710ee609560cf13)
[Payment Successful](https://rent-staging.ibilik.com/booking/confirmation?is_success=1&status=success&message=Payment+processed+successfully%2C+thank+you%21&email=te%2A%2A%40gmail.com&booking_id=c79dfff3-ae9c-4729-8199-4acd442f1fae)
[details](https://rent-staging.ibilik.com/details/e71ba883-f660-4dcc-9942-f329bd5d5504)

```
162118847
000000

[Master Card Test Card]
Card No: 5453 0100 0009 5323
Exp. Date: MM/YY (any value)
CVV: 3 digits (any value)
OTP: secone1

```

### UI
[ibilik](https://lanhuapp.com/url/o12vZ)

```
密码: nsm3
```

