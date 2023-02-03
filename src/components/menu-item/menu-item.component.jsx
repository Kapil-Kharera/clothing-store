import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem = ({ title, imgUrl, size,  linkUrl}) => {
    const navigate = useNavigate();
    return <>
        <div className={`${size} menu-item`} onClick={() => navigate(linkUrl)}>
            <div className="background-image" style={{backgroundImage: `url(${imgUrl})`}} />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    </>
}

export default MenuItem;