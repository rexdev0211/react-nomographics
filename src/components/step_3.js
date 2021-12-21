import React, { useState, useEffect, useRef } from 'react';

//FOR API
import axios from "axios";

//FOR UI

import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";


function Step3({ nomographic, setNomographic, shape, setProperty }) {

  const colorRef = useRef(null);

  const [color,setColor] = useState('#02B9B9');
  const [show, setShow] = useState(false);
  const handleChange = (event, value) => {
    console.log('handleChange');
    setNomographic(value);
  };

  const changeProperty = () => {
    let color = colorRef.current.getValue();
    setShow( !show );
    setProperty({
      shape,
      nomographic,
      color,
      show
    });
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <Container className="Step3">
      <h3>3. Create Nomographic</h3>
      <FormControl component="fieldset">
        <RadioGroup
          row aria-label="gender" name="row-radio-buttons-group" align="center"
          value={nomographic}
          onChange={handleChange}
        >
          <FormControlLabel value="0" control={<Radio />} label="ALLOW HORIZONTAL" />
          <FormControlLabel value="90" control={<Radio />} label="REPEAT VERTICAL" />
        </RadioGroup>
        <div className='wrap'>
          <h3>4. Choose Color</h3>
          <ColorPickerComponent ref={colorRef} value="#02B9B9" onChange={handleChange} showButtons={true}/>
        </div>
        <Button variant="contained" onClick={changeProperty}>Create</Button>
      </FormControl>
    </Container>
  );
}

export default Step3;
