import React from 'react';
import Layout from './../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';
import { Grid, ComplexCard } from '@horacioh/gatsby-theme-instagram';

const gram = ['I', 'N', 'S', 'T', 'A'];

const Instagram = () => (
	<Layout>
		<Sidebar letters={gram} />
		<Main>
			<Grid card={ComplexCard} />
		</Main>
	</Layout>
);

export default Instagram;
