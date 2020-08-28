import Vue from 'vue'
import Vuex from 'vuex'
import type from './mutationsType'

Vue.use(Vuex)

export default new Vuex.Store({
    // 状态值
    state: {
        count: 1000
    },
    // 计算属性 可有参数 只可以取，不能改变状态值
    getters: {
        countPlus(state) {
            return state.count * 2
        }
    },
    // 通过方法改变状态值
    mutations: {
        [type.CHANGE_COUNT](state, count) {
            state.count = state.count + count
        },
        [type.CHANGE_NUM](state, payload) {
            state.count = state.count + payload.count
        }
    },
    // 异步处理方法
    actions: {
    }
})
