<template>
  <v-card
    class="pa-16"
    flat
    image="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
  >
    <v-sheet class="text-center py-16">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <div class="text-h4 font-weight-medium text-left">
              Contact Us
            </div>

            <div class="text-body-1 text-medium-emphasis my-5 text-left">
              Contact Us regarding anything related to our company or products.
              We assure you that we will do our best to get back to you as soon as possible.
            </div>
            <v-banner
              class="my-4"
              color="deep-purple-accent-4"
              icon="mdi-map-marker"
              lines="two"
            >
              <v-banner-text>
                <div class="text-left">
                  Address
                </div>
                <div>
                  Suite No. 3617 c/o 16 Raffles Quay #16-02
                </div>
              </v-banner-text>

              <template #actions>
                <v-btn>Action</v-btn>
              </template>
            </v-banner>

            <v-banner
              class="my-4"
              color="error"
              icon="mdi-phone"
              lines="two"
            >
              <v-banner-text>
                <div class="text-left">
                  Phone
                </div>
                <div>
                  0817-000-1778
                </div>
              </v-banner-text>

              <template #actions>
                <v-btn>Call</v-btn>
              </template>
            </v-banner>

            <v-banner
              class="my-4"
              color="warning"
              icon="mdi-email"
              lines="three"
            >
              <v-banner-text>
                <div class="text-left">
                  Email Address
                </div>
                <div>
                  sales@curapalm.com
                </div>
              </v-banner-text>

              <template #actions>
                <v-btn>Send Message</v-btn>
              </template>
            </v-banner>

            <v-banner
              class="my-4"
              color="green"
              icon="mdi-clock-time-three"
              lines="two"
            >
              <v-banner-text>
                <div class="text-left">
                  Working Time
                </div>
                <div>
                  Monday - Friday : 9am - 6pm
                </div>
              </v-banner-text>

              <template #actions>
                <v-btn>Action</v-btn>
              </template>
            </v-banner>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-sheet
              class="text-center py-4"
            >

              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      bg-color="transparent"
                      flat
                      hide-details
                      label="Your Name*"
                      single-line
                      variant="outlined"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      bg-color="transparent"
                      flat
                      hide-details
                      label="Email Address*"
                      single-line
                      variant="outlined"
                    />
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      bg-color="transparent"
                      flat
                      hide-details
                      label="Phone Number*"
                      single-line
                      variant="outlined"
                    />
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      bg-color="transparent"
                      flat
                      hide-details
                      label="Option*"
                      single-line
                      variant="outlined"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      bg-color="transparent"
                      flat
                      hide-details
                      label="Your Message..."
                      lines="4"
                      variant="outlined"
                    />
                  </v-col>
                </v-row>
              </v-container>

              <v-btn
                class="px-10 text-body-1 mt-5"
                color="accent"
                flat
                height="55"
                text="GET IN TOUCH"
                @click="state.dialog = true"
              />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-card>

  <v-dialog
    v-model="state.dialog"
    width="600"
  >
    <v-sheet
      class="pa-4 text-center mx-auto"
      elevation="12"
      max-width="600"
      rounded="lg"
      width="100%"
    >
      <v-icon
        class="mb-5"
        color="success"
        icon="mdi-check-circle"
        size="112"
      />

      <h2 class="text-h5 mb-6">We have received your letter</h2>

      <p class="mb-4 text-medium-emphasis text-body-2">
        To see a report on this reconciliation, click <a class="text-decoration-none text-info" href="#">View reconciliation report.</a>

        <br>

        Otherwise, you're done!
      </p>

      <v-divider class="mb-4" />

      <div class="text-end">
        <v-btn
          class="text-none"
          color="success"
          rounded
          variant="flat"
          width="90"
          @click="state.dialog = false"
        >
          Done
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>
<script setup>
  import { reactive } from 'vue'

  const state = reactive({
    dialog: false,
  })
</script>
