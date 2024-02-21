export function Square({clas,toggleFunction,value}){
    return(
            <button className={clas} onClick={toggleFunction}> {value} </button>
    )
}