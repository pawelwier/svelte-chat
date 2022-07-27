<script>
  import { createEventDispatcher } from 'svelte'
  import MessageMenu from './MessageMenu.svelte'

  const dispatch = createEventDispatcher()
  
  export let x
  export let y
  export let activeMsg

  let menu

	const onPageClick = (e) => {
		if (e.target === menu || menu.contains(e.target)) return
		dispatch('clickoutside')
	}
</script>

<svelte:body on:click={onPageClick} />
<div 
  class="fixed bg-white p-4" 
  style="left: {x}px; top:{y}px;"
  bind:this={menu}
>
  <MessageMenu
    {activeMsg} 
    on:delete
    />
</div>