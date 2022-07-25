<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let showMsgDate

  const onSetShowMsgDate = () => {
    dispatch('showMsgDate', showMsgDate) // TODO: move to store
  }
</script>

<div>
  <label>
    <input
      type="checkbox"
      bind:checked={showMsgDate}
      on:change={onSetShowMsgDate}
    />
    <span>
      Show message date
    </span>
  </label>
</div>