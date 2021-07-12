<template>
  <div>
    <div class="donation-header">
      <div class="container mx-auto px-4">
        <span class="font-medium text-xl">Merhaba</span> <br />
        <span class="text-5xl font-semibold mt-4 block">John Doe</span>
      </div>
    </div>
    <div class="container mx-auto px-4 -mt-10">
      <div class="flex space-x-10">
        <div class="rounded-md p-6 w-1/4 bg-white custom-shadow">
          <router-link
            to="/"
            class="font-medium btn btn-outline hover:text-white w-full"
          >
            <IconDonation class="h-4 mr-2" />
            <span>Bağışlarım</span>
          </router-link>
        </div>
        <div class="bg-white rounded-md w-full custom-shadow">
          <div class="font-semibold text-2xl border-b border-gray-100 p-8 mb-8">
            Bağışlarım
          </div>
          <div class="px-8">
            <div
              class="
                cursor-pointer
                border border-gray-200
                rounded-lg
                p-4
                mb-4
                transition
                flex
                items-center
                hover:custom-shadow
              "
            >
              <div class="avatar-group -space-x-6">
                <div class="avatar border-gray-200">
                  <div class="w-12 h-12">
                    <img
                      src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
                    />
                  </div>
                </div>
                <div class="avatar border-gray-200">
                  <div class="w-12 h-12">
                    <img
                      src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
                    />
                  </div>
                </div>
              </div>
              <div class="ml-8">
                <div class="text-gray-400 text-sm font-medium">
                  Makbuz No:
                  <span class="text-primary-black text-base font-bold"
                    >34324</span
                  >
                </div>
                <div>1 Temmuz Per, 15:30</div>
              </div>
              <div class="text-green-700 text-2xl font-bold ml-auto">
                25,24₺
              </div>
              <button
                class="
                  bg-gray-200
                  rounded-full
                  h-10
                  w-10
                  grid
                  place-items-center
                  ml-4
                "
              >
                <IconArrowDown class="h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.donation-header {
  @apply text-white py-28;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.421)
    ),
    url("https://images.unsplash.com/photo-1612729875065-1385f02852ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2366&q=80");
  background-size: cover;
  background-position: center;
}
</style>
