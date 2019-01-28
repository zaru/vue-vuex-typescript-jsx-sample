import { Component, Prop, Vue } from 'vue-property-decorator';
import {CreateElement, VNode} from "vue";

@Component
export default class HelloWorld extends Vue {
  @Prop(String) msg!: string

  public render(h: CreateElement): VNode {
    return <div><h1>{this.msg}</h1></div>
  }
}
// import Vue from 'vue'
// export default Vue.extend({
//   props: ["msg"],
//
//   render() {
//     return <span>msg</span>
//   }
// })
