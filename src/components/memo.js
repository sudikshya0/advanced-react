import Count from './Count';
import Square from './Square';
import React, {useState, useCallback, useMemo} from 'react';

function squareNum(number){
    console.log("squaring will be done");
    return Math.pow(number,2);

}

const Memo = () =>{
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    const onChangeHandler = useCallback((e) => {
            setNumber(e.target.value);
        },[]
    ); 

    const counterHandler = useCallback(()=>{
        setCounter((counter) => counter + 1);}
        ,[]
    );

    const squareNumber = useMemo(() => {
        return squareNum(number);
    },[number]);

    return(
        <div>
            <Square  
            number = {number} 
            squaredNum = {squareNumber} 
            onChangeHandler={onChangeHandler}/>
            
            <Count counter={counter}
            counterHandler={counterHandler}/>
        </div>
    )

}

export default Memo;
