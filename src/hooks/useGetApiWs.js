import WsJson from '../config/ws.json';

const useGetApiWs = (type,module,route)=>{
    const ws = WsJson.ws[module][route]['url'];
    
    const url = '/api/'+type+'/'+module+'/'+ws;
    return url;
}
export default useGetApiWs;