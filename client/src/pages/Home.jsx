import React from "react";
import Header from "../components/Header";
import Cardd from "../components/Card";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from "../redux/slices/posts";
import { Grid } from "@mui/material";
import  CommentsBlock  from "../components/CommentsBlock";
//import Footer from "../componemts/Footer";
// import Sort from "../componemts/Sort";
// import Ganres from "../componemts/Ganres";


const Home = () => {
  const dispatch = useDispatch();
  const {posts, tags} = useSelector((state) => state.posts);
  const {key} = useSelector((state) => state.filter);
  const isPostsLoading = posts.status === 'loading';
  const userData = useSelector((state) => state.auth.data);
  
  // React.useEffect(() => {
  //  dispatch(fetchPosts());
  //  dispatch(fetchTags());
  // }, []);
  //  console.log(posts);
  const getPosts = async () => {
   const search = key  ? `?key=${key}` : '';
   
   dispatch(fetchPosts({search}))
  }

  React.useEffect(() => {
    getPosts();
  }, [key])
  console.log(posts);
  //  const [items, setItems] = React.useState([]);
    //const [ganreId, setGanreId] = React.useState(0)
    //const [sortId, setSortId] = React.useState
    // ({
    //     name: 'алфавиту',
    //     sortProperty: 'name',
    //   });
    // ;

    // React.useEffect(()=> {
    //     const sortBy = sortId.sortProperty.replace('-', '');
    //     const order = sortId.sortProperty.includes('-')  ? 'asc': 'desc';
    //     const ganres = ganreId > 0 ? `genre=${ganreId}` : '';
    //     //const search = searchValue  ? `&search=${searchValue}` : '';
        
       
    //     fetch(`https://6358e229c27556d28945ce93.mockapi.io/story?${ganres}&sortBy=${sortBy}&order=${order}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setItems(data);
    //         })
    //     }, [ganreId, sortId, searchValue]) 

    //  const cards =  items.filter((obj)=> {
    //     if(obj.name.toLowerCase().includes(searchValue.toLowerCase())){
    //         return true
    //     } return false
    //  }).map((obj) => (<Card  key={obj.id} {...obj}/>))

return <>
     <Header/>    
    <Grid container columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}  className="wrapper">
    <h2 className="stories__title">Stories</h2>
       		<p className="stories__subtitle">Storyjoy is an Multimedia storytelling platforms.</p>
       		<div className="stories__filters">
       			{/* <Ganres value={ganreId} onClickGanres={(id)=> setGanreId(id)}/>
                <Sort value={sortId} onClickSort={(i)=> setSortId(i)}/> */}
       	</div>
        <Grid style={{ marginTop: 15, padding: 15 }} container columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} rowGap={2} columnGap={2}>
         {/* {cards} */}
         {/* <Card />
         <Card />
         <Card />
         <Card /> */}
         {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>  
           isPostsLoading ? (
           <Cardd key={index} isLoading={true}/>
           ) : (
            <Cardd
              id={obj._id}
              title={obj.title}
               //imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              imageUrl={`https://story-kyev.onrender.com${obj.imageUrl}`}
              user={obj.user}
              createdAt={obj.createAt}
              viewsCount={obj.viewsCount}
              commentsCount={obj.commentsCount}
              text={obj.text}
              tags={obj.tags}
              isEditable={userData?._id === obj.user._id}
            />
          ),
          )}
         {/* {items.map((obj) => (
            <Card  key={obj.id} {...obj}/>))} */}
        </Grid>
        <Grid xs={4} item>
          {/* <TagsBlock items={tags.items} isLoading={isTagsLoading} /> */}
          {/* <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Вася Пупкин',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'Это тестовый комментарий',
              },
              {
                user: {
                  fullName: 'Иван Иванов',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
              },
            ]}
            isLoading={false}
          /> */}
        </Grid>
        
    </Grid>
    
    
  </>
};
export default Home;