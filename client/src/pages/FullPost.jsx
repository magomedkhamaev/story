import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import  Card  from "../components/Card";
import  UserInfo  from "../components/UserInfo";
import  CommentsBlock  from "../components/CommentsBlock";
import axios from "../axios";
import Header from "../components/Header";
import { Box, Paper, Typography } from "@mui/material";
import { Index } from "../components/AddComment";


const FullPost = () => {
  const [data, setData] = React.useState();
 
  const userData = useSelector((state) => state.auth.data);
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();
  // console.log(userData);
  React.useEffect(() => {
    axios.get(`/posts/${id}`).then((res) => {
      setData(res.data);
      // console.log(res.data);
      setLoading(false);
    }).catch((err) => {
      console.warn(err);
      alert('mistake on get arcticle');
    });
  }, []); 
 

 if (isLoading) {
  return <Card isLoading={isLoading} isFullPost/>;
 }

  return (
    <>
      <Header />
      
      <Card
        id={data.id}
        title={data.title}
        imageUrl = {`http://localhost:4444${data.imageUrl}`}
        //imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        user={data.user}
        // createdAt={data.createdAt}
         viewsCount={data.viewsCount}
         commentsCount={2}
         tags={data.tags}
        text={data.text}
        isFullPost>
        <p>
          {data.text}
        </p>
      </Card>
      <>
      {/* <div className="wrapper">
        <div className="img">
        <img className="pic-thumb" src={`http://localhost:4444${data.imageUrl}`} alt="" />
        </div>
      </div>
      <div className="title">
        <h2>{data.title}</h2>
      </div>
       <div className="desc">
        <Typography sx={{ typography: 'body1', fontWeight: 'regular', p: 1.5}}>{data.text}</Typography>
        </div> */}
      </>
       
     
      
       {/* <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий 555555",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
         isLoading={false}
       >
         <Index />
        <UserInfo  key={data.id} {...data.user}/> 
       </CommentsBlock> */}
    </>
  );
};

export default FullPost;