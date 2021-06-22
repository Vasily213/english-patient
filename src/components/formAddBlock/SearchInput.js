import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    searchInputBlock: {
        display: "flex",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "4px",
        boxSizing: "border-box",
        border: "1px solid #8C63A9",
        borderRight: "none"
    },
    searchInput: {
        width: "100%",
        fontSize: "16px",
        marginLeft: "20px"
    },
    iconButton: {
        backgroundColor: "#8C63A9",
        borderRadius: "0px 4px 4px 0px",
        color: "white",
        padding: "6px 8px",
        '&:hover' : {
            backgroundColor: "#8C63A9"
        }
    },
}));

const SearchInput = props => {
    const classes = useStyles();

    return (
        <div className={classes.searchInputBlock}>
            <InputBase
                className={classes.searchInput}
                placeholder="Что вы ищете?"
            />
            <IconButton type="submit" className={classes.iconButton}>
                <SearchIcon />
            </IconButton>
        </div>
    )
}

export default SearchInput