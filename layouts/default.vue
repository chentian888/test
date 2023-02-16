<template>
  <div class="skyworld-app-page">
    <v-app>
      <v-main>
        <div class="skyworld-app-body skyworld-layout">
          <Nuxt />
        </div>
      </v-main>

      <div class="skyworld-app-footer"></div>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped></style>
