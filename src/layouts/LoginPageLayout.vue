<template>
  <body>
    <div class="login-Style">
      <slot name="main"></slot>
    </div>
  </body>
</template>

<style scoped>
body {
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #ece9e6, #ffffff);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #333;
}
.login-Style {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  text-align: center;
  /* background-color: black; */
}
</style>
