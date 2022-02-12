import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);

const state = {
  username:'',//登录用户名
  cartCount:0//购物车商品数量
}
export default new Vuex.Store({ //这里也是增强写法
  state,
  mutations,
  actions
});