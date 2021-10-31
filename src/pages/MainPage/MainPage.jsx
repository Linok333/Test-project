import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { MainNavbar } from '../../components/organisms/MainNavbar';

import { BlockImages } from '../../components/molecules/BlockImages';

const MainPage = ({ dataImages }) => {
	const history = useHistory();
	const [isBlue, setIsBlue] = useState(false);

	const logout = () => {
		localStorage.removeItem('token');
		history.push('/login');
	};

	const images = useMemo(() => dataImages.map((el) => (
		<div key={el} className="block-image">
			<img width="500px" height="400px" src={el} alt="Autumn" />
		</div>
	)), [dataImages]);

	return (
		<div className="mainPage">
			<MainNavbar isBlue={isBlue} setIsBlue={setIsBlue} logout={logout} />
			<BlockImages images={images} />
		</div>
	);
};
export default MainPage;
