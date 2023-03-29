// components/Light.test.js
import { render, screen } from '@testing-library/react';
import Light from './Light';	

it('renders Light Component', () => {
	render(<Light name="전원" />);
	const nameElement = screen.getByText(/전원 off/i);
	expect(nameElement).toBeInTheDocument();
})