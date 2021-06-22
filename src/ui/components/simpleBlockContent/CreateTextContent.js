import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SaveIcon from '@material-ui/icons/Save';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import CloseIcon from "@material-ui/icons/Close";
import handleOptions from '../../../helpers/optionsForCreationBlock';

const useStyles = makeStyles({
    root: {
        padding: '25px',
    },
    dialog: {
        // maxWidth: '1000px'
    },
    content: {
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        alignItems: 'center',
    },
    header: {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '24px',
        textAlign: 'center',
        color: '#000000',
    },
    quill: {
        marginTop: 10,
        width: '100%',
        height: 235,
        // border: '1px solid rgba(0, 0, 0, 0.5)',
        // boxSizing: 'border-box',
        // borderRadius: '0px 4px 4px 4px',
    },
    btn: {
        width: '110',
        marginRight: '10px',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '24px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '0.16px',
        color: '#FFFFFF',
        background: '#8C63A9',
        borderRadius: '4px',
        marginTop: 80,
        marginBottom: 10,
        '&:hover': {
            backgroundColor: '#8C63A9 !important',
        },
    }
});

const CreateTextContent = ({handleClose, modal="text"}) => {
    const classes = useStyles();
    const [text, setText] = useState('');
    
    const formats = [
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ]
    const modules = {
        toolbar: [
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'},
                {'indent': '-1'}, {'indent': '+1'}],
            ['link'],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        }
    }

    const onChange = (text) => {
        setText(text);
    } 

    const onSave = ()=>{
        console.log(text);
        handleClose();
    }
    return (
        <>
            <div className={classes.content}>
                <ReactQuill className={classes.quill} formats={formats} modules={modules} onChange={(e) => onChange(e)}/>
                <div style={{display: 'inline-flex'}}>
                    <Button onClick={() => handleClose()} className={classes.btn}><CloseIcon/> Отмена</Button>
                    <Button onClick={() => onSave()} disabled={text === ''} className={classes.btn}><SaveIcon/> {handleOptions(modal).button}</Button>
                </div>
            </div>
        </>
    );
}


export default CreateTextContent;
