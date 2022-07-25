<script>
  export let msg;
  let AUTHOR_ID = 1 // TODO: move to store

  $: isAuthor = msg.authorId === AUTHOR_ID
</script>

<div class="msg {isAuthor ? 'msg-author' : 'msg-regular'}">
  <div class="msg-content">
    <div>
      {@html msg.content}
    </div>
  </div>
</div>

<style>
  .msg {
    display: flex;
  }
  
  .msg-author {
    justify-content: right;
  }
  
  .msg div {
    color: #FFF;
    margin: 0.3vw;
    padding: 0.3vw 1vw;
    max-width: 30vw;
  }

  .msg-author div {
    background-color: rgb(96, 96, 158);
  }
  
  .msg-regular div {
    background-color: rgb(119, 119, 167);
  }

  .msg-content {

  }

  :global(.user-marked) {
    font-weight: 900;
  }

  :global(.user-marked:hover) {
    cursor: pointer;
  }
</style>