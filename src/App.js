import logo from './logo.svg';
import './App.css';
import React,{useEffect, useRef, useState} from 'react';

function App() {
  const second = useRef(null);
  const minute = useRef(null);
  const hour = useRef(null);

  const [hournum,setHourNumber] = useState('');
  const [minutenum,setMinute] = useState('');
  const [secondnum,setSecondNum] = useState('');

  useEffect(() => {
    const nowrunthetime = () => {
      const date = new Date();
      const secondtime = (date.getSeconds()/60) * 360;
      const minutetime = ((date.getMinutes()/60) * 360 ) + ((date.getSeconds()/60) *6);
      const hourtime = (date.getHours()%12) * 30 + (date.getMinutes()/60) * 30 ;

      second.current.style.transform = `rotate(${secondtime+90}deg)`;
      minute.current.style.transform = `rotate(${minutetime+90}deg)`;
      hour.current.style.transform = `rotate(${hourtime+90}deg)`;
      setHourNumber(date.getHours()%12);
      setMinute(date.getMinutes());
      setSecondNum(date.getSeconds());
    }

    const intervalId = setInterval(nowrunthetime,1000);
    return ()=>clearInterval(intervalId)

  },[])

  return (
    <div className='bothclocks'>
      <div className="App">
        <span ref={second} className='spin second'></span>
        <span ref={minute} className='spin minute'></span>
        <span ref={hour} className='spin hour'></span>
        <div className='circle'></div>
        <span className='numbers'>1</span>
        <span className='numbers'>2</span>
        <span className='numbers'>3</span>
        <span className='numbers'>4</span>
        <span className='numbers'>5</span>
        <span className='numbers'>6</span>
        <span className='numbers'>7</span>
        <span className='numbers'>8</span>
        <span className='numbers'>9</span>
        <span className='numbers'>10</span>
        <span className='numbers'>11</span>
        <span className='numbers'>12</span>
      </div>
      <div className='digital'>
        <span className='hourdigit'>{hournum < 10 ? '0'+hournum : hournum}</span>
        <span className='divider'>:</span>
        <span className='minutedigit'>{minutenum < 10 ? '0'+minutenum : minutenum}</span>
        <span className='seconddigit'>{secondnum < 10 ? '0'+secondnum : secondnum}</span>
      </div>
    </div>
  );
}

export default App;
