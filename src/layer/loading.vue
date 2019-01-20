<template>
  <div class="ink-loading-container" :style="{ display:show?'block':'none'}">
    
    <div class="ink-loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="ink-loading-mask" :style="{display:mask?'block':'none' ,opacity:opacity }"></div>
  </div>
</template>
<script>
export default {
  data() {
    return { show: false, opacity: 0.7, mask: false };
  },
  methods: {
    init(options) {
      if (typeof options.mask == "boolean") {
        this.mask = options.mask;
      } else if (typeof options.mask == "number") {
        this.mask = true;
        this.opacity = options.mask;
      }
      this.show = true;
    }
  }
};
</script>
<style>
.ink-loading-container{
    position: absolute;
    left:0;top:0;
    width: 100%;
    height: 0;
    text-align: center
}
.ink-loading-mask{
    background-color: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;left:0;
}
.ink-loading {
  width: 60px;
  height: 40px;
  margin: 0 auto;
  margin-top: 100px;
}
.ink-loading span {
  display: inline-block;
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: lightgreen;
  -webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load {
  0%,
  100% {
    height: 40px;
    background: lightgreen;
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: lightblue;
  }
}
.ink-loading span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
}
.ink-loading span:nth-child(3) {
  -webkit-animation-delay: 0.4s;
}
.ink-loading span:nth-child(4) {
  -webkit-animation-delay: 0.6s;
}
.ink-loading span:nth-child(5) {
  -webkit-animation-delay: 0.8s;
}
</style>
