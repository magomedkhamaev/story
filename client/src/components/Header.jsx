import React from "react";
import Button from "@mui/material/Button";
//import Search from "./Search";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from '../redux/slices/auth';
import { Avatar, Skeleton } from "@mui/material";
import Search from "./Search";

const Header = () => { 
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);
    const {data, status} = useSelector((state) => state.auth);
	const isDataLoading = status === 'loading';

    const onClickLogout = () => { 
		if(window.confirm('if you sure ')){
		 dispatch(logout());
		 window.localStorage.removeItem('token');
		}
	   }

return <>
    <header className="header">
		<div className="wrapper">
			<nav className="nav">
				<div>
					<img src="images/Group.svg"className="nav__logo-icon"/>
					<Link to="/" className="nav__logo">Storyjoy</Link>
				</div>
				{/* <div className="search__box"> */}
				<Search/> 
					{/* <Search searchValue={searchValue} setSearchValue={setSearchValue}/> */}
					{/* <a href="" className="search__btn"><i className='bx bx-search search__nav'></i></a> */}
				{/* </div> */}
				{/* <ul className="nav__list">
					<li className="nav__item"><a href="Stories.html" className="nav__link">Stories</a></li>
					<li className="nav__item"><a href="" className="nav__link">Authors</a></li>
					<li className="nav__item"><a href="" className="nav__link">Contact Us</a></li>
				</ul> */}
				
				{isAuth ? (
					 <>
					 <div className="nav__icons">
			           <Link to={"/add-post"} className=""><img src="images/opt2.svg" alt="" className="nav__icon-publish"/></Link>
			        </div>
					{isDataLoading ? <Skeleton/> : <Link to={'/profile'}><Avatar sx={{ width: 48, height: 48, mr: 1.5}} src={data.avatarUrl}/></Link>}
					 <div className="nav__button">
					 <Link to="/login">
						<Button onClick={onClickLogout} className="nav__butto" type="button">
						Exit	
						</Button>
						</Link>
				    </div>
					 </>
				) : (
					<>
					<div className="nav__button">
					<Link to="/login">
						<Button className="nav__butto" type="button">
						Sign in	
						</Button>
						</Link>
				</div>
				<div className="nav__button">
					<Link to="/register">
						<Button className="nav__butto" type="button">
						Sign up
						</Button>
						</Link>
				</div>
					</>
				)}
				
				
			</nav>
		</div>
	</header>
</>
};

export default Header;