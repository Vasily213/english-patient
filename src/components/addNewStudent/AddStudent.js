import React, {useState} from 'react';
import BoySvg from "../../assets/img/boy.svg"
import GirlSvg from "../../assets/img/girl.svg"
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    List, ListItem, ListItemText,
    makeStyles,
    Modal,
    Typography
} from "@material-ui/core";
import Paper from "../../ui/components/Paper";
import NotificationModal from "../../ui/components/NotificationModal";
import Field from "../../ui/components/Field";
import CloseIcon from '@material-ui/icons/Close';
import "../../index.css"

const data = [{
    title: "Академическое письмо для аспирантов 2 курс",
    startData: "13.10.20",
    finishData: "15.02,21",
    students: [
        {
            imgUrl: GirlSvg,
            surname: "Петрова",
            name: "Мария"
        },
        {
            imgUrl: BoySvg,
            surname: "Рахимов",
            name: "Руслан"
        },
        {
            imgUrl: BoySvg,
            surname: "Норманов",
            name: "Михаил"
        },
        {
            imgUrl: BoySvg,
            surname: "Исупов",
            name: "Антон"
        },
    ]
},
    {
        title: "Английский пациент",
        startData: "13.10.20",
        finishData: "15.02,21",
        students: [
            {
                imgUrl: GirlSvg,
                surname: "Петрова",
                name: "Мария"
            },
            {
                imgUrl: BoySvg,
                surname: "Рахимов",
                name: "Руслан"
            },
        ]
    }]

export const useStylesSignIn = makeStyles((theme) => ({

    submit: {
        marginTop: 23,
        textTransform: "uppercase",
    },
    form: {
        width: 326,
        margin: '13px 32px 72px 32px',
    },
    title: {
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 15,
        lineHeight: "24px"
    },
    secondText: {
        textAlign: 'center',
        marginTop: 4,
        fontWeight: 500
    },
    paper: {
        boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.26), 0px 10px 20px rgba(0, 0, 0, 0.19)',
        top: '50%',
        left: '50%',
        textAlign: "center",
        transform: 'translate(-50%, -50%)',
    },
    textContent: {
        fontSize: 16,
        fontWeight: 550,
        lineHeight: "18.96px",
        fontStyle: "normal",
        margin: '15px 90px 18px 90px',
        width: "316px"
    },
    notification: {
        fontSize: 18,
        fontWeight: 600,
        margin: '20px 60px 50px 60px'
    },
    closeIcon: {
        marginLeft: "87%",
        marginTop: "5%"
    },
    groupsContainer: {},
    studentsGroup: {
        width: "650px",
        boxShadow: "0 6px 6px rgba(0, 0, 0, 0.26), 0 10px 20px rgba(0, 0, 0, 0.19)",
        margin: "10px 22px 16px 22px",
        borderRadius: "4px",
    },
    courseInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    courseButtons: {
        display: "flex",
        flexDirection: "column",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "15px",
        fontFamily: "Roboto",
        lineHeight: "24px",
        color: "#8C63A9",
        textTransform: "uppercase"

    },
    root: {
        width: '100%',
        maxWidth: 690,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
}));


const AddStudent = () => {
    const classes = useStylesSignIn();
    const [openByMail, setOpenByMail] = useState(false);
    const [openByMoodle, setOpenMoodle] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const [openGroupsInMoodle, setOpenGroupsInMoodle] = useState(false);
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleOpenMail = () => {
        setOpenByMail(true);
    };

    const handleCloseMail = () => {
        setOpenByMail(false);
    };

    const handleOpenMoodle = () => {
        setOpenMoodle(true);
    };

    const handleCloseMoodle = () => {
        setOpenMoodle(false);
    };

    const handleOpenNotification = () => {
        setOpenNotification(true);
    };

    const handleOpenGroupsInMoodle = () => {
        setOpenGroupsInMoodle(true);
    };

    const handleCloseGroupsInMoodle = () => {
        setOpenGroupsInMoodle(false);
    };

    return (
        <Paper className={classes.paper}>
            <CloseIcon className={classes.closeIcon}/>
            <Typography className={classes.title} variant="h5">
                Добавить нового студента
            </Typography>
            <div className={classes.form}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleOpenMail}
                >
                    По email
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleOpenMoodle}
                >
                    Из Moodle
                </Button>
                <Modal
                    open={openByMoodle}
                    onClose={() => handleCloseMoodle(false)}
                >
                    <NotificationModal>
                        <Paper className={classes.paper}>
                            <CloseIcon style={{cursor: "pointer"}} className={classes.closeIcon}
                                       onClick={handleCloseMoodle}/>
                            <Typography className={classes.title} variant="h5">
                                Добавить из Moodle
                            </Typography>
                            <Typography className={classes.textContent}>
                                Чтобы добавить студентов из курсов в <br/>Moodle, войдите в свой профиль Moodle
                            </Typography>
                            <div className={classes.form}>
                                <Field label="Moodle Email" name="email"/>
                                <Field label="Moodle Password" name="password"/>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={handleOpenGroupsInMoodle}
                                >
                                    Войти
                                </Button>
                            </div>
                        </Paper>
                    </NotificationModal>
                </Modal>
                <Modal
                    open={openByMail}
                    onClose={() => handleCloseMail(false)}
                >
                    <NotificationModal>
                        <Paper className={classes.paper}>
                            <CloseIcon style={{cursor: "pointer"}} className={classes.closeIcon}
                                       onClick={handleCloseMail}/>
                            <Typography className={classes.title} variant="h5">
                                Добавить студента по email
                            </Typography>

                            <div className={classes.form}>
                                <Field label="Moodle Email" name="email"/>

                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={handleOpenNotification}
                                >
                                    Добавить
                                </Button>
                            </div>
                        </Paper>
                    </NotificationModal>
                </Modal>
                <Modal
                    open={openNotification}
                    onClose={() => setOpenNotification(false)}
                >
                    <NotificationModal>
                        <Typography variant='h5' className={classes.notification}>Студент
                            успешно <br/> добавлен!</Typography>
                    </NotificationModal>
                </Modal>
                <Modal
                    open={openGroupsInMoodle}
                    onClose={() => handleCloseGroupsInMoodle(false)}
                >
                    <NotificationModal>
                        <Paper className={classes.paper}>
                            <CloseIcon style={{cursor: "pointer"}} className={classes.closeIcon}
                                       onClick={handleCloseGroupsInMoodle}/>
                            <Typography className={classes.title} variant="h5">
                                Добавить из Moodle
                            </Typography>
                            <div className={classes.groupsContainer}>
                                {data.map((item, index) => (
                                    <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className={classes.studentsGroup}
                                        >
                                            <Typography className={classes.courseInfo}>
                                                <div style={{textAlign: "left", fontWeight: "700"}}>
                                                    {item.title}
                                                </div>
                                                <div style={{textAlign: "left", color: "#646464"}}>
                                                    {item.startData} - {item.finishData}
                                                </div>
                                            </Typography>
                                            <Typography className={classes.courseButtons}>
                                                <div style={{textAlign: "right"}}>
                                                    Показать участников
                                                </div>
                                                <div style={{textAlign: "right"}}>
                                                    Добавить всех участников
                                                </div>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <List className={classes.root} subheader={<li/>}>
                                                    <li key={index}>
                                                            {item.students.map((student) => (
                                                                <ListItem key={index}>
                                                                    <img style={{height: "40px", width: "40px", borderRadius: "20px", marginRight: "10px"}} src={student.imgUrl} alt="avatar"/>
                                                                    <ListItemText
                                                                        primary={`${student.surname} ${student.name}`}/>
                                                                </ListItem>
                                                            ))}
                                                    </li>
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </div>
                        </Paper>
                    </NotificationModal>
                </Modal>
            </div>
        </Paper>
    );
};

export default AddStudent;
