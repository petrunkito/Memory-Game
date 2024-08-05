<script lang="ts">
	import {createEventDispatcher}  from "svelte";
	import { charactersData } from '$lib/data/card.data';
	import type { CharacterData } from '$lib/data/types';
	import { disarray } from '$lib/helpers/method-array';
	import Cards from './Cards.svelte';

	let dispatcher = createEventDispatcher();

	let dimension: number = 6;
	export let isActive: boolean; //habilita la cortina
	export let reset: boolean = false; //aurelio, quedamos en esta parte:
	//cuando presionen reset, hay que resetear los personajes

	let charactersAtPlay: CharacterData[] = getMessyCharacters([...charactersData], dimension);
	function getMessyCharacters(characters: CharacterData[], dimension: number): CharacterData[] {
		let allMessyCharacters: CharacterData[] = disarray<CharacterData>(characters);

		let charactersAtPlay: CharacterData[] = [];
		for (let i = 0; i < dimension; i++) charactersAtPlay.push(allMessyCharacters[i]);

		let messyCharacters: CharacterData[] = disarray<CharacterData>([
			...charactersAtPlay,
			...charactersAtPlay
		]);
		return messyCharacters;
	}

	let counter: number = 0;
	let firsCharacterName: string;
	let secondCharacterName: string;
	let charactersFound: string[] = [];
	let isFlip: boolean = true;
	let selected: string = '';

	$:{
		if(charactersFound.length === dimension)
		{
			
			dispatcher("AllFound", {});
		}
	}

	$: {
		if(reset || !reset){
			charactersAtPlay = [];
			charactersAtPlay = getMessyCharacters([...charactersData], dimension);
			selected = "";
			charactersFound = [];
			counter = 0;
			firsCharacterName = "";
			secondCharacterName = "";
			isActive = true;
		}
	}


	function selectCard(e: any): void {
		counter++;
		if (counter === 1) firsCharacterName = e.detail.name;
		if (counter === 2) secondCharacterName = e.detail.name;
		if (counter !== 2) return;

		if (firsCharacterName === secondCharacterName) {
			setTimeout(() => {
				charactersFound = [...charactersFound, e.detail.name];
			}, 200);
		}

		if (firsCharacterName !== secondCharacterName) {
			let fn = firsCharacterName;
			let sn = secondCharacterName;
			setTimeout(() => {
				selected = fn;
				selected = sn;
				selected = '';
			}, 1000);
		}

		firsCharacterName = '';
		secondCharacterName = '';
		counter = 0;
	}

</script>

<div class="card-board">
	<div class="border-card" class:curtain={isActive}></div>
	<div class="cards">
		{#each charactersAtPlay as character, i ({})}
			<Cards
				name={character.name}
				src={character.src}
				hideAndFlip={charactersFound}
				index={i}
				{isFlip}
				{selected}
				on:Data={selectCard}
			></Cards>
		{/each}
	</div>
</div>

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(4, min-content);
		justify-items: center;
		width: min-content;
		gap: 2px;
		border-radius: 15px;
		padding: 2px;
	}
	

	.curtain {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		background: #09090996;
		border-radius: 15px;
	}
</style>
