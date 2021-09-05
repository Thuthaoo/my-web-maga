import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { NotFoundBoundary, Router, View } from 'react-navi'
import routes from './routes'

ReactDOM.render(
  <Router routes={routes}>
    <Suspense fallback={null}>
      <NotFoundBoundary render={() => <h1>Quote Not Found</h1>}>
        <View />
      </NotFoundBoundary>
    </Suspense>
  </Router>,
  document.getElementById('root')
)