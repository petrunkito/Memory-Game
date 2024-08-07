<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ImageFlip from "../assets/images/helpers/image-flip.jpg"
    const dispatcher = createEventDispatcher();

	export let name: string;
	export let src: string;
	export let index: number;


	let fliped: boolean = false;
    let hide: boolean = false;
	export let isFlip: boolean = true;

	export let hideAndFlip: string[] = []
	export let selected: string = ""

	$:{
		if(hideAndFlip.includes(name))
		{
			hide = true;
			isFlip = false;
		}
	}

	$:{
		if(selected === name)
		{
			isFlip = true;
		}
	}


	function flipCard(e?: any) {
		isFlip = !isFlip;
	}

	function sendData(): void 
    {
		fliped = true;
        dispatcher("Data", {name, index, hide});
    }
</script>
<div class="card">
    <div class="border-card" class:curtain={hide}></div>
    <div class="border-card" class:curtain-hide={fliped}></div>
    <button class="button-card border-card" on:click={flipCard} on:click={sendData}>
        <img draggable="false" class="image-card-flip border-card hide-image" alt={name} {src} />
        <img
			draggable="false"
            class="image-card-flip border-card"
            class:flip={!isFlip}
            alt={'image flip'}
            src={ImageFlip}
        />
    </button>
</div>


<style>
	.border-card {
		border-radius: 15px;
	}

	.flip {
		transform: translateX(-50%) translateY(-50%) rotateY(90deg) !important;
	}

	.curtain, .curtain-hide{
		position: absolute;
        top: 0;
        left: 0;
        z-index:1;
        width: 100%;
        height: 100%;
	}
    .curtain{
        background: #ffffff60;
    }
	.curtain-hide{
        background: #00000000;

	}
    .card{
        display: inline-block;
        position: relative;
    }
	.button-card {
		background: linear-gradient(rgb(209,170,113), rgb(230, 176, 95), rgb(140,107,85));
		position: relative;
		width: 100px;
		height: 125px;
		border: none;
	}

	.image-card-flip {
		position: absolute;
		width: 95px;
		margin: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: all 0.3s;
	}
</style>
