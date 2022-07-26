<script>
  import { configStore } from '../store/configStore'

  let displayMsgDate

  $: {
    configStore.set({
      displayMsgDate
    })
  }
</script>

<div>
  <h3 class="uppercase font-black text-2xl">
    Settings
  </h3>
  <label>
    <input
      type="checkbox"
      bind:checked={displayMsgDate}
    />
    <span>
      Show message date
    </span>
  </label>
</div>