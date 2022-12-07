import React from 'react';

const EnhancedComponent = (OriginalComponent) => {
    const NewComponent = ({type})=>{
        // console.log(props);
        return<OriginalComponent name="acem react" type={type}/>;
    };

    return NewComponent;
}

const OldComponent = (props) => {
    return<h1>{props?.name} {props?.type}</h1>
}

export default EnhancedComponent(OldComponent)