<script lang="ts">
	import { sortNumbers } from "$lib/helpers/method-array";
	import Record from "./Record.svelte";
    
    export let times: number[];//1:12:1

    $: times = sortNumbers(times);
    

</script>

<div class="record-board">

    <h3 class="records-title">Records</h3>

    <div class="records">
        {#each times as time, i({})}
            <Record recordPosition={i+1} time={time}></Record>
        {/each}
    </div>
</div>

<style>

    *{
        border-radius: 15px;
    }

    .record-board{

        width: 180px;
        height: 300px;
        background: linear-gradient(rgb(209,170,113), rgb(230, 176, 95), rgb(140,107,85));
        text-align: center;
        overflow: hidden;
    }

    .records-title{
        color: #f2f2f2;
    }

    .records{
        margin: 0 auto;
        border: 1px solid;
        overflow-y: auto;
        width: 90%;
        height: 90%;
    }
    



</style>
