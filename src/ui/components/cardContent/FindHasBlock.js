import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from '../../../components/formAddBlock/TabPanel';
import SearchInput from '../../../components/formAddBlock/SearchInput';
import CheckboxLine from '../../../components/formAddBlock/CheckboxLine';
import CardBlock from '../../../components/formAddBlock/CardBlock';

function a11lyProps2(index){
  return {
      id: `full-width-tab2-${index}`,
      'aria-controls': `full-width2-tabpanel-${index}`,
      value: index
  };
}

const useStyles = makeStyles((theme) => ({
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


const FormHasBlock = () => {
  const classes = useStyles();
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

const [selectedTab2, setSelectedTab2] = React.useState(0);

    const handleChange2 = (event, newValue) => {
        setSelectedTab2(newValue);
    }

    return (
      
      <>
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
      </>
    );
}

export default FormHasBlock;