import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render() {
    const {cards} = this.props;
    return (
      <section className={styles.component}>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;