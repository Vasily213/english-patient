import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import imageNewBlock from '../../assets/img/image-new-block.svg'
import videoNewBlock from '../../assets/img/video-new-block.svg'
import textNewBlock from '../../assets/img/text-new-block.svg'
import audioNewBlock from '../../assets/img/audio-new-block.svg'
import exerciseNewBlock from '../../assets/img/exercise-new-block.svg'
import dialogsNewBlock from '../../assets/img/dialogs-new-block.svg'
import cardsNewBlock from '../../assets/img/cards-new-block.svg'

import TabPanel from './TabPanel';
import SearchInput from './SearchInput';
import CheckboxLine from './CheckboxLine';
import CardBlock from './CardBlock';
import CardOfNewBlock from './CardOfNewBlock';


const DATA = [
    {
        title: "Изображение",
        src: imageNewBlock
    },
    {
        title: "Видео",
        src: videoNewBlock
    },
    {
        title: "Текст",
        src: textNewBlock
    },
    {
        title: "Аудио",
        src: audioNewBlock
    },
    {
        title: "Упражнение",
        src: exerciseNewBlock
    },
    {
        title: "Диалоги",
        src: dialogsNewBlock
    },
    {
        title: "Карточки",
        src: cardsNewBlock
    }
]

const DATA_CHECKBOXES = [
    {
        name: "my",
        label: "Моё"
    },
    {
        name: "open_source",
        label: "Общее"
    },
    {
        name: "headers",
        label: "Заголовки"
    },
    {
        name: "content",
        label: "Содержимое"
    },
    {
        name: "tags",
        label: "Теги"
    }
]

const DATA_TAB2_LABELS = [
    {
        label: "Видео",
        count: 0
    },
    {
        label: "Изображения",
        count: 0
    },
    {
        label: "Аудио",
        count: 0
    },
    {
        label: "Упражнения",
        count: 0
    },
    {
        label: "Диалоги",
        count: 0
    },
    {
        label: "Карточки",
        count: 0
    }
]

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      backgroundColor: "white",
      width: '80vw'
    },
    card: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    tabs: {
        backgroundColor: "#8C63A9",
        color: 'white'
    },
    tabContent: {
        backgroundColor: "#F8F8F8",
        borderRadius: "0px 0px 4px 4px",
        maxHeight: "90vh",
        overflowX: "hidden",
        '&::-webkit-scrollbar' : {
            width: "10px"
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '4px',
            backgroundColor: '#C0C0C0'
        }
    },
    searchControlPanel: {
        margin:"40px auto",
        width: "80%",
    },
    tabs2Header: {
        backgroundColor: "white"
    },
    tabs2Bar: {
        boxShadow: "0px 5px 10px -5px rgba(34, 60, 80, 0.6)",
    },
    tabs2Tab: {
        fontWeight: "600"
    },
    tabContent2: {
        backgroundColor: "#F8F8F8",
        borderRadius: "0px 0px 4px 4px",
        maxHeight: "552px",
        overflowX: "hidden",
        '&::-webkit-scrollbar' : {
            width: "10px"
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '4px',
            backgroundColor: '#C0C0C0'
        }
    },
}));

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
      value: index,
      style: { textTransform: "none", fontSize: "17px", fontWeight: "500" }
    };
}

function a11lyProps2(index){
    return {
        id: `full-width-tab2-${index}`,
        'aria-controls': `full-width2-tabpanel-${index}`,
        value: index
    };
}



const FormAddBlockModal = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedTab1, setSelectedTab1] = React.useState(0);
    const [selectedTab2, setSelectedTab2] = React.useState(0);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange1 = (event, newValue) => {
        setSelectedTab1(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setSelectedTab2(newValue);
    }

    return (
        <div>
            <Button color="primary" onClick={handleOpen}>
                OPEN MODAL
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>         
                        <Tabs
                            className={classes.tabs}
                            value={selectedTab1}
                            onChange={handleChange1}
                            indicatorColor="secondary"
                            variant="fullWidth"
                        >
                            <Tab label="Создать новый блок" {...a11yProps(0)} />
                            <Tab label="Найти существующий блок" {...a11yProps(1)} />
                        </Tabs>
                        

                        <TabPanel className={classes.tabContent} value={selectedTab1} index={0}>
                            <Grid container spacing={7}>
                                {
                                    DATA.map(el => 
                                    <Grid key={el.title} item xs={12} sm={6} md={4}>
                                        <Paper className={classes.card}>
                                            <CardOfNewBlock title={el.title} src={el.src} />
                                        </Paper>
                                    </Grid>)
                                }                           
                            </Grid>                    
                        </TabPanel>

                        <TabPanel className={classes.tabContent} value={selectedTab1} index={1}>
                            <div className={classes.searchControlPanel}>
                                <SearchInput />     
                                <CheckboxLine data={DATA_CHECKBOXES} />
                                                             
                            </div>

                            <div className={classes.tabs2Header} >
                                <Tabs
                                    value={selectedTab2}
                                    onChange={handleChange2}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    className={classes.tabs2Bar}
                                >
                                    {
                                        DATA_TAB2_LABELS.map((tab, ind) => 
                                            <Tab key={ind} className={classes.tabs2Tab} label={tab.label + `(${tab.count})`} {...a11lyProps2(ind)} />
                                        )
                                    }
                                </Tabs>
                            </div>
                                
                            <TabPanel className={classes.tabContent2} style={{backgroundColor: "white"}} value={selectedTab2} index={0}>
                                <CardBlock 
                                    title="Header" 
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  sed do eiusmod tempor  sed do eiusmod tempor sed do eiusmod tempor " 
                                    tags={["Robots", "Future", "Technology"]} 
                                />   
                                <CardBlock 
                                    title="Header" 
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  sed do eiusmod tempor  sed do eiusmod tempor sed do eiusmod tempor " 
                                    tags={["Robots", "Future", "Technology"]} 
                                /> 
                                <CardBlock 
                                    title="Header" 
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  sed do eiusmod tempor  sed do eiusmod tempor sed do eiusmod tempor " 
                                    tags={["Robots", "Future", "Technology"]} 
                                />  
                                <CardBlock 
                                    title="Header" 
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  sed do eiusmod tempor  sed do eiusmod tempor sed do eiusmod tempor " 
                                    tags={["Robots", "Future", "Technology"]} 
                                />  
                                <CardBlock 
                                    title="Header" 
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  sed do eiusmod tempor  sed do eiusmod tempor sed do eiusmod tempor " 
                                    tags={["Robots", "Future", "Technology"]} 
                                />  
                                <CardBlock 
                                    title="Header" 
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  sed do eiusmod tempor  sed do eiusmod tempor sed do eiusmod tempor " 
                                    tags={["Robots", "Future", "Technology"]} 
                                />  
                                <CardBlock 
                                    title="Header" 
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  sed do eiusmod tempor  sed do eiusmod tempor sed do eiusmod tempor " 
                                    tags={["Robots", "Future", "Technology"]} 
                                />         
                            </TabPanel>

                        </TabPanel>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default FormAddBlockModal;
