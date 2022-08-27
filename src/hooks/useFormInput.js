import {useState} from "react";
const useFormInput = (initialValue)=>{
    const [value,setValue] = useState(initialValue);

    function handleChange(e){
        if(e.target===undefined){
            setValue(e);
        }else{
            setValue(e.target.value);
        }
    }

    return {
        value,
        onChange: handleChange
    };
}

export default useFormInput