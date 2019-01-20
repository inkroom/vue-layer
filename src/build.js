import MsgComponent from './layer/msg';
import LoadingComponent from './layer/loading';
/**
 * 该方法负责创建对应的模板
 */
let layer = {
  msg(options) {
    this._msg.init(options || {})
  },
  alert(options) {

  },
  loading(options) {
    this._loading.init(options || {});
  },
  close() {
    this._msg.show = false;
    this._loading.show = false;
  }
}

const temp = {
  install(Vue, options) {


    let Msg = Vue.extend(MsgComponent);

    var div = document.createElement('div');
    document.body.appendChild(div);

    let msg = new Msg({
      el: div,
    })

    layer._msg = msg;

    let Loading = Vue.extend(LoadingComponent);
    div = document.createElement('div');
    document.body.appendChild(div);

    let loading = new Loading({
      el: div,
    })

    layer._loading = loading;

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
