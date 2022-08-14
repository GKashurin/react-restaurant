import React from "react";
import {FooterNavList} from "./FooterNavList";
import vk from "../assets/vk.svg"
import fb from "../assets/fb.svg"
import tw from "../assets/tw.svg"
import ok from "../assets/ok.svg"
import gPlay from "../assets/Gplay.png"
import appStore from "../assets/App_Store.png"

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__decor">
					<span />
					<span />
					<span />
				</div>
				<div className="footer__nav">
					<FooterNavList />
					<FooterNavList />
					<div className="circle" />
					<FooterNavList />
					<FooterNavList />
				</div>
				<div className="footer__media media">
					<div className="media__item"/>
					<ul className="media__item socials">
						<li className="socials__item">
							<a>
								<img src={vk} alt="vk"/>
							</a>
						</li>
						<li className="socials__item">
							<a href="">
								<img src={fb} alt="facebook"/>
							</a>
						</li>
						<li className="socials__item">
							<a href="">
								<img src={tw} alt="twitter"/>
							</a>
						</li>
						<li className="socials__item">
							<a href="">
								<img src={ok} alt="ok"/>
							</a>
						</li>
					</ul>
					<div className="media__item stores">
						<a href="">
							<img src={gPlay} alt="Google play"/>
						</a>
						<a href="">
							<img src={appStore} alt="App store"/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};