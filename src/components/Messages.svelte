<script>
	import Message from './Message.svelte';
  export let chatMessages
</script>

<div class="msg-container">
  {#each chatMessages as msg}
    <Message {msg} />
  {/each}
</div>

<style>
  .msg-container {
    
  }
</style>