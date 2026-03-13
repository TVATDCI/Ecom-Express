import PropTypes from 'prop-types';

const Button = ({ onClick, children, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="bg-red-600 inline-block border-none rounded-[19px] text-white cursor-pointer text-base font-bold text-center py-3 px-6 m-4 w-full max-w-[200px] no-underline transition-colors duration-300 hover:bg-white hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    disabled: PropTypes.bool,
};

export default Button;
