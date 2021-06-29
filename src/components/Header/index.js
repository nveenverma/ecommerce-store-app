import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { login, signout, signup as _signup } from "../../actions";
import {
	Modal,
	MaterialInput,
	MaterialButton,
	DropdownMenu,
} from "../MaterialUI";
import flipkartLogo from "../../images/logo/flipkart.png";
import goldenStar from "../../images/logo/golden-star.png";
import "./style.css";
import Cart from "../UI/cart";

const Header = (props) => {
	const [loginModal, setLoginModal] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [signup, setSignup] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const auth = useSelector((state) => state.auth);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		if (auth.authenticate) {
			setLoginModal(false);
		}
	}, [auth.authenticate]);

	const userSignup = () => {
		const user = { firstName, lastName, email, password };
		if (
			firstName === "" ||
			lastName === "" ||
			email === "" ||
			password === ""
		) {
			return;
		}

		dispatch(_signup(user));
	};

	const userLogin = () => {
		if (signup) {
			userSignup();
		} else {
			dispatch(login({ email, password }));
		}
	};

	const userLogout = () => {
		dispatch(signout());
	};

	const renderLoggedInMenu = () => {
		return (
			<DropdownMenu
				menu={
					<a href="/#" className="fullName">
						{auth.user.firstName}
					</a>
				}
				menus={[
					{ label: "My Profile", href: "", icon: null },
					{ label: "SuperCoin Zone", href: "", icon: null },
					{ label: "Flipkart Plus Zone", href: "", icon: null },
					{
						label: "Orders",
						href: "/account/orders",
						icon: null,
					},
					{ label: "Wishlist", href: "", icon: null },
					{ label: "My Chats", href: "", icon: null },
					{ label: "Coupons", href: "", icon: null },
					{ label: "Rewards", href: "", icon: null },
					{ label: "Notifications", href: "", icon: null },
					{ label: "Gift Cards", href: "", icon: null },
					{
						label: "Logout",
						href: "",
						icon: null,
						onClick: userLogout,
					},
				]}
			/>
		);
	};

	const renderNonLoggedInMenu = () => {
		return (
			<DropdownMenu
				menu={
					<span
						className="loginButton"
						onClick={() => {
							setSignup(false);
							setLoginModal(true);
						}}
					>
						Login
					</span>
				}
				menus={[
					{ label: "My Profile", href: "", icon: null },
					{ label: "Flipkart Plus Zone", href: "", icon: null },
					{
						label: "Orders",
						href: "",
						icon: null,
						onClick: () => {
							!auth.authenticate && setLoginModal(true);
						},
					},
					{ label: "Wishlist", href: "", icon: null },
					{ label: "Rewards", href: "", icon: null },
					{ label: "Gift Cards", href: "", icon: null },
				]}
				firstMenu={
					<div className="firstmenu">
						<span>New Customer?</span>
						<span
							onClick={() => {
								setLoginModal(true);
								setSignup(true);
							}}
							style={{
								color: "#2874f0",
								cursor: "pointer",
							}}
						>
							Sign Up
						</span>
					</div>
				}
			/>
		);
	};

	return (
		<div className="header">
			<Modal visible={loginModal} onClose={() => setLoginModal(false)}>
				<div className="authContainer">
					<div className="row">
						<div className="leftspace">
							<h2>Login</h2>
							<p>
								Get access to your Orders, Wishlist and
								Recommendations
							</p>
						</div>
						<div className="rightspace">
							<div className="loginInputContainer">
								{auth.error && (
									<div style={{ color: "red", fontSize: 12 }}>
										{auth.error}
									</div>
								)}
								{signup && (
									<MaterialInput
										type="text"
										label="First Name"
										value={firstName}
										onChange={(e) =>
											setFirstName(e.target.value)
										}
									/>
								)}
								{signup && (
									<MaterialInput
										type="text"
										label="Last Name"
										value={lastName}
										onChange={(e) =>
											setLastName(e.target.value)
										}
									/>
								)}

								<MaterialInput
									type="text"
									label="Email/Mobile Number"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<MaterialInput
									type="password"
									label="Password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<MaterialButton
									title={signup ? "Register" : "Login"}
									bgColor="#fb641b"
									textColor="#ffffff"
									style={{
										margin: "40px 0 20px 0",
									}}
									onClick={userLogin}
								/>
								<p style={{ textAlign: "center" }}>OR</p>
								<MaterialButton
									title="Request OTP"
									bgColor="#ffffff"
									textColor="#2874f0"
									style={{
										margin: "20px 0",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</Modal>
			<div className="subHeader">
				{/* Logo  */}
				<div className="logo">
					<Link to={"/"}>
						<img src={flipkartLogo} className="logoimage" alt="" />
					</Link>
					<Link 
						to={"/"}
						style={{
							marginTop: "-10px",
							textDecoration: "none",
						}}
					>
						<span className="exploreText">Explore</span>
						<span className="plusText">Plus</span>
						<img src={goldenStar} className="goldenStar" alt="" />
					</Link>
				</div>
				{/* logo ends here */}

				{/* search component */}
				<div
					style={{
						padding: "0 10px",
					}}
				>
					<div className="searchInputContainer">
						<input
							className="searchInput"
							placeholder={"search for products, brands and more"}
						/>
						<div className="searchIconContainer">
							<IoIosSearch
								style={{
									color: "#2874f0",
								}}
							/>
						</div>
					</div>
				</div>
				{/* search component ends here */}

				{/* right side menu */}
				<div className="rightMenu">
					{auth.authenticate
						? renderLoggedInMenu()
						: renderNonLoggedInMenu()}
					<DropdownMenu
						menu={
							<a href="/#" className="more">
								<span>More</span>
								<IoIosArrowDown />
							</a>
						}
						menus={[
							{
								label: "Notification Preference",
								href: "",
								icon: null,
							},
							{ label: "Sell on flipkart", href: "", icon: null },
							{
								label: "24x7 Customer Care",
								href: "",
								icon: null,
							},
							{ label: "Advertise", href: "", icon: null },
							{ label: "Download App", href: "", icon: null },
						]}
					/>
					<div>
						<Link
							to="/cart"
							className="cart"
						>
							<Cart count={Object.keys(cart.cartItems).length} />
							<span style={{ margin: "0 10px" }}>Cart</span>
						</Link>
					</div>
				</div>
				{/* right side menu ends here */}
			</div>
		</div>
	);
};

export default Header;