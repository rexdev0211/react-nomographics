import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import WordCloud from "react-wordcloud2";
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';


function Step5({ nomo, property, setCanvas, name }) {
  const wordcloud = useRef(null);
  const theme = useTheme();
  const [list, setList] = useState([]);
  const [origin_y, setOrigin_y] = useState(250);

  const changeSize = (times = 1, flag = false) => {

    let tempList = nomo.map(value =>[value.text, value.size / times]);
    if(!flag) {
      tempList.unshift([
        `but you can call me`, 8
      ]);
      tempList.unshift([
        `Hi, I am ${name}`, 8
      ]);
    }
    return tempList;
  };

  useEffect(() => {
    setList([...changeSize(1), ...changeSize(2, true), ...changeSize(3, true), ...changeSize(4, true), ...changeSize(4, true)]);
    if(property?.shape=='cardioid'){
      setOrigin_y(50);
    }else {
      setOrigin_y(250);
    }
  }, [nomo, property]);

  useEffect(() => {
    setCanvas(wordcloud?.current.querySelector('canvas'));
  }, [wordcloud]);

  return (
    <Card sx={{
        minWidth: 275,
        minHeight: 100,
        mt: 1,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.palette.primary.main,
        borderRadius: 4,
      }}
      ref={wordcloud}
      >
        <WordCloud
        color="random-light"
        shape={property?.shape}
        minSize={0.5}
        backgroundColor = "black"
        shuffle = {true}
        shrinkToFit= {true}
        drawOutOfBound = {false}
        minRotation={0}
        maxRotation={0}
        ellipticity={0.55}
        weightFactor={6}
        list={list}
        width={800}
        height={550}
        origin={[400, origin_y]}
      />
      </Card>
  );
}

export default Step5;
