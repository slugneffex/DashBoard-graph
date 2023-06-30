import React from 'react'
import { PieChart, Pie } from 'recharts'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';


const ThirdBody = () => {

    const data = [
        { name: 'Passed', value: 700, fill: "#018E42", workers: 1423 },
        { name: 'Failed', value: 300, fill: "#ED1C24", workers: 134 },
    ];

    const barData = [
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
        <div className='thirdbody'>

            <div className='thirdLeftPart'>
                <h5>monthly training activity</h5>
                <div className='paraText'>
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.96944 3.73266L7.96944 13.9275" stroke="#018E42" stroke-width="1.63117" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.87494 7.84442L7.96917 3.73252L12.0641 7.84442" stroke="#018E42" stroke-width="1.63117" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p>16% more enrollees this month</p>
                </div>
                <div>
                    <form>
                        <input type="radio" id="courseA" name="monster" defaultValue="K" />
                        <label htmlFor="courseA" className='radioMainLabel'>course a  </label><br />
                        <label htmlFor="courseA" className='radioSecondaryLabel'>23 workers took this course this week</label>
                        <br />

                        <input type="radio" id="courseB" name="monster" defaultValue="K" />
                        <label htmlFor="courseB" className='radioMainLabel'>course b </label><br />
                        <label htmlFor="courseB" className='radioSecondaryLabel'>253 workers took this course this week</label>
                        <br />

                        <input type="radio" id="courseC" name="monster" defaultValue="K" />
                        <label htmlFor="courseC" className='radioMainLabel'>course c </label><br />
                        <label htmlFor="courseC" className='radioSecondaryLabel'>253 workers took this course this week</label>
                        <br />

                        <input type="radio" id="courseD" name="monster" defaultValue="K" />
                        <label htmlFor="courseD" className='radioMainLabel'>course d </label><br />
                        <label htmlFor="courseD" className='radioSecondaryLabel'>253 workers took this course this week</label>
                        <br />
                    </form>
                </div>
            </div>


            <div className='thirdmiddle'>
                <h5>quiz passing %</h5>
                <div className='imgthird'>

                    <PieChart width={200} height={250} >
                        {/* <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="fill" /> */}
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    </PieChart>

                    <ul>

                        {
                            data.map((data) => (
                                <li className='flex flex-row items-start py-1'>
                                    <div className='listDivthirdmiddle' style={{ backgroundColor: `${data.fill}` }}></div>

                                    <div >
                                        <p className='font-bold'>{data.name}</p>
                                        <p>{data.workers + "workers"}</p>
                                    </div>

                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>

            <div className='thirdlast'>
                <div className='thirdLastTop'>
                    <h5>daily training completions</h5>
                    <p>last 7 days</p>
                </div>

                <ResponsiveContainer width="100%" height="80%">
                    <BarChart
                        width={500}
                        height={100}
                        data={barData}
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

export default ThirdBody
