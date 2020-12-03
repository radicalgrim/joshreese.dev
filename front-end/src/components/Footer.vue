<template>
<div class="footer">
  <div class="footer-item">
    <button type="button" class="btn btn-light">
      <a href="https://github.com/radicalgrim/joshreese.dev/tree/master/creative-project-vue" target="_blank">Find me on Github</a>
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  //props: {
  //  products: Array
  //}
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5c7daa;
  height: 200px;
}

.footer-item {
  display: flex;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
}
</style>
