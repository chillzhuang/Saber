import MessageConstructor from './index.vue';
import { createVNode, render } from 'vue';
export default (function () {
  return (opts = {}) => {
    let options = {
      app: opts
    }
    const parent = document.createElement('div')
    let instance = createVNode(MessageConstructor, options)
    instance.props.onDestroy = () => {
      render(null, parent)
    }
    render(instance, parent)
    document.body.appendChild(parent.firstElementChild);
    return instance;
  }
})();