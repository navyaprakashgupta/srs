<template>
    <v-breadcrumbs :items="items" divider="<">
      <template v-slot:item="{ item }">
        <router-link
          :to="item.to"
          :class="{'active-breadcrumb': isActive(item)}"
          class="breadcrumb-link"
        >
          {{ item.text }}
        </router-link>
      </template>
    </v-breadcrumbs>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
    methods: {
      isActive(item) {
        return this.$route.path === item.to;
      },
    },
  };
  </script>
  