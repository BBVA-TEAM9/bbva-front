import React,{useEffect,useState} from 'react';
import { HubConnectionBuilder,LogLevel,HttpTransportType } from '@microsoft/signalr';

const Aforo = (props)=>{

    const [aforo,setAforo] = useState(null)
    const [ connection, setConnection ] = useState(null);
    const oficinaId = props.oficinaId

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://api-aforo-bbvateamnueve.azurewebsites.net/oficinaHub', {
                skipNegotiation: true,
                transport: HttpTransportType.WebSockets
            })
            .configureLogging(LogLevel.Information)
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');                    
                })
                .catch(e => console.log('Connection failed: ', e));

                connection.on('RecieveOficina'+oficinaId, (aforo) => {
                    console.log(aforo);
                    setAforo(aforo??1);
                 });
        }
    }, [connection]);

   
    return (
        <div>
            {aforo}
        </div>
    )

}

export default Aforo