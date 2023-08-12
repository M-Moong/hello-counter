import PropTypes from 'prop-types';

//# 버튼
const 버튼 = ({ onClick, children }) => {
	return <button onClick={onClick}>{children}</button>;
};

버튼.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string,
	children: PropTypes.node
};

export default 버튼;