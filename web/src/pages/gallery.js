import React from 'react';
import Layout from './../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';

const gallery = ['W', 'O', 'R', 'K'];

const Gallery = () => (
	<Layout>
		<Sidebar letters={gallery} />
		<Main>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1>This is the Gallery page</h1>
			</div>
		</Main>
	</Layout>
);

export default Gallery;
