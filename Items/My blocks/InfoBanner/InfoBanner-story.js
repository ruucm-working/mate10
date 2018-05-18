import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import Items!
import Title from './Title';
import Cards from './Cards';

storiesOf('😃 InfoBanner', module)
  .add('Title', () => <Title />)
  .add('Cards', () => <Cards />)
