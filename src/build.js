import MsgComponent from './layer/msg';

/**
 * 该方法负责创建对应的模板
 */
let layer = {
  msg(options) {
    console.log('build msg');
    
    let msg = new this.Msg({
      el: document.createElement('div'),
    })
    //将options的值赋予vue实例
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        const element = options[key];
        msg[key] = element;
      }
    }
    document.body.appendChild(msg.$el);
  },
  alert(options) {

  }
}

const temp = {
  install(Vue, options) {
    layer.Msg = Vue.extend(MsgComponent);

    Vue.prototype.$layer = layer;

    // Vue.component(App.name, App) // vuePayKeyboard.name 组件的name属性
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(temp);
}
// 作者：Y2sh
// 链接：http://www.imooc.com/article/19691
// 来源：慕课网
// 本文原创发布于慕课网 ，转载请注明出处，谢谢合作

// 第二种方法
// scroll.install = Vue => Vue.component(scroll.name, scroll);


export default temp;
