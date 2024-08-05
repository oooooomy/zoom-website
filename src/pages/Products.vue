<template>
  <v-container>
    <v-card
      class="mx-auto pt-5"
      variant="flat"
    >
      <!--      <v-toolbar>-->
      <!--        <v-toolbar-title>Filter results</v-toolbar-title>-->
      <!--      </v-toolbar>-->

      <v-card-text>
        <h2 class="text-h6 mb-2">Choose amenities</h2>

        <v-chip-group
          v-model="state.amenities"
          column
          multiple
        >
          <v-chip
            filter
            text="Elevator"
            variant="outlined"
          />

          <v-chip
            filter
            text="Washer / Dryer"
            variant="outlined"
          />

          <v-chip
            filter
            text="Fireplace"
            variant="outlined"
          />

          <v-chip
            filter
            text="Wheelchair access"
            variant="outlined"
          />

          <v-chip
            filter
            text="Dogs ok"
            variant="outlined"
          />

          <v-chip
            filter
            text="Cats ok"
            variant="outlined"
          />
        </v-chip-group>
      </v-card-text>

      <v-card-text>
        <h2 class="text-h6 mb-2">Choose neighborhoods</h2>

        <v-chip-group
          v-model="state.neighborhoods"
          column
          multiple
        >
          <v-chip
            filter
            text="Snowy Rock Place"
            variant="outlined"
          />

          <v-chip
            filter
            text="Honeylane Circle"
            variant="outlined"
          />

          <v-chip
            filter
            text="Donna Drive"
            variant="outlined"
          />

          <v-chip
            filter
            text="Elaine Street"
            variant="outlined"
          />

          <v-chip
            filter
            text="Court Street"
            variant="outlined"
          />

          <v-chip
            filter
            text="Kennedy Park"
            variant="outlined"
          />
        </v-chip-group>
      </v-card-text>
    </v-card>
    <v-divider />
    <v-row class="my-3">
      <v-col
        v-for="item in 8"
        :key="item"
        class="d-flex text-left"
        cols="12"
        md="4"
      >
        <v-card
          class="mx-auto my-3"
          :disabled="state.loading"
          :loading="state.loading"
          max-width="374"
        >
          <template #loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            />
          </template>

          <v-img
            cover
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          />

          <v-card-item>
            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-subtitle>
              <span class="me-1">Local Favorite</span>

              <v-icon
                color="error"
                icon="mdi-fire-circle"
                size="small"
              />
            </v-card-subtitle>
          </v-card-item>

          <v-divider class="mx-4 mb-1" />

          <v-card-title>Tonight's availability</v-card-title>

          <div class="px-4 mb-2">
            <v-chip-group v-model="state.selection" selected-class="bg-deep-purple-lighten-2">
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </div>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { reactive } from 'vue'
  const state = reactive({
    loading: false,
    selection: 1,
    amenities: [1, 4],
    neighborhoods: [1],
  })

  // const reserve = () => {
  //   state.loading = true
  //
  //   setTimeout(() => (state.loading = false), 2000)
  // }
</script>

<style scoped>

</style>
