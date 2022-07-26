<script>
	import Signature from './Signature.svelte'

  export let msg
  export let displayAuthor = true
  
  let isAuthor

  let USER_ID = 1 // TODO: move to store

  $: isAuthor = msg.authorId === USER_ID
</script>

<div class="msg text-white {isAuthor ? 'msg-author justify-end' : 'msg-regular'}">
  <div>
    <div class="msg-content rounded">
      {@html msg.content}
    </div>
    {#if displayAuthor}
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
    margin: 0.3vw;
    padding: 0.5vw 1.2vw;
    max-width: 25vw;
    min-width: 10vw;
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