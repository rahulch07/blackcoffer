import React from 'react'

export default function MaxIntensityCountry(props) {

  let styl;
  let stylL= {bxshd: '3px 3px 3px 3px #DEDEDE'};
  let stylD= {bxshd: '2px 2px 3px 3px black'};

  props.mode==='light'? styl=stylL: styl=stylD;

    let max=0;
    let countryMax ='';
    let min=1000;
    let countryMin='';

    // props.data.forEach(entry => {
    //     const country = entry.country;
      
    //     // Check if the country already exists in the object, if not, initialize it with the intensity
    //     if (!intensitySumByCountry[country]) {
    //       intensitySumByCountry[country] = entry.intensity;
    //     } else {
    //       // If the country exists, add the intensity to the existing sum
    //       intensitySumByCountry[country] += entry.intensity;
    //     }
    //   });

    for(const country in props.intensityObj){
        const intensity = props.intensityObj[country];

        if(intensity> max){
            max = intensity;
            countryMax= country;
        }

        if(intensity< min){
            min = intensity;
            countryMin= country;
        }
    }


  return (
    <div style={{backgroundColor:props.styl.bgclr, color: props.styl.txtclr}}>
        <div className='intensitybox' style={{boxShadow: styl.bxshd}}>
        <div className='notch' style={{backgroundColor: props.color}}></div>
        <div>{props.parameter} with MAX intensity-<b>{countryMax}</b></div>
        <div className='h1'>{max}</div>
        <div>{props.parameter} with MIN intensity-{countryMin}:{min}</div>
      </div>
    </div>
  )
}
