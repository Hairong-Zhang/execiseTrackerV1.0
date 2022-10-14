//create navlink for homepage, orderpage and storespage

import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<Link to='/'>HomePage</Link>
			<Link to='/add'>Add Exercise</Link>
		</nav>
	);
};

export default Navigation;
