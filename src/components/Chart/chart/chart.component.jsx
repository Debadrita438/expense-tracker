import ChartBar from '../chart-bar/chart-bar.component';

import './chart.styles.css';

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(point => point.value);
    const totalMaxValue = Math.max(...dataPointValues);
    
    return (  
        <div className='chart'>
            {
                dataPoints.map(dataPoint => 
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaxValue}
                        label={dataPoint.label}
                    />
                )
            }
        </div>
    );
}
 
export default Chart;