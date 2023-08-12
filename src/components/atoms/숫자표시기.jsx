import PropTypes from 'prop-types';
import React from 'react';
import { 카운터컨텍스트 } from '../../App';

//# 숫자표시기
const 숫자표시기 = () => {
	const { 상태 } = React.useContext(카운터컨텍스트); // 카운터컨텍스트가 던져주는 prop을 받는 부분.


	return <span>{상태}</span>;
};

// TypeScript 대체 - 형을 지정해주는것
숫자표시기.propTypes = {
	children: PropTypes.node
};

export default 숫자표시기;