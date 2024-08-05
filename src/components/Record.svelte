<script lang="ts">
	import { convertFormatTime, getConvertToDataTime } from "$lib/helpers/time";
	import type { DataTime } from "$lib/helpers/types";


    export let recordPosition: number;
    export let time: number;

    let dataTime: DataTime = getConvertToDataTime(time);
    let formatTime: string = convertFormatTime(dataTime);
</script>

<div class="record">
    <p 
        class="record-position" 
        class:first={recordPosition===1} 
        class:second={recordPosition===2} 
        class:third={recordPosition===3} 
        class:others-positions={ recordPosition>3} 
    >{recordPosition}</p>
    <p class="time">{formatTime}</p>
</div>

<style>

    .first{
        background-color: rgba(233, 190, 61);

    }

    .second{
        background-color: rgb(191, 191, 191);
    }

    .third{
        background-color: rgb(192, 57, 23);

    }

    .others-positions{
        background-color: rgba(113, 113, 113, 0.571);
    }

    .record{
        display: flex;
        width: 80%;
        height: 20px;
        margin: 0 auto;
    }

    .record-position{
        width: 20px;
        height: 20px;
        border-radius: 5px;

    }

    .time{
        overflow: hidden;
        margin: auto;
        color: #f2f2f2;
    }
</style>