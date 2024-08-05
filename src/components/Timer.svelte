<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { convertFormatTime, getConvertToDataTime } from '$lib/helpers/time';
	import type { DataTime, stateTime } from '$lib/helpers/types';

	let dispatch = createEventDispatcher();

	export let stateTimer: stateTime;

	let time: number = 0;
	let timeFormat: string = '00:00';
	let interval: number = 0;

	$: if (stateTimer === 'start') startTime();
	$: if (stateTimer === 'stop') stopTime();
	$: if (stateTimer === 'finish') finishTime();

	function startTime() {
		dispatch('TimeLive', { time });
		interval = setInterval(() => {
			let dataTime: DataTime = getConvertToDataTime(time);
			timeFormat = convertFormatTime(dataTime);
			time += 1;
		}, 1000);
	}

	function stopTime() {
		dispatch('TimeStop', { time });
		clearInterval(interval);
	}

	function finishTime() {
		dispatch('TimeFinish', { time });
		clearInterval(interval);
		time = 0;
		stateTimer = 'stop';
        timeFormat = "00:00"
	}
</script>

<div class="timer">
	<div class="timer-container">
		<h3 class="timer-title">Time</h3>
		<p class="timer-format-time">{timeFormat}</p>
	</div>
</div>

<style>
	.timer {
		width: max-content;
		text-align: center;
		border: 1px solid;
		border-radius: 15px;
		background: linear-gradient(rgb(209,170,113), rgb(230, 176, 95), rgb(140,107,85));
		color: #f2f2f2;
	}

	.timer-container {
		overflow: hidden;
		padding: 10px 40px;
	}
</style>
