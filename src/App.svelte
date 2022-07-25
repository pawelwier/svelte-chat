<script>
	import Chat from './components/Chat.svelte'
	import Settings from './components/Settings.svelte'

	let displayMsgDate = false
	const setShowMsgDate = (value) => {
		displayMsgDate = value.detail
	}
</script>

<Chat {displayMsgDate} />
<Settings on:showMsgDate={value => setShowMsgDate(value)} />
