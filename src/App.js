import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Step1 from './components/step_1';
import Step2 from './components/step_2';
import Step3 from './components/step_3';
import Step4 from './components/step_4';
import Step5 from './components/step_5';
import Step6 from './components/step_6';
function App() {
  const aTag = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [nomo, setNomo] = useState([]);
  const [shape, setShape] = useState('archimedean');
  const [nomographic, setNomographic] = useState(0);
  const [property, setProperty] = useState(null);
  const [imagetype,setImageType] = useState('PNG');
  const [name, setName] = useState('');

  const download = () => {
    if ( canvas!=null ) {
      let image = canvas.toDataURL("image/"+imagetype);
      aTag.current.href = image;
      aTag.current.click();
    }
  };

  const filename = "myImage."+imagetype;

  return (
    <div className="App">
      <a ref={aTag} href="" download={filename} hidden>download img</a>
      <Step1 nomo={nomo} setNomo={(nomo) => setNomo(nomo)} name={name} setName={setName}/>
      <Step2 shape={shape} setShape={setShape} />
      <Step3 nomographic={nomographic} setNomographic={setNomographic} shape={shape} setProperty={setProperty} />
      {/* <Step5 nomo={nomo} property={property} shape={shape} nomographic={nomographic} setCanvas={setCanvas} name={name}/> */}
      <Step6 nomo={nomo} property={property} shape={shape} nomographic={nomographic} setCanvas={setCanvas} name={name}/>
      <Step4 imagetype = {imagetype} setImageType={setImageType} download={download}/>
    </div>
  );
}

export default App;
