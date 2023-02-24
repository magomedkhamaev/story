import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from "../redux/slices/posts";
import { Grid, Skeleton } from '@mui/material';
import axios from '../axios';
import { useNavigate, Navigate, useParams, Link } from 'react-router-dom';
import UserInfo from '../components/UserInfo';
import { Box } from '@mui/system';

const Author = () => {
  const dispatch = useDispatch();
  // const {posts} = useSelector((state) => state.posts);
  // const isPostsLoading = posts.status === 'loading';
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();
    
  React.useEffect(() => {
    axios.get(`/posts/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    }).catch((err) => {
      console.warn(err);
      alert('mistake on get arcticle');
    });
  }, []);

 if (isLoading) {
  return <UserInfo isLoading={isLoading} isFullAuthor/>;
 }


  // React.useEffect(() => {
  //   dispatch(fetchPosts());
  //  }, []);
  // React.useEffect(() => {
  //   axios.get(`/posts`).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //     setLoading(false);
  //   }).catch((err) => {
  //     console.warn(err);
  //     alert('mistake on get arcticle');
  //   });
  // }, []);
//   React.useEffect(() => {
//     async function fetchUser() {
//       try {
//         const { data } = await axios.get('/posts');
//         setKop(data);
//         console.log(data);
//       } catch (error) {
//         alert('Ошибка при получении пиццы!');
//         // navigate('/');
//       }
//     }

//     fetchUser();
//   }, []);
// if (isLoading) {
//   return <Card isLoading={isLoading}/>;
//  }

   
    return <>
         <Header /> 
        <div className="wrapper">
             
        <Box sx={{mt: 2}}>
        <UserInfo   key={data.id} {...data.user} isFullAuthor/>
        </Box>
             {/* <div className="userInfo">
                <div className="user-pic">
                 <img src='/images/Authorbig11.png' alt="" className="user-thumb" /> 
                </div>
                <h3 className="user-title">title</h3>
            </div>  */}
            {/* {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) => 
              isPostsLoading ? (
              <UserInfo key={index} isLoading={true}/>
           ) : (
            <UserInfo
              id={obj._id}
              user={obj.user}
            />
          ), 
       )} */}
            
            <div className="filters">
                <ul className="filter-list">
                    <li className="filter-items">About</li>
                    <li className="filter-items">Saved list</li>
                    <li className="filter-items">My Story</li>
                </ul>
            </div> 
            {/* <Card
        id={posts.id}
        title={posts.title}
        // imageUrl = {`http://localhost:4444${posts.imageUrl}`}
        //imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        user={posts.user}
        // createdAt={data.createdAt}
        // viewsCount={data.viewsCount}
        // commentsCount={3}
        // tags={data.tags}
        // text={posts.text}
        isFullPost>
        <p>
          {posts.text}
        </p>
      </Card> */}
        </div>
        </>
    
};

export default Author;