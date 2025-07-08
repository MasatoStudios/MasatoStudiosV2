import React from 'react'

interface ShowcaseProps {
    showcaseID: string;
    title: string;
    text: string;
}

const Showcase = ({ title, showcaseID, text }: ShowcaseProps) => {
	return (
    <div>
        <h1>{showcaseID}</h1>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
    );
}

export default Showcase