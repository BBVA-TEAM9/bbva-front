import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SubMenuContainer from './SubMenuSideBarContainer';
import useGetRoute from "../../hooks/useGetRoute";
import useGetNameUi from "../../hooks/useGetNameUi";
import "./lb.css";

export const MenuSideBarContainer = (props) => {
    const route = useGetRoute(props.name);
    const nameUI = useGetNameUi(props.name);
    const active = false;
    const menuClassName = (active === true ? 'options flex p-3 py-1 pl-3 text-sm font-bold font-roboto text-white bg-primary uppercase' : 'mt-5 m-2 flex mb-1 py-1 pl-3 text-sm font-bold font-roboto text-gray uppercase');
    const [isToogleActive, setIsToogleActive] = useState(false);
    const toogleActive = () => setIsToogleActive(!isToogleActive);


    function getMenu(parent, route, menuClassName, icon, name, toogleActive) {
        if (parent === true) {
            return <div className={menuClassName} onClick={toogleActive}>
                <div className="options-icon">
                    <FontAwesomeIcon icon={icon} size="lg" className="icon-slide" />
                    <div className="titulo ">{' '}{name}</div>
                </div>
                <FontAwesomeIcon icon="chevron-down" className="icon-down float-right ml-8" />
            </div>
        }
        else if (parent == null) {
            return <Link to={route ?? '#'} className={menuClassName} >
                <FontAwesomeIcon icon={icon} size="lg" className="icon-slide" />
                <div className="titulo">{' '}{name}</div>
            </Link>
        }
        else {
            return <Link to={route ?? '#'} className={menuClassName} >
                <FontAwesomeIcon icon={icon} size="lg" />
                <div className="titulo">{' '}{name}</div>
            </Link>
        }
    }

    function verifySubMenu(parent, name, child, isToogleActive) {
        if (parent === true) {
            let idContainer = 'child' + name.charAt(0).toUpperCase() + name.slice(1);
            return (
                <SubMenuContainer key={idContainer} parent={name} child={child} isToogleActive={isToogleActive} />
            )
        }
    }

    return (
        <li className="menu">
            {getMenu(props.parent, route, menuClassName, props.icon, nameUI, toogleActive)}
            {verifySubMenu(props.parent, props.name, props.child, isToogleActive)}
        </li>
    )
}
export default MenuSideBarContainer