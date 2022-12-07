import React, {memo} from 'react';

const Count = ({counterHandler, counter})=>{
    console.log("****count");
    return(
        <>
        <button onClick={counterHandler}>Counter ++</button>
        <div>Counter: {counter}</div>
        </>
    );
};

export default memo(Count);