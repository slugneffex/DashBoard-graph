import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const SecondBody = () => {



    const RADIAN = Math.PI / 180;
    const PieData = [
        { name: 'A', value: 22, color: '#0D62FF' },
        { name: 'B', value: 20, color: '#8400D5' },
        { name: 'C', value: 7, color: '#ED1C24' },
        { name: 'D', value: 22, color: '#333333' },
        { name: 'E', value: 34, color: '#425F57' },
    ];
    const cx = 110;
    const cy = 100;
    const iR = 50;
    const oR = 100;
    const value = 50;

    const needle = (value, PieData, cx, cy, iR, oR, color) => {
        let total = 0;
        PieData.forEach((v) => {
            total += v.value;
        });
        const ang = 180.0 * (1 - value / total);
        const length = (iR + 2 * oR) / 3;
        const sin = Math.sin(-RADIAN * ang);
        const cos = Math.cos(-RADIAN * ang);
        const r = 5;
        const x0 = cx + 5;
        const y0 = cy + 5;
        const xba = x0 + r * sin;
        const yba = y0 - r * cos;
        const xbb = x0 - r * sin;
        const ybb = y0 + r * cos;
        const xp = x0 + length * cos;
        const yp = y0 + length * sin;

        return [
            <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
            <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
        ];
    };




    const data = [
        {
            name: '3 Jun',
            pv: 2400,
            amt: 2400,
        },
        {
            name: '4 Jun',
            pv: 1398,
            amt: 2210,
        },
        {
            name: '5 Jun',
            pv: 9800,
            amt: 2290,
        },
        {
            name: '6 Jun',
            pv: 3908,
            amt: 2000,
        },
        {
            name: '7 Jun',
            pv: 4800,
            amt: 2181,
        },
        {
            name: '8 Jun',
            pv: 3800,
            amt: 2500,
        },
        {
            name: '9 Jun',
            pv: 4300,
            amt: 2100,
        },
        {
            name: '10 Jun',
            pv: 4300,
            amt: 2100,
        },
        {
            name: '11 Jun',
            pv: 4300,
            amt: 2100,
        },
        {
            name: '12 Jun',
            pv: 4300,
            amt: 2100,
        },
        {
            name: '13 Jun',
            pv: 4300,
            amt: 2100,
        },
        {
            name: '14 Jun',
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <div className='secondbody'>
            <div className='secondbodyCards secondLeftSide'>
                <h5>chapter wise status</h5>
                <PieChart width={250} height={230}>
                    <Pie
                        dataKey="value"
                        startAngle={360}
                        endAngle={0}
                        data={PieData}
                        cx={cx}
                        cy={cy}
                        innerRadius={iR}
                        outerRadius={oR}
                        fill="#8884d8"
                        stroke="none"
                    >
                        {PieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    {needle(value, PieData, cx, cy, iR, oR, '#d0d000')}
                </PieChart>
                <ul className='list'>
                    <li>
                        <div className='listDiv' style={{ backgroundColor: "#0D62FF" }}></div>
                        <p>Finished Traning</p>
                    </li>
                    <li>
                        <div className='listDiv' style={{ backgroundColor: "#8400D5" }}></div>
                        <p>Chapter B</p></li>
                    <li>
                        <div className='listDiv' style={{ backgroundColor: "#ED1C24" }}></div>
                        <p>Havent't Started Yet</p>
                    </li>
                    <li>
                        <div className='listDiv' style={{ backgroundColor: "#333333" }}></div>
                        <p>Chapter A</p>
                    </li>
                    <li>
                        <div className='listDiv' style={{ backgroundColor: "#425F57" }}></div>
                        <p>Chapter C</p>
                    </li>
                </ul>
            </div>
            <div className='secondbodyCards secondRightSide' style={{ height: "350px" }} >
                <div className='secondRightText'>
                    {/* <div className='secondRightTop'> */}
                    <h5>last 14 days active workers in training</h5>
                    <p>last 14 days</p>
                </div>
                <ResponsiveContainer width="100%" height="80%">
                    <BarChart
                        width={500}
                        height={100}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="pv" fill="#0D62FFCC" background={{ fill: '#E7EFFF' }} />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default SecondBody
