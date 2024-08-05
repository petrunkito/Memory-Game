<script lang="ts">
	import ImageReset from '../assets/images/helpers/reset.png';
	import ImagePause from '../assets/images/helpers/pause.png';
	import ImagePlay from '../assets/images/helpers/play.png';

	import { createEventDispatcher } from 'svelte';
	const dispath = createEventDispatcher();

	let buttonResetIsActive: boolean = false;
	let playAndStopButtonImage: typeof ImagePause | typeof ImagePlay = ImagePlay;

	export let resetDefault: boolean;
	$: {
		if (resetDefault || !resetDefault) reset()
	}

	function startAndStop() {
		dispath('StartAndStop', {});
		playAndStopButtonImage = playAndStopButtonImage === ImagePlay ? ImagePause : ImagePlay;
		buttonResetIsActive = true;
	}

	function reset() {
		dispath('Reset', {});
		buttonResetIsActive = false;
		playAndStopButtonImage = ImagePlay;
	}
</script>

<div class="controls">
	<div class="controls-container">
		<button class="button-reset" on:click={reset} class:show={buttonResetIsActive}>
			<img draggable="false" class="image-button" alt={'image reset'} src={ImageReset} />
		</button>
		<button class="button-start-pause" on:click={startAndStop}>
			<img
				draggable="false"
				class="image-button"
				alt={'image reset'}
				src={playAndStopButtonImage}
			/>
		</button>
	</div>
</div>

<style>
	.button-reset {
		display: none;
	}

	.show {
		display: inline;
	}

	.button-reset,
	.button-start-pause {
		border: none;
		background: none;
	}

	.button-reset:hover,
	.button-start-pause:hover {
		cursor: pointer;
	}

	.image-button {
		width: 50px;
	}
	/*  */

	.controls {
		width: max-content;
	}

	.controls-container {
		border: 1px solid;
		border-radius: 15px;
		width: 200px;
		text-align: center;
		padding: 2px;
		background: linear-gradient(rgb(209,170,113), rgb(230, 176, 95), rgb(140,107,85));
		color: #f2f2f2;
	}
</style>
