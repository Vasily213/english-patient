import React from 'react';
import {Button, Card, CardContent, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        padding: '25px',
    },
    content: {
        marginTop: '-25px',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '24px',
        color: '#000000',
        maxWidth: '935px'
    },
    header: {
        fontSize: '24px',
    },
    text: {
        fontSize: '18px'
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },
    video: {
        marginTop: '20px'
    },
    btn: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '24px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.16px',
        color: '#FFFFFF',
        background: '#8C63A9',
        borderRadius: '4px',
        marginTop: '50px',
        '&:hover': {
            backgroundColor: '#8C63A9 !important',
        },
    }
});

const StartCard = ({option, onStart, close}) => {
    const classes = useStyles();
    return (
            <Card className={classes.root}>
                {/* <CardHeader
                    action={
                        <IconButton onClick={close} aria-label="settings">
                            <CloseIcon/>
                        </IconButton>
                    }
                /> */}
                <CardContent className={classes.content}>
                    <span className={classes.header}>{option.name} [{option.words[0].word}]?</span>
                    <p className={classes.text}>
                        Посмотрите видеофрагмент несколько раз. Запомните фразу и отработайте произношение. Нажмите
                        "начать тестирование". Повторяйте фразу каждый раз с самого начала, заменяя слова в квадратных
                        скобках теми, которые вы видите на экране. Послушайте результат. Если все в порядке, нажмите
                        «сохранить». Если нет, сделайте запись еще раз. Время на повтор каждой карточки ограничено.
                    </p>
                    <div className={classes.center}>
                        <video
                            className={classes.video}
                            width="643"
                            controls
                            src={option.srcVideo}
                        />
                    </div>
                    <div className={classes.center}>
                        <Button onClick={onStart} className={classes.btn}>НАЧАТЬ ТЕСТИРОВАНИЕ</Button>
                    </div>
                </CardContent>
            </Card>
    );
}


export default StartCard;
