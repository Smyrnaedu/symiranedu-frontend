import React from 'react'
import { Container } from 'react-bootstrap';
import SocialMenu from '../socialmenu';
import "./topbar.scss"
import Link from 'next/link';

const Topbar = () => {
    return (
		<div className="topbar">
			<Container>
				<SocialMenu/>
				<div className='topBar-right'>
					<Link href="/kvkk">
					<i className='pi pi-pen-to-square'></i>
						KVKK
					</Link>
					 {" | "}
					 <Link href="/blog">
					 <i className='pi pi-file'></i>
						Blog
					</Link>
				</div>
			</Container>
		</div>
	);
}

export default Topbar