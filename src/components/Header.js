import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import Collapse from '@mui/material/Collapse';
import SortIcon from '@mui/icons-material/Sort';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FeedbackIcon from '@mui/icons-material/Feedback';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import StorageIcon from '@mui/icons-material/Storage';
import TransformIcon from '@mui/icons-material/Transform';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 260;

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDefination, setOpenDefination] = useState(false);
    const [openTransaction, setOpenTransaction] = useState(false);
    const [openCreate,setOpenCreate]=useState(false);
    const [openTransform,setOpenTransform]=useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOpenDefination = () => {
        setOpenDefination(!openDefination)
    }

    const handleOpenTransaction = () => {
        setOpenTransaction(!openTransaction)
    }

    const handleOpenCreate=()=>{
        setOpenCreate(!openCreate)
    }

    const handleOpenTransform=()=>{
        setOpenTransform(!openTransform)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ height:'100px' , boxShadow:'none' , display:'flex' , justifyContent:'center' , width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` , bgcolor:'white' , padding:'0px 20px'}}>
                <Toolbar sx={{display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
                    <Box sx={{marginTop:'20px'}}>
                        <Typography sx={{color:'black' , fontWeight:'550' , fontSize:'25px'}} noWrap component="div">Dashboard</Typography>
                        <Typography sx={{color:'#000000' , opacity:'53%' , fontSize:'18px'}}>Here are today's stats</Typography>
                    </Box>
                    <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'center', gap:1}}>
                        <input style={{height:'56px' , width:'270px' , backgroundColor:'#D9D9D9' , borderRadius:'29px' , fontSize:'18px' , padding:'10px 15px' , border:'1px solid #ddd' , marginRight:'20px'}} placeholder='Search'/>
                        <NotificationAddIcon sx={{color:'black' , marginRight:'30px'}}/>
                        <Avatar>A</Avatar>
                        <Typography sx={{color:'black' , fontSize:'18px' , display:'flex' , alignItems:'center' , gap:1}}>Adwait Teke <ExpandMoreIcon/> </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', borderRadius: '0px 20px 20px 0px', bgcolor: '#222124' } }} variant="permanent" anchor="left">
                <Toolbar sx={{margin:'15px 0px' , display:"flex" , gap:1}}>
                    <img src='\images\Logo.png' alt='company-logo' style={{width:'42px', height:'42px'}}/>
                    <Typography sx={{color:'white' , fontSize:'28px' , fontWeight:'500'}}>Data Fusion</Typography>
                </Toolbar>
                {/* <Divider sx={{ border: '1px solid white' }} /> */}
                <div style={{ overflow: 'scroll', scrollbarWidth: 'none' }}>
                    <List sx={{ display: 'flex', flexDirection: "column", gap: '10px', marginTop: '0px', overflow: 'scroll', scrollbarWidth: 'none', height: 'fit-content' }}>
                        <ListItem sx={{color:'white'}}>
                            <ListItemIcon>
                                <HomeIcon sx={{color:'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary='Home' />
                            {/* <KeyboardArrowRightIcon sx={{color:'white'}}/> */}
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <SpaceDashboardIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Playground' />
                        </ListItem>
                        <ListItem button onClick={handleMenuClick}>
                            <ListItemIcon>
                                <BackupTableIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Ingest'/>
                            {isOpen ? <ExpandMoreIcon sx={{color:'white'}}/> : <KeyboardArrowRightIcon sx={{color:'white'}}/>}
                        </ListItem>

                        <Collapse in={isOpen} timeout="auto" unmountOnExit sx={{ marginLeft: '20px', color: 'white'}}>
                            <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} component="div" disablePadding>
                                <ListItem button onClick={handleOpenDefination}>
                                    <ListItemIcon>
                                        <SortIcon sx={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Definition" />
                                </ListItem>

                                <Collapse sx={{marginLeft:'20px'}} in={openDefination} timeout="auto">
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                {/* <FilterAltIcon sx={{color:'white'}}/> */}
                                                <FontAwesomeIcon style={{color:'white'}} icon={faSitemap}/>
                                            </ListItemIcon>
                                            <ListItemText primary='Structured' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                {/* <FilterAltIcon sx={{color:'white'}}/> */}
                                                <img style={{width:'20px' , height:'20px'}} src='\images\hierarchy.png' alt='#'/>
                                            </ListItemIcon>
                                            <ListItemText primary='Unstructured' />
                                        </ListItem>
                                    </List>
                                </Collapse>

                                <ListItem button onClick={handleOpenTransaction}>
                                    <ListItemIcon>
                                        <SortIcon sx={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Transaction" />
                                </ListItem>
                                <Collapse sx={{marginLeft:'20px'}} in={openTransaction} timeout="auto">
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                {/* <FilterAltIcon sx={{color:'white'}}/> */}
                                                <FontAwesomeIcon style={{color:'white'}} icon={faSitemap}/>
                                            </ListItemIcon>
                                            <ListItemText primary='Structured' />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                {/* <FilterAltIcon sx={{color:'white'}}/> */}
                                                <img style={{width:'20px' , height:'20px'}} src='\images\hierarchy.png' alt='#'/>
                                            </ListItemIcon>
                                            <ListItemText primary='Unstructured' />
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleOpenCreate} sx={{color:'white'}}>
                            <ListItemIcon>
                                {/* <HomeIcon sx={{color:'white'}}/> */}
                                <img style={{width:'30px' , height:'30px'}} src='\images\Image [hidden].png' alt='#'/>
                            </ListItemIcon>
                            <ListItemText primary='Automation' />
                            {openCreate ? <ExpandMoreIcon sx={{color:'white'}}/> : <KeyboardArrowRightIcon sx={{color:'white'}}/>}
                        </ListItem>
                        <Collapse in={openCreate} timeout="auto" unmountOnExit sx={{marginLeft:'20px' , color:'white'}}>
                            <ListItem button onClick={handleOpenTransform}>
                                <ListItemIcon>
                                    <CreateNewFolderIcon sx={{color:'white'}}/>
                                </ListItemIcon>
                                <ListItemText primary='Create'/>
                                {openTransform ? <ExpandMoreIcon sx={{color:'white'}}/> : <KeyboardArrowRightIcon sx={{color:'white'}}/>} 
                            </ListItem>
                            <Collapse unmountOnExit sx={{marginLeft:'20px' , color:'white'}} in={openTransform} timeout='auto'>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <SavedSearchIcon sx={{color:'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Ideate'/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <TransformIcon sx={{color:'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Transform'/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <DomainVerificationIcon sx={{color:'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Test'/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FeedbackIcon sx={{color:'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Human Feedback'/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <StorageIcon sx={{color:'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Deploy'/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ScreenSearchDesktopIcon sx={{color:'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Monitor'/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <GraphicEqIcon sx={{color:'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Knowledge Graph'/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <QueryStatsIcon sx={{color:'white'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Query'/>
                                </ListItem>
                            </List>
                        </Collapse>
                        </Collapse>
                        <ListItem sx={{color:'white'}}>
                            <ListItemIcon>
                                <GroupsIcon sx={{color:'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary='Active' />
                        </ListItem>
                        <Box sx={{marginTop: '130px' }}>
                            <hr style={{ width: '90%' }} />
                            <ListItem sx={{color:'white'}}>
                                <ListItemIcon>
                                    <SettingsIcon sx={{color:'white'}}/>
                                </ListItemIcon>
                                <ListItemText primary='Setting' />
                            </ListItem>
                            <ListItem sx={{color:'white'}}>
                                <ListItemIcon>
                                    <HelpIcon sx={{color:'white'}}/>
                                </ListItemIcon>
                                <ListItemText primary='Help' />
                            </ListItem>
                            <ListItem sx={{color:'white'}}>
                                <ListItemIcon>
                                    <ContactPageIcon sx={{color:'white'}}/>
                                </ListItemIcon>
                                <ListItemText primary='Contact Us' />
                            </ListItem>
                            <ListItem sx={{color:'white'}}>
                                <ListItemIcon>
                                    <LogoutIcon sx={{color:'white'}}/>
                                </ListItemIcon>
                                <ListItemText primary='Logout' />
                            </ListItem>
                        </Box>
                    </List>
                </div>
            </Drawer>
        </Box>
    );
}



//If want to change the height of the Side Menu Bar , change the List height from fit-content to anything you want.