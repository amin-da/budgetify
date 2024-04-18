// create a function that accepts an array of only the the values inside ages object and returns an array of unique ages
// type TGetUniqueAges = (ages: TAgesValueOnly)=>TUniqueAgesValue

const t=3
let d=3
const agesObj = { erfan:27, Ali:32, mahdi:27 } as const

type TAgesValueOnly =typeof agesObj[keyof typeof agesObj]

const a = (ages:TAgesValueOnly[])=>{
    return [...(new Set(ages))]
}

console.log(a(Object.values(agesObj)))