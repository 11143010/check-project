<template>
  <div class="check-style">
    <slot name="content"></slot>
  </div>
</template>

<style scoped>
.check-style {
  display: flex;
  width: 640px;
  padding: var(--spacing-page-padding, 32px);
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-gap-md, 16px);
  align-self: stretch;
}
</style>
