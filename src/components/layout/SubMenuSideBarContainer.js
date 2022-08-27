import React from "react";
import SubMenu from './SubMenuSideBar';
import '../../pages/layout/main.css';
const SubMenuSideBarContainer = (props)=>{
    //const active=props.active??false;     
    const child=props.child;
    const parent = props.parent;
    const isToogleActive = props.isToogleActive;
    let idContainer = 'child'+parent.charAt(0).toUpperCase()+parent.slice(1);
    let submenuContainerClassName = (isToogleActive??false)?'subslide bg-white shadow-lg shadow-gray hover:text-secondary':'subcontainer submenuContainer select-none bg-white';
    
    return (
        <ul id={idContainer} className={submenuContainerClassName}>
            {
                child.map(
                    item=> <SubMenu key={item.name} name={item.name}/>
                )    
            }
        </ul>
    )
}

export default SubMenuSideBarContainer