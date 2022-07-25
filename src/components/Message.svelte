<script>
  import { users } from "../data/users";

  export let msg
  export let displayAuthor = true
  let AUTHOR_ID = 1 // TODO: move to store

  const getName = () => {
    if (msg.authorId === AUTHOR_ID) return "you"
    const user = users.find(({ id }) => id === msg.authorId)
    const { firstName, lastName } = user
    return `${firstName} ${lastName}`
  }


  $: isAuthor = msg.authorId === AUTHOR_ID
</script>

<div class="msg {isAuthor ? 'msg-author' : 'msg-regular'}">
  <div>
    <div class="msg-content rounded">
      {@html msg.content}
    </div>
    {#if displayAuthor}
      <div class="author relative bottom-3 left-6 text-white rounded-lg text-xs pl-2">
        {getName()}
      </div>
    {/if}
  </div>
</div>

<style>
  .msg {
    display: flex;
  }
  
  .msg-author {
    justify-content: right;
  }
  
  .msg-content {
    color: #FFF;
    margin: 0.3vw;
    padding: 0.5vw 1.2vw;
    max-width: 30vw;
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