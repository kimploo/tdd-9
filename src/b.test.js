// components/Light.test.js
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Light from './Light';	

it('renders Light Component', () => {
	render(<Light name="파워" />);
	const nameElement = screen.getByText(/파워 off/i);
	expect(nameElement).toBeInTheDocument();
})