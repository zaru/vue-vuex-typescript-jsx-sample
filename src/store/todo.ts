import { Module, VuexModule, getModule } from 'vuex-module-decorators'
import store from "@/store"

interface ModuleTodo {
  id: number
  content: string
}
export interface ITodo {
  module_todos: ModuleTodo[]
}

@Module({ dynamic: true, store, name: "counter", namespaced: true })
class Todo extends VuexModule implements ITodo{
  module_todos: ModuleTodo[] = []

  get getAllModuleTodo () {
    return this.module_todos
  }
}

export const storeTodo = getModule(Todo)
