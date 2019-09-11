import React from 'react';
import { useState, useRef } from 'react';
import { motion, useDomEvent } from 'framer-motion';
import styles from './imagePopout.module.css';

const transition = {
	type: 'spring',
	damping: 25,
	stiffness: 120,
};

const ImagePopout = (src, alt) => {
	const [isOpen, setOpen] = useState(false);

	useDomEvent(useRef(window), 'scroll', () => isOpen && setOpen(false));

	return (
		<div className={`${styles.image_container} ${isOpen ? 'open' : ''}`}>
			<motion.div
				animate={{ opacity: isOpen ? 1 : 0 }}
				transition={transition}
				className={styles.shade}
				onClick={() => setOpen(false)}
			/>
			<motion.img src={src} alt={alt} onClick={() => setOpen(!isOpen)} layoutTransition={transition} />
		</div>
	);
};

export default ImagePopout;
