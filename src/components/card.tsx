import React from 'react';

interface CardProps {
    image?: string;
    link: string;
    title: string;
    content: string[];
}

const Card: React.FC<CardProps> = ({ image, link, title, content }) => (
    <div className="card">
        {image && (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="card-image"/>
            </a>
        )}
        <div className="card-content">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <h2 className="card-title">{title}</h2>
            </a>
            {content.map((text, index) => (
                <p key={index} className="card-text">{text}</p>
            ))}
        </div>
    </div>
);

export default Card;