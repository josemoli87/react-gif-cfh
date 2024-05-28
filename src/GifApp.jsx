import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifApp = () => {
	const [categories, setCategories] = useState(['Dragon Ball']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([...categories, newCategory]);
	};

	return (
		<>
			{/* Titulo */}
			<h1>GifApp JGM</h1>

			{/* Input */}
			<AddCategory onNewCategory={onAddCategory} />
			<hr />

			{/* Listado de Gifs */}

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
