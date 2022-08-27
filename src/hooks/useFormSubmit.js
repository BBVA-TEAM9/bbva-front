const useFormSubmit = (fun)=>{

    function handleChange(e){
        e.preventDefault();
        fun();
    }

    return {
        onSubmit: handleChange
    }
}
export default useFormSubmit;