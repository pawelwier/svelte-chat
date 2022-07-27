<script>
  import { createEventDispatcher } from 'svelte';
 	import { fade } from 'svelte/transition'
	import Signature from './Signature.svelte'

  const dispatch = createEventDispatcher()

  let USER_ID = 1 // TODO: move to store
  
  export let msg
  export let messagesSameAuthor

  let isAuthor
  
  $: isAuthor = msg.authorId === USER_ID
  $: [prev, next] = [messagesSameAuthor.prev, messagesSameAuthor.next]
</script>

<div
  transition:fade="{{ duration: 300 }}"
  class="msg text-white {isAuthor ? 'msg-author justify-end' : 'msg-regular'}"
  on:contextmenu|preventDefault={e => dispatch('showContextMenu', e)}
>
  <div>
    <div class="msg-content {next ? 'mb-0' : 'mb-1'} {!next && 'rounded-b-lg'} {!prev && 'rounded-t-lg'}">
      {@html msg.content}
    </div>
    {#if !next}
    <div class="author relative bottom-2 left-6 rounded-lg rounded-t-none">
      <Signature 
        {isAuthor}
        createdAt={msg.createdAt}
        authorId={msg.authorId}
      />
    </div>
    {/if}
  </div>
</div>

<style>
  .msg {
    display: flex;
  }
  
  .msg-content {
    padding: 0.5vw 1.2vw;
    max-width: 25vw;
    min-width: 12vw;
  }

  .msg-author .msg-content,
  .msg-author .author {
    background-color: rgb(96, 96, 158);
  }
  
  .msg-regular .msg-content,
  .msg-regular .author {
    background-color: rgb(119, 119, 167);
  }

  .author {
    width: 8.2vw;
  }

  :global(.user-marked) {
    font-weight: 900;
  }

  :global(.user-marked:hover) {
    cursor: pointer;
  }
</style>