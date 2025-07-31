<!-- CheckPageLayout -->
<template>
  <header>
    <div class="header-layout">
      <slot name="header"></slot>
    </div>
  </header>
  <main>
    <div class="body-layout">
      <slot name="main"></slot>
    </div>
  </main>
</template>

<style scoped>
.header-layout {
  display: flex;
  padding: 16px var(--spacing-page-padding, 32px);
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: #cafff9;
}
.body-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
}
</style>
