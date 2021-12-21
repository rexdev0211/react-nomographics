import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

function Step4({ download, imagetype, setImageType }) {

  const handleChange = (event, value) => {
    setImageType(value);
  };


  return (
    <Container className="Step4" sx={{ mb:20 }}>
      <h3>4. Choose file type to download</h3>
      <FormControl component="fieldset">
        <RadioGroup row aria-label="type" name="row-radio-buttons-group" align="center"
         value={imagetype}
         onChange={handleChange}
        >
          <FormControlLabel value="PNG" control={<Radio />} label="PNG" />
          <FormControlLabel value="JPG" control={<Radio />} label="JPG" />
          <FormControlLabel value="EPS" control={<Radio />} label="EPS" />
          <FormControlLabel value="PDF" control={<Radio />} label="PDF" />
          <FormControlLabel value="SVG" control={<Radio />} label="SVG" />
        </RadioGroup>
      </FormControl>
      <br/>
      <Button variant="contained" onClick={download}>Download</Button>
    </Container>
  );
}

export default Step4;
