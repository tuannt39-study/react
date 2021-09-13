import { Typography } from '@material-ui/core';
import PrivateRoute from 'components/PrivateRoute';
import { useCountDown } from 'hooks/useCountDown';
import { useState, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import ThemeContext, { themes } from 'themeContext';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

const HomePage = lazy(() => import('./features/Home'));
const MagicBoxFeature = lazy(() => import('./features/MagicBox'));
const RenderingFeature = lazy(() => import('./features/Rendering'));
const StudentFeature = lazy(() => import('./features/Student'));
const TodoFeature = lazy(() => import('./features/Todo'));
const CartFeature = lazy(() => import('./features/Cart'));
const CounterFeature = lazy(() => import('./features/Counter'));

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const value = { currentTheme, setCurrentTheme };
  const match = useRouteMatch();

  const seconds = useCountDown({ initialSeconds: 10 });

  return (
    <div>
      <ThemeContext.Provider value={value}>
        <Header />
        <Typography variant="h1">{seconds}</Typography>

        <Suspense fallback={<div>LOADING...</div>}>
          <Switch>
            <Route exact path={match.path} component={HomePage} />
            <PrivateRoute path={`${match.path}/box`} component={MagicBoxFeature} />
            <Route path={`${match.path}/rendering`} component={RenderingFeature} />
            <Route path={`${match.path}/students`} component={StudentFeature} />
            <Route path={`${match.path}/todos`} component={TodoFeature} />
            <Route path={`${match.path}/counter`} component={CounterFeature} />
            <Route path={`${match.path}/cart`} component={CartFeature} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>

        <div style={{ textAlign: 'center' }}>Created by Po with ❤️</div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
