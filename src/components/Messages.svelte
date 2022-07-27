<script>
	import ContextMenu from './ContextMenu.svelte';
  import Message from './Message.svelte'

  export let chatMessages // TODO: move to store
  
  let showContextMenu
  let activeMsg
  
  const displayContextMenu = (e, msg) => {
    const event = e.detail
    showContextMenu = true
    pos = { x: event.clientX, y: event.clientY }; // TODO: move to component
    activeMsg = msg
  }

  const onDelete = (e) => {
    chatMessages = chatMessages.filter(({ id }) => id !== e.detail)
    showContextMenu = false
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
  
  $: pos = { x: 0, y: 0 };
</script>

{#each chatMessages as msg, index (msg.id)}
  <Message
    {msg}
    messagesSameAuthor={messagesSameAuthor(index)}
    on:showContextMenu={e => displayContextMenu(e, msg)}
  />
{/each}

{#if showContextMenu}
  <ContextMenu
    {...pos}
    {activeMsg}
    on:clickoutside={() => showContextMenu = false}
    on:delete={onDelete}
  />
{/if}