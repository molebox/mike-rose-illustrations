/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';
import ReactSwitch from 'react-switch';

const checkedIcon = (
	<img
		alt="moon indicating dark mode"
		src={moon}
		width="16"
		height="16"
		role="presentation"
		css={{
			pointerEvents: `none`,
			margin: 4,
		}}
	/>
);

const uncheckedIcon = (
	<img
		alt="sun indicating light mode"
		src={sun}
		width="16"
		height="16"
		role="presentation"
		css={{
			pointerEvents: `none`,
			margin: 4,
		}}
	/>
);

export const ColorToggle = () => {
	const [colorMode, setColorMode] = useColorMode();
	const isDark = colorMode === `dark`;
	const toggleColorMode = (e) => {
		setColorMode(isDark ? `light` : `dark`);
	};
	return (
		<ReactSwitch
			aria-label="Toggle dark mode"
			onColor="#000"
			checkedIcon={checkedIcon}
			uncheckedIcon={uncheckedIcon}
			checked={isDark}
			onChange={toggleColorMode}
		/>
	);
};

// const ToggleWrapper = styled.div`
// 	transform: translate3d(-50%, -50%, 0);
// `;

// const Button = styled.button`

// `;

// export default (props) => {
// 	const [mode, setMode] = useColorMode();
// 	return (
// 		<button
// 			{...props}
// 			onClick={(e) => {
// 				const next = mode === 'dark' ? 'light' : 'dark';
// 				setMode(next);
// 			}}
// 		/>
// 	);
// };
