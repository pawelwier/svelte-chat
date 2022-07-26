<script>
	import Message from './Message.svelte';

  export let chatMessages

  const nextMessageSameAuthor = (index) => {
    const nextMessage = chatMessages[index + 1]
    if (!nextMessage) return false
    return chatMessages[index].authorId === nextMessage.authorId
  }
</script>

{#each chatMessages as msg, index (msg.id)}
  <Message
    {msg}
    displayAuthor={!nextMessageSameAuthor(index)}
  />
{/each}