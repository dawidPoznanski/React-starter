import {connect} from 'react-redux';
import Column from './Column';

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});

export const getCardsForList = ({cards}, columnId) => cards.filter(cards => cards.columnId == columnId);
export default connect(mapStateToProps)(Column);