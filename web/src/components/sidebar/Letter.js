/** @jsx jsx */
import { jsx } from 'theme-ui';
import { css } from '@emotion/core';

const Letter = ({ children }) => (
	<div
		sx={{
			color: 'text',
			fontFamily: 'heading',
			fontWeight: 'body',
			lineHeight: 'body',
		}}
		css={css`
			grid-area: letter;
			font-size: 2em;
			margin-top: 0.2em;
			margin-bottom: 0.2em;
			padding: 0.1em;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			flex-grow: 1;

			-webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1200ms both;
			animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1200ms both;

			@-webkit-keyframes fade-in {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
			@keyframes fade-in {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}

			@media (max-width: 700px) {
				font-size: 1.1em;
				padding: 0.5em;
				margin-right: 0.2em;
			}
		`}
	>
		{children}
	</div>
);

export default Letter;
