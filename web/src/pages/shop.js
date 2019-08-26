import React from 'react';
import Layout from './../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';

const shop = ['S', 'H', 'O', 'P'];

const Shop = () => (
	<Layout>
		<Sidebar letters={shop} />
		<Main>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1>This is the Shop page</h1>
			</div>
		</Main>
	</Layout>
);

export default Shop;
