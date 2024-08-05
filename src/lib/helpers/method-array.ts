
export function sortNumbers(numbers: number[]): number[] {
    let sort: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        let numberElement = numbers[i]

        if (sort.length === 0) {
            sort.push(numberElement);
            continue;
        }
        let aux = [];
        for (let k = 0; k < sort.length; k++) {

            let sortElement: number = sort[k];

            if (numberElement <= sortElement) {
                aux.push(numberElement);
                for (let j = k; j < sort.length; j++) {

                    let restElement: number = sort[j];
                    aux.push(restElement);
                }
                break;
            }

            if (numberElement > sortElement && sort.length - 1 === k) {

                aux.push(sortElement);
                aux.push(numberElement);
                break;
            }

            if (numberElement > sortElement) {
                aux.push(sortElement);
                continue;
            }
        }
        sort = aux;
    }

    return sort;
}

export function disarray<T>(elements:T[]): T[]
{
    let messyElements: T[] = []
    let copyElements: T[] = [...elements]
    let limit = copyElements.length;

    for(let i=0; i<limit;i++)
    {
        let positionRandom = copyElements.length===0?0:Math.floor(Math.random() * copyElements.length);
        messyElements.push(copyElements[positionRandom]);
        copyElements.splice(positionRandom, 1);
    }
    return messyElements;
}