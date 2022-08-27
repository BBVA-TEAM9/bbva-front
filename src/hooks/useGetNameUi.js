import MenuLang from "../lang/es/component/menu";

const useGetNameUi = (name)=>{
    return name!==null?MenuLang.filter(r=>r.name===name)[0].label:''
}

export default useGetNameUi