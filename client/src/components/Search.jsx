// import axios from 'axios';
import React from 'react';
import debounce from "lodash.debounce";
import { TextField } from "@mui/material";
import { setKey } from "../redux/slices/filter";
import { useDispatch } from "react-redux";

const Search =  () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');
    // const [key, setKey] = React.useState('');

    // React.useEffect(() => {

    //     const search = async () => {
    //         try { 
    //             const res = await axios.get(`http://localhost:4444/posts?key=${key}`)
    //             console.log(res);
    //             setSearchValue(res.data.data)
    //             } catch (error) {
    //               console.log(error)
    //             }
    //     }
    //     search()
    // }, [key])
    const updateSearchValue =  React.useCallback(
        debounce((str) => {
        dispatch(setKey(str));
        }, 500), 
        [],
     );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
       };
    //    console.log(value);

    return <>
  
    <TextField  variant="outlined" 
     value={value} 
    //  onChange={(e) => setKey(e.target.value)}  placeholder="Search pizzas..."
    onChange={onChangeInput}  placeholder="Search pizzas..."
    />
    </>
}

export default Search;