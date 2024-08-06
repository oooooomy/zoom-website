<template>
  <v-app-bar elevation="0">
    <template #title>
      <img alt="" class="pl-lg-16" src="/assets/logo.jpg" style="height: 50px;margin-top: 8px">
    </template>
    <template v-if="$vuetify.display.mdAndUp" #append>
      <div class="hidden-sm-and-down pr-lg-16">
        <v-btn
          v-for="item in menus"
          :key="item"
          class="text-body-1 blue-grey-darken-4"
          variant="text"
          @click="onClickMenu(item)"
        >
          {{ item.title }}
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
  // const menu = [
  //   'Home',
  //   'About',
  //   'Testimonials',
  //   'Work',
  //   'Team',
  //   'Features',
  //   'Pricing',
  // ]
  const menus = [
    {
      title: 'Home',
      path: '/',
    },
    // {
    //   title: 'Testimonials',
    //   path: '/testimonials',
    // },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Features',
      path: '/features',
    },
    {
      title: 'Products',
      path: '/products',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ]
  const onClickMenu = item => {
    console.log(item)
    router.push(item.path)
  }
</script>

<style scoped>
.v-toolbar {
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-bottom-width: 1px;
}
</style>
