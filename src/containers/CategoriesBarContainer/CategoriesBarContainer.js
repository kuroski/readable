import { connect } from 'react-redux';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';

const mapStateToProps = ({ categories }) => {
  return categories;
};

const CategoriesBarContainer = connect(mapStateToProps)(CategoriesBar);

export default CategoriesBarContainer;
