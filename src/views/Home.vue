<template>
  <div class="home">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.content}}
      </li>
      <li v-for="todo in allTodo" :key="todo.id">
        {{todo.content}}
      </li>
      <li v-for="todo in localTodo" :key="todo.id">
        {{todo.content}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
//
// interface Todo {
//   id: number
//   content: string
// }
// interface Data {
//   todos: Todo[]
// }
// export default Vue.extend({
//   data ():Data {
//     return {
//       todos: []
//     }
//   },
//   computed: {
//     localTodo (): Todo[] {
//       return this.todos
//     }
//   },
//   methods: {
//     change: function () {
//     }
//   }
// })

import { Component, Provide, Vue } from 'vue-property-decorator';
// import { storeCounter } from '@/store/counter'

interface Todo {
  id: number
  content: string
}

@Component({})
export default class Home extends Vue {
  @Provide() todos: Todo[] = []

  get allTodo () {
    return []
    // return storeCounter.getAllModuleTodo
    // return this.$store.getters['getVuexAllTodo']
    // return this.$state.vuex_todos
  }
  get localTodo () {
    return this.todos
  }
}
</script>
