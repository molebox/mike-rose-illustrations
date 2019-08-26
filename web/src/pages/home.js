import React from 'react';
import Layout from '../components/layout';
import Main from '../components/main';
import Sidebar from '../components/sidebar/Sidebar';

const gram = ['I', 'N', 'S', 'T', 'A'];

const Home = () => (
	<Layout>
		<Sidebar letters={gram} />
		<Main>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1>This is the Home page</h1>
			</div>
		</Main>
	</Layout>
);

export default Home;
