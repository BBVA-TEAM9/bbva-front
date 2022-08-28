import Footer from './Footer'
import Navigation from './Navigation'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MapComponent from '../map'
import './Main.css'

const Main = ()=>{
    return(
        <div>
            <Navigation></Navigation>
            <div className="">
                <div className="containermapa">
                    <div className="mapa">
                        <MapComponent/>

                    </div>
                    <div className='info'>
                            o
                    </div>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    )

}

export default Main