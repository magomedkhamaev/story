import React from "react";
import axios from "../../axios";
import styles from "./AddComment.module.scss";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";
import  PostSkeleton  from '../Post/Skeleton';

export const Index = () => {
  const navigate = useNavigate();
  const [coment, setComent] = React.useState('');
  const inputFileRef = React.useRef(null );
  const [data, setData] = React.useState();
  const userData = useSelector((state) => state.auth.data);
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams(); 
    // const [com, setCom] = React.useState();
    // const dispatch = useDispatch();
    // const onChange = React.useCallback((value) => {
    //   setText(event.target.value);
    //   console.log(value);
    // }, []);
  
    const onSubmit = async () => {
      try {
        setLoading(true);
        
        const fields = {
          coment
        };
        setComent('')
        const createComment = await axios.post('http://localhost:4444/comments', fields);
  
        //  const _id = data._id;
        //  navigate("/");
      } 
      catch (err) {
      console.warn(err);
      alert('mistake on create comment');
      }
    }
   
    // const options = React.useMemo(
    //   () => ({
    //     spellChecker: false,
    //     maxHeight: '400px',
    //     autofocus: true,
    //     placeholder: 'Введите текст...',
    //     status: false,
    //     autosave: {
    //       enabled: true,
    //       delay: 1000,
    //     },
    //   }),
    //   [],
    // );
    // React.useEffect(() => {
    //     axios.get('http://localhost:4444/allcomments').then((res) => {
    //        setData(res.data);
    //       console.log(res.data);
    //       // setLoading(false);
    //     }).catch((err) => {
    //       console.warn(err);
    //       alert('mistake on get arcticle');
    //     });
    //   }, []);

	// const onClickAdd = () => {
	// 	const commentItem = {
    //       avatarUrl,
	// 	     text,
    //       fullName  
	// 	};
		
	// 	dispatch(addItem(item));
	// 	console.log(item);
	//    } 

  return (
    <>
      <div className={styles.root}>
        <Avatar
          classes={{ root: styles.avatar }}
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <div className={styles.form}>
          <TextField
            value={coment} 
            onChange={(event) => setComent(event.target.value)}
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button  onClick={onSubmit} variant="contained">Отправить</Button>
        </div>
      </div>
    </>
  );
};
