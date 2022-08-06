import React, { useState, useEffect } from 'react';

function KeyboardComponent() {
    const [keypressed, setkeypressed] = useState('');
    const [text, settext] = useState('');

    useEffect(() => {
        window.addEventListener('keypress', e => {
            setkeypressed(e.key);
        });
    }, []);

    useEffect(() => {
        if (keypressed === 'Enter') {
            settext(text + '\n');
        } else if (keypressed === 'Backspace') {
            settext(text.slice(0, -1));
        } else {
            settext(text + keypressed);
        }
        setkeypressed('');
    }, [keypressed]);

    return (
        <div>{text}</div>
    );
}

export default KeyboardComponent;