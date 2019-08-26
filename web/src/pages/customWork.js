import React from 'react';
import Layout from './../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';

const custom = ['C', 'U', 'S', 'T', 'O', 'M'];

const CustomWork = () => (
	<Layout>
		<Sidebar letters={custom} />
		<Main>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1>This is the Custom Work page</h1>
			</div>
		</Main>
	</Layout>
);

export default CustomWork;
