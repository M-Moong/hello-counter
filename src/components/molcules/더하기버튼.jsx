import PropTypes from 'prop-types';
import 버튼 from '../atoms/버튼';
import React from 'react';
import { 카운터컨텍스트 } from '../../App';

//# 더하기버튼
const 더하기버튼 = () => {
	const { set상태, 상태 } = React.useContext(카운터컨텍스트); // 카운터컨텍스트가 던져주는 prop을 받는 부분.
	const onClick = () => {
		set상태(상태 + 1);
	};

	return <버튼 onClick={onClick}>+</버튼>;
};

// TypeScript 대체 - 형을 지정해주는것
더하기버튼.propTypes = {
	onClick: PropTypes.func
};

export default 더하기버튼;