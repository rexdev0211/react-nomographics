import React, { useState, useEffect } from 'react';

//FOR UI
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import TwitterIcon from '@mui/icons-material/Twitter';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(3),
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    borderRadius: 6,
    display: "flex",
    flexDirection: "column",
    width: 128,
    height: 128,
    '&.Mui-selected': {
      borderWidth: 3,
      backgroundColor: "transparent"
    },
    '&:not(:first-of-type)': {
      borderRadius: 8,
      boderLeft: "0px",
      borderLeftColor: theme.palette.primary.main
    },
    '&:first-of-type': {
      borderRadius: 8,
    },
  },
}));

function Step2({ shape, setShape }) {
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    if(newAlignment === null) return;
    setShape(newAlignment);
  };
  return (
    <Container className="Step2">
      <h3>2. Choose Shape</h3>
      <StyledToggleButtonGroup
          size="small"
          value={shape}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="square" aria-label="left aligned">
            <ChatBubbleOutlineIcon />Speech Bubble
          </ToggleButton>
          <ToggleButton value="cardioid" aria-label="centered">
            <FavoriteBorderIcon />Heart
          </ToggleButton>
          <ToggleButton value="star" aria-label="centered">
            <StarBorderIcon />Star
          </ToggleButton>
          <ToggleButton value="triangle" aria-label="centered">
            <ChangeHistoryIcon />Triangle
          </ToggleButton>
          <ToggleButton value="twitter" aria-label="centered">
            <TwitterIcon />Twitter
          </ToggleButton>
          <ToggleButton value="new" aria-label="right aligned">
            <AddIcon />Upload New Shape
          </ToggleButton>
        </StyledToggleButtonGroup>
    </Container>
  );
}

export default Step2;
