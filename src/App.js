import React from "react";
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {Route, Routes} from "react-router";
import {Cart} from "./pages/Cart";

export const App = () => {
	return (
		<div className="wrapper">
			<Header/>
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/cart" element={<Cart />}/>
				</Routes>
			</div>
		</div>
	);
}
