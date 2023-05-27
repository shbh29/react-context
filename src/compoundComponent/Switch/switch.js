import './switch.css'
import {useEffect, useState} from 'react';

export default function Switch({onToggle}) {
    const [check, setChecked] = useState(false);
    const updateChecked = () => {
        setChecked(!check);
    }
    useEffect(() => {
      onToggle(check);
    }, [check])
  return (
    <div className="toggle-switch">
        <label className='toggle-label'>
      <input type="checkbox" checked={check} onChange={updateChecked}/>
      <div className="toggle-track">
        <div className="toggle-thumb"></div>
      </div>
      </label>
    </div>
  );
}
