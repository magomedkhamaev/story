import React from "react";
import { useSelector } from 'react-redux';
import axios from '../axios';
import Button from '@mui/material/Button';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import Header from "../components/Header";

const Update = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [isloading, setLoading] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState('');
    const [text, setText] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [tags, setTags] = React.useState('');
    const inputFileRef = React.useRef(null ); 
 
    const isEditing = Boolean(id);

    const handleChangeFile = async (event) => {
        try {
          const file = event.target.files[0];
         const formData = new FormData();
         formData.append('image', file);
         const { data } = await axios.post('/upload', formData);
         setImageUrl(data.url);
        } 
        catch (err) {
         console.warn(err)
         alert('mistake on load file')
        }
    };

    const onSubmit = async () => {
        try {
          setLoading(true);
    
          const fields = {
            title,
            imageUrl,
            tags,
            text
          }; 
    
          const { data } =  await axios.patch(`/auth/edit/${id}`, fields) 
          
    
        //   const _id = isEditing ? id : data._id;
          
        } 
        catch (err) {
        console.warn(err);
        alert('mistake on get edit');
        }
      }
      React.useEffect(() => {
        if (id) {
          axios.get(`/auth/edit/${id}`).then(({data}) => {
            setTitle(data.title);
            setText(data.text);
            setImageUrl(data.imageUrl);
            setTags(data.tags.join(','));
          }).catch(err => {
            console.warn(err);
            alert();
          })
        }
      }, []); 

    return  <>
         <Header /> 
        <div className="wrapper">
            <div className="userInfo">
                <div className="user-pic">
                <input ref={inputFileRef} type="file" onChange={handleChangeFile} />
                 <img src={imageUrl} alt="" className="user-thumb" /> 
                </div>
               
                <h3 className="user-title">Oleg Ivanov</h3>
            <Button onClick={onSubmit} size="large" variant="contained"> 
           {/* {isEditing ? 'Saved' : 'Опубликовать'}  */}
           Publish
           </Button>
            </div>
            
            </div>
        </>
    
};

export default Update;