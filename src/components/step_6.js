import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import ECharts from "./Echarts/ECharts";
import "echarts-wordcloud";

const initialPie = { data: [], error: undefined, loading: true };

function Step6({ nomo, property, setCanvas, name }) {
  const wordcloud = useRef(null);
  const theme = useTheme();
  const [wordData, setWordData] = useState(initialPie);

  let lists = [];
  let WordCloudOptions = {
    type: "wordCloud",
    sizeRange: [15, 75],
    rotationRange: [0, 0],
    width: "50%",
    height: "90%",
    top: "5%",
    layoutAnimation: false,
    bottom: "5%",
    drawOutOfBound: false,
    gridSize: 6
  };

  WordCloudOptions['rotationRange'] = [property?.nomographic, property?.nomographic];
  if ( property?.shape == 'cardioid' ) {
    WordCloudOptions['width'] = "1000px";
    WordCloudOptions['height'] = "800px";
    WordCloudOptions['top'] = "0%";
    WordCloudOptions['bottom'] = "5%";
  } else if ( property?.shape == 'twitter' ){
    WordCloudOptions['width'] = "1300px";
    WordCloudOptions['height'] = "1100px";
    WordCloudOptions['top'] = "-15%";
    WordCloudOptions['bottom'] = "5%";
  } else if ( property?.shape == 'square' ){
    WordCloudOptions['width'] = "1200px";
    WordCloudOptions['height'] = "800px";
    WordCloudOptions['top'] = "5%";
    WordCloudOptions['bottom'] = "5%";
  } else if ( property?.shape == 'triangle' ){
    WordCloudOptions['width'] = "1170px";
    WordCloudOptions['height'] = "100%";
    WordCloudOptions['top'] = "-10%";
    WordCloudOptions['bottom'] = "5%";
  } else {
    WordCloudOptions['width'] = "1200px";
    WordCloudOptions['height'] = "1000px";
    WordCloudOptions['top'] = "-10%";
    WordCloudOptions['bottom'] = "5%";
  }
    const maskImage = new Image();
    maskImage.src = './maskImage/' + property?.shape + '.jpg';
    WordCloudOptions['maskImage'] = maskImage;

  function getWordCloud() {
    setWordData((prev) => ({ ...prev, loading: true }));
    setTimeout(() => {
      const cloudOptions = {
        tooltip: {
          show: true
        },
        series: [
          {
            ...WordCloudOptions,
            color: property?.color,
            data: lists
          }
        ]
      };

      setWordData({
        data: cloudOptions,
        error: false,
        loading: false
      });
    }, 500);
  };

  const changeSize = (times = 1, flag = false) => {
    let tempList = nomo?.map(value => ({ name: value.text, value: value.size / times }));

    if ( !flag ) {
      tempList.unshift({
        name: `Hi, I am ${name}`, value: 12
      });
      if( property?.shape == 'triangle') {
        tempList.unshift({
          name: `but you can call me`, value: 11
        });
      } else {
        tempList.unshift({
          name: `but you can call me`, value: 12
        });
      }
    }

    return tempList;
  };

  useEffect(() => {
    console.log('property',property);
    if( nomo.length > 6) {
        lists = [...changeSize(3),
          ...changeSize(1.5, true),
          ...changeSize(2, true),
          ...changeSize(0.9, true),
          ...changeSize(1, true)];
    } else {
      lists = [...changeSize(3),
         ...changeSize(1.5, true), ...changeSize(2, true), ...changeSize(0.9, true), ...changeSize(1, true),
         ...changeSize(1.5, true), ...changeSize(2, true), ...changeSize(0.9, true), ...changeSize(1, true),
         ...changeSize(1.5, true), ...changeSize(2, true), ...changeSize(0.9, true), ...changeSize(1, true)];
    }


    getWordCloud();

    let wordcloud_canvas = wordcloud?.current.querySelector('div').querySelector('div').querySelector('div').querySelector('canvas');
    if (wordcloud_canvas == null) {
      wordcloud_canvas = wordcloud?.current.querySelector('div').querySelector('div').querySelector('canvas');
    }
    setCanvas(wordcloud_canvas);


  }, [property]);

  useEffect(() => {
  }, [wordcloud]);


  return (
    <Card sx={{
      minWidth: 275,
      minHeight: 200,
      mt: 1,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.palette.primary.main,
      borderRadius: 4,
    }}
      ref={wordcloud}
    >
      <ECharts
        loading={wordData.loading}
        options={wordData.data}
      />
    </Card>
  );
}

export default Step6;
