// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// export interface VuexTodo {
//   id: number
//   content: string
// }
//
// export interface State {
//   vuex_todos: VuexTodo[]
// }
//
// export const state: State = {
//   vuex_todos: []
// }
//
// export const getters = {
//   getVuexAllTodo: (state: State): VuexTodo[] => {
//     return state.vuex_todos
//   }
// }
//
// export default new Vuex.Store({ state, getters })


import Vue from 'vue'
import Vuex from 'vuex'

import { ITodo } from './store/todo'

Vue.use(Vuex)

export interface State {
  todo: ITodo
}
export default new Vuex.Store<State>({})
