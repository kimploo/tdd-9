// components/Light.test.js
import { render, screen } from '@testing-library/react';
import Light from './App';	

it('renders Light Component', () => {
	render(<Light name="파워" />);
	const nameElement = screen.getByText(/파워 off/i);
	expect(nameElement).toBeInTheDocument();
})