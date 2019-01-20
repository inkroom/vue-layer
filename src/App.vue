<template>
  <div id="app">
    <button @click="msg">msg</button>
    <button @click="loading">loading</button>
    <button @click="close">close</button>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    msg() {
      this.$layer.msg("测试下消息");
    },
    loading() {
      this.$layer.loading();
    },
    close() {
      this.$layer.close();
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
