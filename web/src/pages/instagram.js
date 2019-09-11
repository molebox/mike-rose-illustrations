/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from './../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';
import { Grid, ComplexCard } from '@horacioh/gatsby-theme-instagram';

const gram = ['I', 'N', 'S', 'T', 'A'];

const Instagram = () => (
	<Layout>
		<Sidebar letters={gram} />
		<Main>
			<div sx={{ padding: '2em' }}>
				<Grid card={ComplexCard} />
			</div>
		</Main>
	</Layout>
);

export default Instagram;
