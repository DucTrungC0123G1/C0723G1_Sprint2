import HomeHeader from "./HomeHeader";
import {HomeCarousel} from "./HomeCarousel";
import React from "react";
import {HomeFooter} from "./HomeFooter";
import {HomeProduct} from "./HomeProduct";

export function HomePage() {
    return (
        <>
            <HomeHeader/>
            <HomeCarousel/>
            <HomeProduct/>
            <HomeFooter/>
        </>
    )
}