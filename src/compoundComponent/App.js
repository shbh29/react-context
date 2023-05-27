import Switch from "./Switch/switch";
import {useState} from 'react';

function On ({on, children}) {
    return (
        on ? <h1>{children}</h1>  : null
    );
}

function Off ({on, children}) {
    return (
        on ? null : <h1>{children}</h1> 
    );
}


export default function App () {
    const [on, setOn] = useState('false');
    return (
        <>
            <h1>
                Hello Shubham compound component
            </h1>
            <Switch onToggle={(on) => setOn(on)}/>
            <On on={on}>Hi</On>
            <Off on={on}>Bye</Off>
            {/* {on ? <h1>Hi</h1> : <h1>Bye</h1>} */}
        </>
    );
}