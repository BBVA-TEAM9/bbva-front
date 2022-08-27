import React from "react";
import { Link } from "react-router-dom";
import {useGetRoute,useGetNameUi} from "../../hooks/index";
import "../../pages/layout/main.css"
const SubMenuSideBar  = (props)=>{
    const nameUI = useGetNameUi(props.name);
    const subMenuClassName=(props.active??false)?'subMenu mb-1 py-1 pl-10 font-roboto font-medium bg-white text-sm text-secondary':'subMenu mb-1 py-1 pl-10 font-roboto font-medium bg-white text-black hover:text-secondary text-sm ';
    const route = useGetRoute(props.name);
    return (
        <li className={subMenuClassName}>
            <Link to={route} className="block">
                {nameUI}
            </Link>
        </li>
    )
}
export default SubMenuSideBar