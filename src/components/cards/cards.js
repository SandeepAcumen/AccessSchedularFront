import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, body, className, path, gradientColors, gradient }) => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                background: `linear-gradient(to ${gradient}, ${gradientColors.from}, ${gradientColors.to})`,
            }}
            className={` shadow-md rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-transform duration-300 m-3 cursor-pointer
         ${className}`}
            onClick={() => navigate(path)}
        >
            {title && <h3 className=" text-black text-xl mb-2 text-start">{title}</h3>}
            {body && <p className="text-gray-950 text-sm lg:text-base text-start">{body}</p>}
        </div>
    );
};

export default Card;
