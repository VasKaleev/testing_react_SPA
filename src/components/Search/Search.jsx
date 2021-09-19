import { Children } from "react";
import classes from "./Search.module.css";
import cn from "classnames";
const Search = (props)=> {
    const {
        value,
        onChange,
        children='Search',
        placeholder='search...',
    } = props;
    const inputClass=cn({
       [classes.input] : true,
       [classes.filled] : value.length,
    });
    return (
        <label className={classes.label}>
           {children}
          <input
            className={inputClass}
            type='text'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </label>    
    )
}

export default Search