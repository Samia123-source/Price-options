
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineCharts = () => {

    const subMarksData = [
  { "id": 1, "name": "Ayesha Rahman", "physics": 78, "chemistry": 82, "math": 91 },
  { "id": 2, "name": "Rahim Uddin", "physics": 85, "chemistry": 76, "math": 88 },
  { "id": 3, "name": "Nusrat Jahan", "physics": 92, "chemistry": 89, "math": 95 },
  { "id": 4, "name": "Tanvir Hasan", "physics": 70, "chemistry": 74, "math": 80 },
  { "id": 5, "name": "Sadia Ahmed", "physics": 88, "chemistry": 91, "math": 86 },
  { "id": 6, "name": "Mehedi Hasan", "physics": 65, "chemistry": 68, "math": 72 },
  { "id": 7, "name": "Fariha Islam", "physics": 90, "chemistry": 85, "math": 93 },
  { "id": 8, "name": "Imran Hossain", "physics": 76, "chemistry": 80, "math": 79 },
  { "id": 9, "name": "Rafiq Ahmed", "physics": 83, "chemistry": 87, "math": 84 },
  { "id": 10, "name": "Mim Chowdhury", "physics": 95, "chemistry": 92, "math": 98 }
]
    return (
        <div>
            <LChart width={800} height={500} data={subMarksData}>
            <XAxis dataKey='name'/>
            <YAxis></YAxis>
            <Line dataKey='math' stroke='red'></Line>
            <Line dataKey='physics' stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineCharts;