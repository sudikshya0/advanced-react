import React , {memo} from 'react';
const Square = ({number, onChangeHandler,squaredNum})=>{
    console.log("****square");
    return(
        <>
        <input type="number" 
        placeholder="enter a number:"
        value={number}
        onChange={onChangeHandler}/>
        <div> OUTPUT:{squaredNum}</div>
        </>
    )
}

export default memo(Square);