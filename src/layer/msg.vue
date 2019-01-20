<template>
  <!-- <div class="ink-msg-mask" :style="{ display:show?'block':'none'}" > -->
  <div class="ink-msg-container" :style="{ display:show?'block':'none'}">
    <div class="ink-msg-content" ref="content">{{msg}}</div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  created() {
    console.log("layer");
  },
  data() {
    return { msg: "原版", show: false, timeout: 2000, mask: 0 };
  },
  computed: {
    test() {
      //   console.log(this.$refs.content.offsetWidth);
    }
  },
  watch: {
    show(nv, ov) {
      if (nv) {
        let _this = this;
        // this.caculate();
        setTimeout(function() {
          _this.show = false;
        }, _this.timeout);
      }
    }
  },
  created() {
    console.log(this);
  },
  methods: {
    caculate() {
      // console.log(this.$refs.content.offsetWidth)
      //   this.$refs.content.style.left =
      //     (document.body.clientWidth - this.$refs.content.offsetWidth) / 2 + "px";
      //   this.$refs.content.style.opacity = "1";
    },
    init(options) {
      if (typeof options == "string") this.msg = options;
      else {
        for (const key in options) {
          if (options.hasOwnProperty(key)) {
            const element = options[key];
            this[key] = element;
          }
        }
      }
      this.show = true;
      this.caculate();
    }
  },
  mounted() {
    this.$refs.content.addEventListener("DOMSubtreeModified", function(event) {
      event.target.parentElement.style.left =
        (document.body.offsetWidth - event.target.parentElement.offsetWidth) /
          2 +
        "px";
    });
  }
};
</script>

<style>
.ink-msg-mask {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  text-align: center;
}
.ink-msg-container{
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 0;
    text-align: center;
}
.ink-msg-content {
  position: absolute;
  margin-top: 10%;
  display: inline-block;
  padding: 5px 10px;
  background-color: #1b1917;
  border-radius: 5px;
  border: chocolate solid 2px;
  opacity: 0.8;
  margin-left: -50px;
  /* TODO 没有完全居中，偏右 */
  /* border-rea */
}
</style>

