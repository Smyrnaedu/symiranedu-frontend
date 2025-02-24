import React from 'react'
import { Container } from 'react-bootstrap';
import SocialMenu from '../socialmenu';
import "./topbar.scss"
import Link from 'next/link';
import { MdEditDocument } from 'react-icons/md';
import { IoDocumentText } from 'react-icons/io5';

const Topbar = () => {
    return (
		<div className="topbar">
			<Container>
				<SocialMenu/>
				<div className='topBar-right'>
					<Link href="/kvkk">
					<MdEditDocument />
						KVKK
					</Link>
					 {" | "}
					 <Link href="/blog">
					 <IoDocumentText />
						Blog
					</Link>
				</div>
			</Container>
		</div>
	);
}

export default Topbar