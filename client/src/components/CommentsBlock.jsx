import React from "react";
// import { useSelector } from "react-redux";
import  SideBlock  from "./SideBlock";
import axios from "../axios";
import  PostSkeleton  from './Post/Skeleton';
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Skeleton from "@mui/material/Skeleton";
import { Index } from "./AddComment";

// const CommentsBlock = ({ items, children, isLoading = true }) => {
//   return (
//     <SideBlock title="Комментарии">
//       <List>
//         {(isLoading ? [...Array(5)] : items).map((obj, index) => (
//           <React.Fragment key={index}>
//             <ListItem alignItems="flex-start">
//               <ListItemAvatar>
//                 {isLoading ? (
//                   <Skeleton variant="circular" width={40} height={40} />
//                 ) : (
//                   <Avatar alt={obj.user.fullName} src={obj.user.avatarUrl} />
//                 )}
//               </ListItemAvatar>
//               {isLoading ? (
//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <Skeleton variant="text" height={25} width={120} />
//                   <Skeleton variant="text" height={18} width={230} />
//                 </div>
//               ) : (
//                 <ListItemText
//                   primary={obj.user.fullName}
//                   secondary={obj.text}
//                 />
//               )}
//             </ListItem>
//             <Divider variant="inset" component="li" />
//           </React.Fragment>
//         ))}
//       </List>
//       {children}
//     </SideBlock>
//   );
// };

const CommentsBlock = () => { 
  const [items, setData] = React.useState();
  // const [com, setCom] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
   React.useEffect(() => {
        axios.get('https://story-kyev.onrender.com/allcomments').then(({data}) => {
           setData(data);
          //  setCom(com);
          // console.log(items); 
          setLoading(false); 
        }).catch((err) => {
          console.warn(err);
          alert('mistake on get arcticle');
        });
      }, []);

      // if (isLoading) {
      //   return <PostSkeleton />;
      // }

  return (
    <SideBlock title="Комментарии">
      <List>
        {(isLoading ? [...Array(5)] : items).map((obj, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                {isLoading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <Avatar alt={obj.user.fullName} src={obj.user.avatarUrl} />
                )}
              </ListItemAvatar>
              {isLoading ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Skeleton variant="text" height={25} width={120} />
                  <Skeleton variant="text" height={18} width={230} />
                </div>
              ) : (
                <ListItemText
                  primary={obj.user.fullName}
                  secondary={obj.coment}
                />
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
      {/* {children} */}
      <Index/>
    </SideBlock>
  );
};

export default CommentsBlock;