import React from 'react';
import styles from './Column.scss';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
      title: PropTypes.node,
      cards: PropTypes.array,
  }
  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.lenght ? state.cards[state.cards-1].key+1 : 0,
            title
          }
        ]
      }
    ))
  }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <div>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    )
  }

  
}

export default Column;