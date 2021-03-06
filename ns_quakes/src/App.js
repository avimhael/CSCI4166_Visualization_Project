import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MapScreen from './screens/MapScreen'
import React from 'react'
import FAQScreen from './screens/FAQScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/faq' component={FAQScreen} />
          <Route path='/map' component={MapScreen} />
        </Container>
      </main>
      <Footer />
      
      
      
      
      
      </Router>


  );
}

export default App;
