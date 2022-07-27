<script>
	import Message from './Message.svelte';

  export let chatMessages
  
  let showContextMenu
  $: pos = { x: 0, y: 0 };

  const toggleContextMenu = (e) => {
    const event = e.detail
    showContextMenu = !showContextMenu
    pos = { x: event.clientX, y: event.clientY }; // TODO: move to component
    console.log(pos)
  }

  const messagesSameAuthor = (index) => {
    let next
    let prev
    const nextMessage = chatMessages[index + 1]
    const prevMessage = chatMessages[index - 1]
    if (!nextMessage) {
      next = false
    } else {
      next = chatMessages[index].authorId === nextMessage.authorId
    }
    if (!prevMessage) {
      prev = false
    } else {
      prev = chatMessages[index].authorId === prevMessage.authorId
    }
    return {
      prev,
      next
    }
  }
</script>

{#each chatMessages as msg, index (msg.id)}
  <Message
    {msg}
    messagesSameAuthor={messagesSameAuthor(index)}
    on:showContextMenu={toggleContextMenu}
  />
{/each}

{#if showContextMenu}
  <div class="fixed bg-white p-4" style="left: {pos.x}px; top:{pos.y}px;">
    {pos.x} {pos.y}
  </div>
{/if}