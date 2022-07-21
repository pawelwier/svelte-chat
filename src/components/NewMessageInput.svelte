<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let searchUsers = false
  let text = ''
  let matchingUsers = []

  const selectMatchingUser = (user) => {
    console.log(user) // TODO: add to text msg
  }

  const onKeyPress = (e) => {
    const key = e.key
    if (key === 'Enter') {
      e.preventDefault()
      if (!text) return
      dispatch('add', text)
      text = ''
    } 
  }
</script>

<div>
  <div
    class="text-input"
    contenteditable="true"
    bind:innerHTML={text}
    on:keypress={onKeyPress}
  />
  {#if searchUsers}
    {#each matchingUsers as { firstName, lastName }}      
      <div on:click={() => selectMatchingUser(`${firstName} ${lastName}`)}>
        {`${firstName} ${lastName}`}
      </div>
    {/each}
  {/if}
</div>

<style>
  .text-input {
    border: 1px black solid;
  }
  </style>