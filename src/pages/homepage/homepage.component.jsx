import React from "react";
import "./homepage.style.scss";
import Directory from "../../components/directory/directory.component";
// import MenuItem from "../../components/menu-item/menu-item.component";

export const HomePage = () => {
    return <>
        <div className="homepage">
            <Directory />
        </div>
    </>
}