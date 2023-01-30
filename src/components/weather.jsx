import React, { useState } from 'react';
import "./weather.css"
import weather from "../assets/images/cloudy.png"
import Roundy from "roundy";

export const Weather = () => {

    const [value, setValue] = useState(24.00);

  return (
    <div className='box-container'>
        <div className='box'>
            <div className='day'>
                <h1 className='h1-font'>28 Ekim Cuma</h1>
            </div>
            <div className='second-section'>
                <div className='degree'>24 <span className='span'>°C</span></div>
                <div className='weather-two'>
                    <img className='image' src={weather} alt="" />
                    <div className='text1'>Parçalı Bulutlu</div>
                </div>
            </div>
            <div className='third-section'>
                <div className='part1'>
                    <img className='image2' src={weather} alt="" />
                    <div className='marginX'>80%</div>
                </div>
                <div className='part2'>
                <img className='image2' src={weather} alt="" />
                    <div className='marginX'>AQI 20</div>
                </div>
                <div className='part3'>
                  <img className='image2' src={weather} alt="" />
                    <div className='marginX'>10km/s</div>
                </div>
            </div>
            <div className='card'>

                
                
                <div className="roundy-x">
                    <Roundy
                        value={value}
                        radius={120}
                        min={0}
                        max={24.00}
                        color="white"
                        arcSize={180}
                        strokeWidth={2}
                        onChange={value => {
                        console.log(value);
                        setValue(parseFloat(value).toFixed(2));
                        }}
                    />
                </div>

                <div className='dayStartEnd'>
                    <div>
                        <div>Gün Doğumu</div>
                        <div>{value}</div>
                    </div>
                    <div>
                        <div>Gün Batımı</div>
                        <div>{value}</div>
                    </div>
                </div>
                
                

                <div className='card-flex'>
                    <div className='flexCards'>
                        <div className='color-grey'>Hissedilen Sıcaklık</div>
                        <div className='fontCardItem'>25.7</div>
                    </div>
                    <div className='flexCards'>
                        <div className='color-grey'>Nem Durumu</div>
                        <div className='fontCardItem'>80%</div>
                    </div>
                    <div className='flexCards'>
                        <div className='color-grey'>Yağmur Durumu</div>
                        <div className='fontCardItem'>60%</div>
                    </div>
                    <div className='flexCards'>
                        <div className='color-grey'>Rüzgar Hızı</div>
                        <div className='fontCardItem'>10km/s</div>
                    </div>
                </div>
            </div>

            <div className='end-section'>
                <div>
                    <div className='marginY'>CTS</div>
                    <div className='marginY'>24°</div>
                    <img className='image3' src={weather} alt="" />
                </div>
                <div>
                    <div className='marginY'>CTS</div>
                    <div className='marginY'>24°</div>
                    <img className='image3' src={weather} alt="" />
                </div>
                <div>
                    <div className='marginY'>CTS</div>
                    <div className='marginY'>24°</div>
                    <img className='image3' src={weather} alt="" />
                </div>
                <div>
                    <div className='marginY'>CTS</div>
                    <div className='marginY'>24°</div>
                    <img className='image3' src={weather} alt="" />
                </div>
                <div>
                    <div className='marginY'>CTS</div>
                    <div className='marginY'>24°</div>
                    <img className='image3' src={weather} alt="" />
                </div>
                
        </div>
        </div>
    </div>
  )
}
