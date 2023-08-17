import * as React from 'react';
import './style.css';

interface CircleProps {
  deg: number
  size:number
}

const Circle = ({deg, size}:CircleProps) => <div className="circle" style={{rotate: deg+"deg", width: size+"px", height: size+"px" }} > <span className="circle-text" style={{fontSize: size/5}}>circle</span> </div>

export default function App() {

  const [deg, setDeg] = React.useState(0);
  const [size, setSize]= React.useState(50);

  const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) => {
    setDeg((e.clientX+e.clientY)*2);
    setSize(e.clientY)
  }


  return (
    <div className="main" onMouseMove={(e)=>handleMouseMove(e)}>
      <h1>Let it rotate</h1>
      <p>Start moving mouse to see some magic happen :)</p>

      <Circle deg={deg} size={size}/>
    </div>
  );
}
