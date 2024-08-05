import type { DataTime } from "./types";

//time -> tiempo en segundos
export function getConvertToDataTime(time: number): DataTime
{
    let restTime: number = 0;

    let hours: number = Math.floor(time/3600);

    restTime = time % 3600;

    let minutes: number = Math.floor(restTime / 60)

    let seconds: number = restTime % 60;

    return {hours, minutes, seconds}
}

export function convertFormatTime(dataTime: DataTime): string
{
    let {hours=0, minutes=0, seconds=0} = dataTime;

    let formatTime: string="";
    
    formatTime = hours===0?"":  hours < 10? "0"+hours+":":hours+":"
    formatTime += minutes < 10? "0"+minutes+":":+minutes+":";
    formatTime += seconds < 10? "0"+seconds: ""+seconds;
    return formatTime;

}