import { Skeleton } from '@mui/material';
import React from 'react';
import styles from './UserInfo.module.scss';
import PostSkeleton from '../Post/Skeleton';

const UserInfo = ({isFullAuthor, _id, isLoading, avatarUrl, fullName, additionalText }) => {
  if (isLoading) {
		return <PostSkeleton />;
	  }

  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={avatarUrl || '/noavatar.png'} alt={fullName} />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>Lorem ipsum dolor sit.</span>
      </div>
    </div>
  );
};

export default UserInfo;

// const UserInfo = ({id, user, isLoading}) => {
  
//   if (isLoading) {
// 		return <Skeleton />;
// 	  }

//   return (
//     <div className={styles.root}>
//       <img className={styles.avatar} src={user.avatarUrl} alt={user.fullName} />
//       <div className={styles.userDetails}>
//         <span className={styles.userName}>{user.fullName}</span>
//       </div>
//     </div>
//   );
// };

// export default UserInfo;