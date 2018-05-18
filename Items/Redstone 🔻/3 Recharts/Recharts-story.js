import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// Import Items!
import Recharts from './Recharts';


storiesOf('🔻 Recharts', module)
  .add('Recharts',
    withInfo(`
      <div>
        <a href="http://recharts.org"><strong>recharts.org</strong></a>
        <iframe src="http://recharts.org" name="" scrolling="auto" align="bottom" height="500" width="100%">
        </iframe>
      </div>
    `)(() =>
    <Recharts />
    )
  )
