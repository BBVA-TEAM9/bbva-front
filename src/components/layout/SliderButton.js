import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SliderButton = (props)=>{   
    
    const {handleToogleSideBar} = props;
    
    return(
        <button className="slidebar-btn flex-none text-right focus:outline-none" onClick={handleToogleSideBar}>
            <FontAwesomeIcon icon="bars"/>
        </button>
    )    
    
}

export default SliderButton;