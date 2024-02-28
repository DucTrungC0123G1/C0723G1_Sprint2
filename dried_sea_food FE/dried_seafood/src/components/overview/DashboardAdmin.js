import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import Overview from "./Overview";
import SidebarAdmin from "./SidebarAdmin";
import {HomeFooter} from "../home/HomeFooter";

export default function DashboardAdmin() {
    return (
        <>
            <HeaderAdmin/>
            <div className="container-fluid wrapper row" style={{paddingTop:"50px"}}>
                <SidebarAdmin/>
                <Overview/>
            </div>
            <HomeFooter/>
        </>
    )

}