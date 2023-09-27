
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
    { name: 'Your Donation', value: 30 },
    { name: 'Total Donation', value: 70 },
];

const COLORS = ['#FF444A', '#00C49F']; // Define colors for each segment

const Statistics = () => {
    return (
        <div className=' flex justify-center h-[80vh] items-center'>
            <div>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend align="center" verticalAlign="bottom" layout="horizontal" />
            </PieChart>
            </div>
        </div>
    );
};

export default Statistics;