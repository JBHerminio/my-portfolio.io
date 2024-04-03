import React from 'react';
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
    return (
        <Typewriter
            options={{
                strings: ['Front-end Developer', 'Web Developer', 'Programer'],
                typeSpeed: 60,
                backSpeed: 60,
                autoStart: true,
                loop: true,
            }}
        />
    )
};

export default TypeWriter;