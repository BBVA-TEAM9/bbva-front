import RouteJs from '../config/route';

const useGetRoute = (name)=>{
    const a = RouteJs.filter(r=>r.name===name)
    if(a.length!==0){
        return a[0].url
    }
    return null;
}

export default useGetRoute