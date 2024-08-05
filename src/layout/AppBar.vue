<template>
  <v-app-bar>
    <template #title>
      <div class="d-inline-flex align-center text-h4 font-weight-bold my-5 text-primary">
        <v-icon icon="$vuetify" start />
        Zoom Machine
      </div>
    </template>

    <template v-if="$vuetify.display.mdAndUp" #append>
      <div class="hidden-sm-and-down">
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
