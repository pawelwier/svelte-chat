<script>
  import { createEventDispatcher } from 'svelte'
  import { users } from '../data/users'

  const dispatch = createEventDispatcher()

  let searchUsers = false
  let text = ''
  let matchingUsers = []
  
  let msgElements = []
  let currentElement
  let inputElement

  const selectMatchingUser = (user) => {
    console.log(user) // TODO: add to text msg
    const userItem = `<span class="user-marked" style="padding-right: 0.2vw">${user}</span>`
    text += userItem
    searchUsers = false
    inputElement.focus()
  }

  const onKeyPress = async (e) => {
    const key = e.key
    if (key === 'Enter') {
      searchUsers = false
      e.preventDefault()
      if (!text) return
      currentElement = text
      dispatch('add', text)
      text = ''
      msgElements = [...msgElements, currentElement]
      currentElement = ''
    } else if (key === '@') searchUsers = true
    if (!searchUsers) return
    setTimeout(() => {
      const searchText = text.split('@')[1]
      matchingUsers = users.filter(user => {
        const {email, firstName, lastName} = user
        return [email, firstName, lastName, `${firstName} ${lastName}`]
          .some(param => param.toLowerCase().startsWith(searchText.toLowerCase()))
      })
    }, 200)
  }
</script>

<div>
  <div
    class="text-input"
    contenteditable="true"
    bind:innerHTML={text}
    on:keypress={onKeyPress}
    bind:this={inputElement}
  />
  {#if searchUsers}
    <div>
      {#each matchingUsers as { firstName, lastName }}      
        <div
          class="matching-user"
          on:click={() => selectMatchingUser(`${firstName} ${lastName}`)}
          >
          {`${firstName} ${lastName}`}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .text-input {
    border: 1px black solid;
    padding: 0.4vw 1vw;  
  }

  .text-input:focus {
    outline: none
  }

  .matching-user {
    background-color: #FFF;
    z-index: 9999;
    cursor: pointer;
    padding: 0.2vw 0.4vw;
  }

  .matching-user:hover {
    background-color: rgb(182, 182, 224);
  }
  </style>