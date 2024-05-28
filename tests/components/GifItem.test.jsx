import {render} from '@testing-library/react';
import {GifItem} from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
	const title = 'Goku';

	const url = 'https://DBZ.com/goku.jpg';

	test('debe hacer match con el snapshot ', () => {
		const {container} = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});
});
