<script lang="ts">

    import "/src/assets/css/global.css";

    import Timer from "../components/Timer.svelte";
    import CardBoard from "../components/CardBoard.svelte";
    import RecordBoard from "../components/RecordBoard.svelte";
    import Controls from "../components/Controls.svelte";

    let isActive: boolean = true;
    let reset: boolean = false;
    let times: number[] = [];

	import type { stateTime } from "$lib/helpers/types";
	import Background from "../components/Background.svelte";
    let stateTimer: stateTime = "stop";
    const playAndPause = ()=> {
        stateTimer = stateTimer === "stop" || stateTimer === "finish" ? "start":"stop";
        isActive = !isActive;
    }
    const finishTimer = ()=> {
        stateTimer = "finish";
        isActive = !isActive;
        reset = !reset;
    };

    let isAllFound: boolean = false;
    const allFound = () => {
        isAllFound = true;
        stateTimer = "finish";
        reset = !reset;
    }

    let resetDefaultControls: boolean = true;
    function timeFinish(data: any)
    {
        if(!isAllFound) return;

        let time: number = +data.detail.time;
        times = [...times, time]
        isAllFound = false;
        resetDefaultControls = !resetDefaultControls;


    }

</script> 
<!-- aurelio, ya esta todo listo, solo sambia esos colores de fondo del registro de tiempos, el de controles, y el de tiempo -->
<Background></Background>


<div class="header">
    <Timer on:TimeFinish={timeFinish} stateTimer={stateTimer}></Timer>
</div>

<div class="content">
    <div class="record">
        <RecordBoard times={times}></RecordBoard>
    </div>

    <div class="card-board">
        <CardBoard on:AllFound={allFound} isActive={isActive} reset={reset}></CardBoard>
    </div>

    <div class="controls">
        <Controls resetDefault={resetDefaultControls} on:Reset={finishTimer} on:StartAndStop={playAndPause}></Controls>
    </div>
</div>


<style>
    .header{
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
    }

    .content{
        position: relative;
    }

    .record, .card-board, .controls{
        position: absolute;
        margin: 0;
    }

    .record{
		top: 50%;
		left: 25%;
		transform: translate(-50%, 0%);
    }
    

    .card-board{
		top: 50%;
		left: 50%;
		transform: translate(-50%, 0%);
    }

    .controls{
		top: 50%;
		left: 75%;
		transform: translate(-50%, 0%);
    }

    
</style>




<!-- <Timer stateTimer={stateTimer}>
</Timer>

<Controls on:StartAndStop={playAndPause} on:Reset={finishTimer}></Controls> -->