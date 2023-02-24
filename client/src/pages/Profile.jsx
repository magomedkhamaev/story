// import { Skeleton } from "@mui/material";
import axios from "../axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
 import { fetchAuthMe, setData } from "../redux/slices/auth";
// import Author from "./Author";
// import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { TextFields } from "@mui/icons-material";
import { Card, Grid, Skeleton, TextField } from "@mui/material";
import Cardd from "../components/Card";
import { Box } from "@mui/system";
//import { setData, selectIsAuth } from '../redux/slices/auth';
// import { fetchStoryMe } from '../redux/slices/auth';

const Profile = () => {
    const dispatch = useDispatch();
    const {data, status} = useSelector((state) => state.auth);
    const isDataLoading = status === 'loading';
    const {items} = useSelector((state) => state.profile);
    // const {id} = useParams();
    //  const data = useSelector((state) => state.data);
    // // const isAuth = useSelector(selectIsAuth);
    //  const [me, setMe] = React.useState('');

            // React.useEffect(() => {
            //      dispatch(fetchStoryMe());   
            //    }, [])
       
    //  React.useEffect(() => {
    //      async function fetchMe() {
    //        try {
    //         const { data } = await axios.get('/auth/me');
    //         setMe(data);
    //        } 
    //        catch (error) {
    //          alert('Ошибка при получении me!');
            
    //        }
    //     }
    
    //      fetchMe();
    //    }, []);

    // React.useEffect(() => {
    //     dispatch(fetchAuthMe());
    // }, []);



    return <>
    <Header/>
     {isDataLoading ? <Skeleton/> :  
     <Box sx={{mx: 'auto', maxWidth: 500, mt: 5}}>
        <Card >
    <div className="ver">
    {/* <input type="file" />    */}
    <img className="user-thumb" src={data.avatarUrl} alt="" />
    <h2>{data.fullName}</h2>
    <h2>{data.updatedAt}</h2>
    <TextField  variant="filled" value={data.email} />
    </div> 
     </Card>
     </Box>
    }
    {/* <Cardd/> */}
    <Grid container sx={{columnGap: 2, rowGap: 2, mt: 2, pl: 1}}>
            {items.map((item) => 
            <Cardd key={item.id} {...item}/>
           )}
        </Grid>
    </>
}

export default Profile;