<script>
  import { format } from 'date-fns'
  import { configStore } from '../store/configStore'
  import { users } from "../data/users"

  export let createdAt
  export let isAuthor
  export let authorId

  let displayMsgDate
  
  const getName = () => {
    if (isAuthor) return "you"
    const user = users.find(({ id }) => id === authorId)
    const { firstName, lastName } = user
    return `${firstName} ${lastName}`
  }

  const formatDate = (date) => {
    return format(date, "yyyy:MM:dd HH:mm:ss")
  }

  $: displayMsgDate = $configStore.displayMsgDate
</script>

<div class="text-xs pl-2">
  {getName()}
  {#if displayMsgDate}
    {formatDate(createdAt)}
  {/if}
</div>