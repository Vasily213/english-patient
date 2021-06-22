import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {makeStyles} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';


const DropZoneElement = ({record, modal, errors, visible}) => {
    const classes = useStyles();
    const [files, setFiles] = useState([]);
    const [upload, setUpload] = useState(false);

    const {getRootProps, getInputProps,isDragActive} = useDropzone({
        accept: `${modal}/*`,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(
                file => 
                    Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
            setUpload(true);
            record({name: modal, output: acceptedFiles[0]});
        }
    });

    const thumbs = files.map(file => (
        <div className={classes.thumb} key={file.name}>
            <div className={classes.thumbInner}>
                {modal === 'video' && (
                    <video
                        controls
                        src={file.preview}
                    />
                )}
                {modal === 'audio' && (
                    <audio
                        controls
                        src={file.preview}
                    />
                )}
                {modal === 'image' && (
                    <img
                        src={file.preview}
                        className={classes.img}
                        alt=""
                    />
                )}
            </div>
        </div>
    ));
    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section className="container">
            <div {...getRootProps({className: 'dropzone'})} className={classes.dropzone}>
                {
                    upload ? (        
                        <>
                            <aside className={classes.thumbsContainer}>{thumbs}</aside>
                            {modal === 'video' && <Button style={{display: 'block', textAlign: 'center'}} color='primary'>Выбрать кадр</Button>}
                        </>
                    ) : (
                        isDragActive ? (
                            <div className="hoverUpload">
                                <AttachFileIcon className={classes.icon}/>
                            </div>
                        ) : (
                            <div className={`${classes.text} ${errors && errors[`${modal}`] ? classes.errors : ''}`}>
                                <input name={modal} { ...getInputProps() } />
                                <div className={classes.centerAligment}>
                                    <CloudUploadIcon className={classes.primary} />
                                    <p>Перетащите сюда файл для загрузки или </p>
                                    <p className={classes.primary}>загрузите его с устройства</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </section>
    );
}

const useStyles = makeStyles((theme) => ({
    thumbsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 16
    },
    errors: {
        border: '1px solid red !important',
    },
    thumb: {
        display: 'inline-flex',
        borderRadius: 2,
        marginBottom: 8,
        marginRight: 8,
        width: 300,
        height: 200,
        padding: 4,
        boxSizing: 'border-box'
    },
    thumbInner: {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
    },
    img: {
        display: 'block',
        width: '100%',
        height: '100%'
    },
    text: {
        display: 'flex',
        textAlign: 'center',
        padding: '10px',
        border: `1px dashed ${theme.palette.primary.main}`
    },
    primary: {
        color: theme.palette.primary.main,
    },
    dropzone: {
        cursor: 'pointer'
    },
    icon: {
        color: theme.palette.primary.main,
        width: '30%',
        height: '30%',
        display: 'block',
        margin: '0 auto',
        border: `1px dashed ${theme.palette.primary.main}`
    },
    centerAligment: {
        display: 'block',
        margin: '0 auto', 
    },
    error: {
        color: 'red',
        margin: theme.spacing(2),
    }
  }));

  export default DropZoneElement;