import React from 'react';
import './App.css';
import { Provider} from 'react-redux'
import CourseList from './components/CoursesList.components'
import store from './store/store'
 

function App() {
  return (
    <Provider store = {store}>
    
      <div className="App">
        <CourseList></CourseList>
      </div>
    </Provider>
  );
}

export default App;
