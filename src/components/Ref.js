import React , {useRef} from 'react';

const Ref = ()=>{
    const textInput = useRef(null);


function HandleClick(){
    textInput.current.focus();
}

return(
    <div>
        <input type="text" ref={textInput}/>
        <input type="button" value="Focus on the text input"
        onClick = {HandleClick}/>
    </div>
)
};

export default Ref;