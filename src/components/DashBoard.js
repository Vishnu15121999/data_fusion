import React, { useState } from 'react';
import {Box , MenuItem, Select, Tooltip, Typography} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {Line, ResponsiveContainer , LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, Legend , PieChart , Pie , Cell, Label} from 'recharts';

const data=[
    {date:'2024-04-15', AI:35,Humans:40},
    {date:'2024-04-16', AI:40,Humans:45},
    {date:'2024-04-17', AI:50,Humans:55},
    {date:'2024-04-18', AI:60,Humans:60},
    {date:'2024-04-19', AI:70,Humans:65},
    {date:'2024-04-20', AI:80,Humans:70},
    {date:'2024-04-21', AI:90,Humans:75},
    {date:'2024-04-22', AI:45,Humans:80},
    {date:'2024-04-23', AI:35,Humans:85},
    {date:'2024-04-24', AI:95,Humans:90},
    {date:'2024-04-25', AI:105,Humans:95},
    {date:'2024-04-26', AI:115,Humans:100},
    {date:'2024-04-27', AI:125,Humans:105},
    {date:'2024-04-28', AI:130,Humans:110},
];

const formatDate = (date) => {
    const options = { weekday: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
};
   

const pieData=[
    {name:'Under Writing' , value:2000},
    {name:'Doc Verification' , value:2000},
    {name:'Customer Support' , value:2300},
];

const total=pieData.reduce((acc,curr) => acc + curr.value,0);
let formattedTotal=total.toLocaleString();
if(total > 1000){
    formattedTotal=(total/1000).toFixed(1)+'k'
}


const colors=['#906ADD', '#DF9DDE', '#01AEDA'];



const DashBoard = () => {
    const [selectedWeeks, setSelectedWeeks] = useState(1);
    const [filteredData, setFilteredData] = useState(data);
    const [selectedValue,setSelectedValue]=useState(1);
    const [selectedOption,setSelectedOption]=useState('14');
    const [open,setOpen]=useState(false);
    const [openExport,setOpenExport]=useState(false);
    const [selectedExport,setSelectedExport]=useState('data');

    const handleExportChange=(e)=>{
        setSelectedExport(e.target.value)
    }

    const handleOpenExport=()=>{
        setOpenExport(true)
    }

    const handleCloseExport=()=>{
        setOpenExport(false)
    }

    const handleOptionChange=(e)=>{
        setSelectedOption(e.target.value)
    }

    const handleMenuOpen=()=>{
        setOpen(true)
    }

    const handleCloseMenu=()=>{
        setOpen(false)
    }

    const handleWeekChange = (weeks) => {
        setSelectedWeeks(weeks);

    const handleDaysChange=(e)=>{
        setSelectedValue(e.target.value)
    }
    
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - weeks * 7);
    
        const newData = data.filter((item) => {
          const currentDate = new Date(item.date);
          return currentDate >= startDate;
        });
    
        setFilteredData(newData);
    };

    const interval=selectedOption === '14' ? 1 : 0;

  return (
    <Box sx={{ flexGrow: 1, p:3 , width:'81%' , marginLeft:'275px' , height:'105vh' , display:'flex' , flexDirection:'column' , gap:7 , mt:12 }}>
        <Box sx={{width:'100%' , height:'230px' , display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
            <Box className='active-workflow' sx={{width:'31%' , height:'100%' , backgroundImage:'linear-gradient(#00CBFF,#007A99)' , borderRadius:'35px' , padding:'20px 30px' , display:'flex' , flexDirection:'column' , justifyContent:'space-between' , boxShadow:'10px 10px 15px #ccc'}}>
                <Typography sx={{fontSize:'25px' , fontWeight:'600' , color:'white' , textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Active Workflows</Typography>
                <Box sx={{display:'flex' , gap:2 , alignItems:'center'}}>
                    {/* <ShoppingBagOutlinedIcon sx={{width:'45px' , height:'45px' , color:'white' , bgcolor:'#65E0FF' , padding:'5px 8px' , borderRadius:'10px'}}/> */}
                    <img style={{width:'45px' , height:'45px' , bgcolor:'#65E0FF' , borderRadius:'10px'}} src='\images\Rectangle.png' alt='#'/> 
                    <span style={{fontSize:'20px' , fontWeight:'400' , color:'white' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>731</span>
                </Box>
                <span style={{fontSize:'32px' , fontWeight:'600' , color:'white'}}>$9,320.55</span>
                <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}> 
                    <Box sx={{display:'flex' , alignItems:'center' , gap:1}}>
                    <span><TrendingUpIcon sx={{color:'white'}}/></span>
                    <span style={{fontWeight:'500' , fontSize:'20px' , color:'white'}}>+16.6%</span>
                    </Box>
                    <span style={{fontWeight:'500' , fontSize:'20px' , color:'white'}}>+1.4k this week</span>
                </Box>
            </Box>
            <Box className='decisions' sx={{width:'31%' , height:'100%' , backgroundImage:'linear-gradient(#9970EB,#573F85)' , borderRadius:'35px' , padding:'20px 30px' , display:'flex' , flexDirection:'column' , justifyContent:'space-between' , boxShadow:'10px 10px 15px #ccc'}}>
                <Typography sx={{ fontSize:'25px' , fontWeight:'600' , color:'white' , textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Decisions</Typography>
                <Box sx={{display:'flex' , gap:2 , alignItems:'center'}}>
                    <DashboardOutlinedIcon sx={{width:'45px' , height:'45px' , color:'white' , bgcolor:'#AB9FF4' , padding:'5px 8px' , borderRadius:'10px'}}/>
                    <span style={{fontSize:'20px' , fontWeight:'400' , color:'white' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Avg. time : 7:00 hr</span>
                </Box>
                <span style={{fontSize:'32px' , fontWeight:'600' , color:'white'}}>$12,320</span>
                <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}> 
                    <Box sx={{display:'flex' , alignItems:'center' , gap:1}}>
                    <span><TrendingUpIcon sx={{color:'white'}}/></span>
                    <span style={{fontWeight:'500' , fontSize:'20px' , color:'white'}}>+16.6%</span>
                    </Box>
                    <span style={{fontWeight:'500' , fontSize:'20px' , color:'white'}}>+1.4k this week</span>
                </Box>
            </Box>
            <Box className='humans' sx={{width:'31%' , height:'100%' , backgroundImage:'linear-gradient(#EEA8ED,#886087)' , borderRadius:'35px' , padding:'20px 30px' , display:'flex' , flexDirection:'column' , justifyContent:'space-between' , boxShadow:'10px 10px 15px #ccc'}}>
                <Typography sx={{ fontSize:'25px' , fontWeight:'600' , color:'white' , textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Human</Typography>
                <Box sx={{display:'flex' , gap:2 , alignItems:'center'}}>
                    <PersonOutlineOutlinedIcon sx={{width:'45px' , height:'45px' , color:'white' , bgcolor:'#F3CAF3' , padding:'5px 8px' , borderRadius:'10px'}}/>
                    <span style={{fontSize:'20px' , fontWeight:'400' , color:'white' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>2 Disputed</span>
                </Box>
                <span style={{fontSize:'32px' , fontWeight:'600' , color:'white'}}>$12,320</span>
                <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}> 
                    <Box sx={{display:'flex' , alignItems:'center' , gap:1}}>
                    <span><TrendingDownIcon sx={{color:'white'}}/></span>
                    <span style={{fontWeight:'500' , fontSize:'20px' , color:'white'}}>-12.2%</span>
                    </Box>
                    <span style={{fontWeight:'500' , fontSize:'20px' , color:'white'}}>-213 this week</span>
                </Box>
            </Box>
        </Box>
        <Box sx={{width:'100%' , height:'450px' , display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
            <Box classNam='graph-section' sx={{width:'65.5%' , height:'470px' , display:'flex' , flexDirection:"column" , gap:1, padding:'20px 10px' , boxShadow:'5px 5px 20px #ccc' , paddingRight:'30px' , borderRadius:'5px'}}>
                <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
                    <Typography sx={{fontWeight:'600' , fontSize:'25px'}}>Active Workflows (Improvements)</Typography>
                    {/* <Button sx={{color:'black'}}>Export Data</Button> */}
                    <Select sx={{boxShadow: "none",".MuiOutlinedInput-notchedOutline": { border: 0 },"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{border: 0,},"&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border: 0,},}} 
                    value={selectedExport} onChange={handleExportChange} displayEmpty open={openExport} onOpen={handleOpenExport} onClose={handleCloseExport}> 
                        <MenuItem value='data'>Export Data</MenuItem>
                        <MenuItem value='excel'>Excel</MenuItem>
                        <MenuItem value='word'>Word</MenuItem>
                        <MenuItem value='pdf'>PDF</MenuItem>
                    </Select>
                    {/* <Button sx={{color:'black'}} onClick={()=>handleWeekChange(2)}>Last 14 Days</Button>
                    <Button sx={{color:'black'}} onClick={()=>handleWeekChange(1)}>Last 7 Days</Button> */}
                    <Select sx={{boxShadow: "none",".MuiOutlinedInput-notchedOutline": { border: 0 },"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{border: 0,},"&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border: 0,},}} 
                    variant="outlined" value={selectedOption} onChange={handleOptionChange} displayEmpty open={open} onOpen={handleMenuOpen} onClose={handleCloseMenu}>
                        <MenuItem onClick={()=>handleWeekChange(2)} value='14'>Last 14 Days</MenuItem>
                        <MenuItem onClick={()=>handleWeekChange(1)} value='7'>Last 7 Days</MenuItem>
                    </Select>
                </Box>
                <Box sx={{backgroundColor:'white'}}>
                    {/* <img style={{width:'95%' , height:'290px'}} src='\images\bar-chart (1).png' alt='#'/> */}
                    <ResponsiveContainer width="100%" height={380}>
                        <RechartsLineChart data={filteredData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                            <XAxis dataKey="date" tickFormatter={formatDate} interval={interval}/>
                            <YAxis />
                            <Tooltip />
                            <Legend wrapperStyle={{paddingBottom:'25px' , display:'flex' , alignItems:'center' , justifyContent:'center'}} iconType='rect' iconSize={20} layout='horizontal' align='center' verticalAlign='top'/>
                            <Line type="monotone" dataKey="AI" stroke="#CB0C9F" strokeWidth={2} name='AI assisted'/>
                            <Line type="monotone" dataKey="Humans" stroke="#82ca9d" strokeWidth={2} name='Human assisted'/>
                        </RechartsLineChart>
                    </ResponsiveContainer>
                </Box>
            </Box>
            <Box classNam='donut-section' sx={{width:'30%' , height:'470px' , bgcolor:'white' , boxShadow:'5px 5px 20px #ccc' , display:'flex' , flexDirection:'column' , alignItems:'center' , justifyContent:'space-around' , padding:'10px' , borderRadius:'5px'}}>
                <Typography sx={{fontWeight:'600' , fontSize:'25px'}}>Top Categories</Typography>
                {/* <img src='\images\Frame 2 (2).png' alt='#' style={{width:'205px' , height:'205px'}}/> */}
                <ResponsiveContainer width='100%'>
                    <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} fill="#8884d8" paddingAngle={2} dataKey="value">
                            {pieData.map((entry,index)=>(
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
                            ))}
                        </Pie>
                        <Legend layout='vertical'/>
                        {<text x={165} y={175} textAnchor='middle' dominantBaseline='top' fontSize='25' style={{fontWeight:'600'}}>${formattedTotal}</text>}
                    </PieChart>
                </ResponsiveContainer>
                {/* <Box>
                    <p style={{fontSize:'15px' , color:'#A6A8B1'}}>- Under Writing</p>
                    <p style={{fontSize:'15px' , color:'#A6A8B1'}}>- Doc Verificaiton</p>
                    <p style={{fontSize:'15px' , color:'#A6A8B1'}}>- Customer Support</p>
                </Box> */}
            </Box>
        </Box>
    </Box>
  )
}

export default DashBoard;