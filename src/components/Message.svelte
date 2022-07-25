<script>
  import { users } from "../data/users"
  import { format } from 'date-fns'

  export let msg
  export let displayAuthor = true
  export let displayMsgDate

  let AUTHOR_ID = 1 // TODO: move to store

  const getName = () => {
    if (msg.authorId === AUTHOR_ID) return "you"
    const user = users.find(({ id }) => id === msg.authorId)
    const { firstName, lastName } = user
    return `${firstName} ${lastName}`
  }

  const formatDate = (date) => {
    return format(date, "yyyy:MM:dd HH:mm:ss")
  }

  $: isAuthor = msg.authorId === AUTHOR_ID
</script>

<div class="msg text-white {isAuthor ? 'msg-author justify-end' : 'msg-regular'}">
  <div>
    <div class="msg-content rounded">
      {@html msg.content}
    </div>
    {#if displayAuthor}
      <div class="author relative bottom-3 left-6 rounded-lg text-xs pl-2">
        {getName()}
        {#if displayMsgDate}
          {formatDate(msg.createdAt)}
        {/if}
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