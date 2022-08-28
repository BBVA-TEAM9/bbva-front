import WsJson from '../config/ws.json';

const useGetApiWs = (module,route)=>{
    const ws = WsJson.ws[module][route]['url'];
    
    const url = '/api/'+'+ws';
    return url;
}
export default useGetApiWs;