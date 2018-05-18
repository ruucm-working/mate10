import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// Import Items!
import LifeCycle from './LifeCycle';
import State from './State';
// Import Styles!
import './react-js.scss';

storiesOf('🔻 ReactJS', module)
  .add('LifeCycle',
    withInfo(`
      Silence is Golden 🔑
    `)(() =>
      <LifeCycle />
    )
  )
  .add('State',
    withInfo(`
      <div>
        <a href="http://harbor.school/stories/data-visualization-3-props-state/"><strong>harbor.school/stories/data-visualization-3-props-state/</strong></a>
        <iframe src="http://harbor.school/stories/data-visualization-3-props-state/" name="" scrolling="auto" align="bottom" height="500" width="100%">
        </iframe>
      </div>
    `)(() =>
      <State />
    )
  )
