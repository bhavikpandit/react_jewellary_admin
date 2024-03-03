
// import './App.css';
import { Suspense } from 'react';
import Loading from '../components/loader';
import Router from './Router';

function App() {
  return (
    <div className="App">
    
      <Suspense fallback={<Loading isSuspense />}>
        <Loading>
          <Router />
        </Loading>
      </Suspense>
    </div>
  );
}

export default App;
