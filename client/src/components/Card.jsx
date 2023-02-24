import React from 'react';
import { Link } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useSelector, useDispatch } from "react-redux";
import {addItem} from '../redux/slices/profile';
import  PostSkeleton  from './Post/Skeleton';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { fetchRemovePost } from '../redux/slices/posts';
import { Typography } from '@mui/material';
import { UserInfo } from './UserInfo';
import styles from './Post/Post.module.scss';

const Cardd = ({
	id,
	title,
	createdAt,
	imageUrl,
	user,
	viewsCount,
	commentsCount,
	tags,
	children,
	isFullPost,
	isLoading,
	text,
	isEditable,
  }) => {
	const dispatch = useDispatch();
	const onClickAdd = () => {
		const item = {
		  id,
		  title,
		  imageUrl,
		  user,
		  text,
		  tags,
		  viewsCount,
		  commentsCount
		};
		
		dispatch(addItem(item));
		console.log(item);
	   } 

	if (isLoading) {
		return <PostSkeleton />;
	  }


	  const onClickRemove = () => {
		if(window.confirm('are you sure for delete')) {
		  dispatch(fetchRemovePost(id));
		};
		
	  };
 
return  <> 
       		   		
    {/* <div className="stories__card" >
	
       				<div className="card__img">
		   			<img className="card__img-thumb" src={imageUrl}   alt={title} /> 
		   		</div>
		   		<div className="card__data">
					<span className='card-date'>{createdAt}</span>
		   			<span className="card__desc">{tags}</span>
		   			<Link to={`/posts/${id}`}><h3 className="card__title">{title}</h3></Link>
					{isFullPost && (
						<Typography variant="body1" sx={{ mt: 1.5, color: "#000", }}>{text}</Typography>)}   
		   		</div>
              <div className="subcard__info">
		   		<Link to="/user">
				   <div className="subcard__author-text">
		   		<img src={user.avatarUrl} alt="" className="subcard__img"/>
		   		<p className="subcard__name">{user.fullName}</p>
		   		</div>
				</Link>
		   		<div className="subcard__icons">
			<div>
             <Link to={`/posts/${id}/edit`}>
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
              </Link>
               <IconButton onClick={onClickRemove} color="secondary">
              <DeleteIcon />
               </IconButton>
            </div>
		   		</div>
		   	</div>
    		</div> */}
			 <Card sx={{ maxWidth: 280}}>

				   <Grid container spacing={0.25} sx={{m: 0, mt: 1}}>
                      <Grid item xs={7} sx={{ ml: 0.5, display: 'flex'}}>
							<Avatar  aria-label="recipe" 
							src={user.avatarUrl}
							/>
                              
                            
							<Link to={`/user/${id}`}>
								<Box sx={{ml: 2, mt:1}}>
								<Typography sx={{typography: 'subtitle1',}}>{user.fullName}</Typography>
								</Box>
							</Link>
                      </Grid>
                    
                      <Grid item xs={4} sx={{ml: 2.4}}>
					    {isEditable && (
							<>
							<Link to={`/posts/${id}/edit`}>
							<IconButton color="primary">
							  <EditIcon />
							</IconButton>
							</Link>
							<IconButton onClick={onClickRemove} color="secondary">
						 <DeleteIcon />
						  </IconButton>
							</>
						)}
                      </Grid>
					  <Grid item xs={12} sx={{ mt: 1, mb: 1}}>
                         <Link to={`/posts/${id}`}><Typography variant='h4' fontSize={21} fontFamily='revert' fontWeight={500} color='text.primary' textAlign='center'>{title}</Typography></Link>
                      </Grid>
                    </Grid>
                
			 <CardMedia
			 sx={{mt: 1}}
              component="img"
              image={imageUrl}
              alt={title}
             />
			  <CardContent>
			  {isFullPost && (
				<Typography variant="body1" sx={{ mt: 1.5, color: "#000", }}>{text}</Typography>)}   
               </CardContent>
           <CardActions>
		   <IconButton onClick={onClickAdd} aria-label="add to favorites">
             <FavoriteIcon />
           </IconButton>
		   <VisibilityIcon sx={{ml: 2}}/>
			 <span>{viewsCount}</span>
			 {/* <CommentIcon />
			 <span>{commentsCount}</span> */}
			  <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name}>
                <a href={`/tag/${name}`}>#{name}</a>
              </li>
            ))}
          </ul>
		   </CardActions>
	
    		</Card>
			{/* <Box sx={{ display: 'flex' }}>
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                   {user.avatarUrl}
                  </Avatar>
					  <Box sx={{ ml: 2 }}>
					  <Link to={`/posts/${id}`}><h3 className="card__title">{title}</h3></Link>
					  </Box>
					<div>
					<Link to={`/posts/${id}/edit`}>
					 <IconButton color="primary">
					   <EditIcon />
					 </IconButton>
					 </Link>
					  <IconButton onClick={onClickRemove} color="secondary">
					 <DeleteIcon />
					  </IconButton>
					</div>
				   </Box> */}
    
    
    </>
};
export default Cardd;