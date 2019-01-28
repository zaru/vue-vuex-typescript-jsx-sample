import { VNode, CreateElement } from 'vue'
import { Component, Vue } from 'vue-property-decorator'
import { storeTodo } from '@/store/todo'
import HelloWorld from '@/components/HelloWorld.vue'

@Component
export default class Todo extends Vue {
  message: string = 'test message'

  get allTodo () {
    return storeTodo.getAllModuleTodo
  }

  RenderTodo () {
    return storeTodo.getAllModuleTodo.map( todo =>
      <li>{todo.content}</li>
    )
  }

  public render(h: CreateElement): VNode {
    return <div>todo <HelloWorld msg={this.message} /><ul>{this.RenderTodo()}</ul></div>
  }
}
