<template>
  <RouterLink to="/" />
  <RouterLink :to="{ name: 'checkPage' }" />
  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>
