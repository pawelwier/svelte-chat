<script>
  import { messages } from '../data/messages'
  import Messages from './Messages.svelte'
  import NewMessageInput from './NewMessageInput.svelte'

  let chatMessages = messages
  let AUTHOR_ID = 1 // TODO: move to store

  const addMessage = (e) => {
    const message = {
      content: e.detail,
      id: Math.random() * 1000 * 1000 * 1000, // mongo id
      authorId: AUTHOR_ID,
      createdAt: new Date()
    }
    chatMessages = [...chatMessages, message]
  }
</script>

<div class="w-96">
  {#if chatMessages.length}
    <Messages {chatMessages} />
  {/if}
  <NewMessageInput on:add={addMessage} />
</div>
