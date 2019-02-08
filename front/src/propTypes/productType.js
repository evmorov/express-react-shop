import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  description: PropTypes.string
});
