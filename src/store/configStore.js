import { writable } from 'svelte/store'

export const configStore = writable({
  displayMsgDate: false
})