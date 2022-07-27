<script>
  import { fade } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let USER_ID = 1 // TODO: move to store

  export let activeMsg

  const onDelete = () => {
    dispatch('delete', activeMsg.id)  
  }

  $: isAuthor = activeMsg.authorId === USER_ID
</script>
<div transition:fade={{ duration: 150 }}>
  {#if isAuthor}
    <button>Edit</button>
    <button on:click={onDelete}>Delete</button>
  {/if}
  <button>Reply</button>
</div>