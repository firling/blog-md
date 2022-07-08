import { createStyles, Textarea } from '@mantine/core';
import { useState } from 'react';
import MDX from '@mdx-js/runtime';

import {ErrorBoundary} from 'react-error-boundary'

import components from '../utils/components'

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  child: {
    flex: '1',
    padding: 30
  },
  child_editor: {
    display: 'flex',
    alignItems: 'stretch',
  },
  child_preview: {
    border: '1px solid black',
    overflowY: 'scroll',
  },
}));

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default function Test() {
  const { classes, cx } = useStyles();
  const [mdx, setMdx] = useState(`# Hello, world!

<Demo />

<div>Here is the scope variable: </div>`);

  const component = {
    h1: props => <h1 style={{color: 'tomato'}} {...props} />,
    Demo: props => <h1>This is a demo component</h1>,
    ...components
  }


  return (
    <div className={classes.container}>
      <div className={cx(classes.child, classes.child_editor)}>
        <Textarea
          placeholder="Autosize with no rows limit"
          autosize
          size="xl"
          minRows={1000}
          styles={{
            root: { width: '100%', height: '100%' },
            wrapper: { height: '100%' },
          }}
          value={mdx}
          onChange={(e) => setMdx(e.currentTarget.value)}
        />
      </div>
      <div className={cx(classes.child, classes.child_preview)}>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
        >
          <MDX components={component}>{mdx}</MDX>
        </ErrorBoundary>
      </div>
    </div>
  );
}
