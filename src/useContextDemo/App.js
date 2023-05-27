import {useState, createContext, useContext} from 'react';

const LangContext = createContext();

const languageJson = {
    'en' : {
        'greet': "Hello World!",
        'intro': 'my name is Shubham'
    },
    'es' : {
        'greet': 'Hola Mundo',
        'intro': 'mi nombre es shubham'
    }
}

function FormattedMessage({id}){
    const lang = useContext(LangContext);
    return (
        <h2>{languageJson[lang][id]}</h2>
    );
}

function Show() {
    return (
        <>
            <FormattedMessage id='greet'/>
            <FormattedMessage id='intro'/>
        </>
    );
}

export default function App () {
    const [lang, setLang] = useState('es');
    return (
        <>
            <h1>This is useContext Demo</h1>
            <button onClick={()=> {setLang('en')}}>en</button>
            <button onClick={()=> {setLang('es')}}>es</button>
            <LangContext.Provider value={lang}>
                <Show></Show>
            </LangContext.Provider>
        </>
    )
}