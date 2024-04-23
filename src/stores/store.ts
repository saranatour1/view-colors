// stores/counter.js
import { defineStore } from 'pinia'
import { findColors } from '../utils/findColors';
type ColorsState = {
  colors: string[];
}

export const useColorsStore = defineStore('colors', {
  state: (): ColorsState => {
    return { colors: [] }
  },
  actions: {
    findMatches(value:string){
      this.colors = findColors(value);
    },
    set(val:string[]) {
      this.colors = val;
    },
  },
})