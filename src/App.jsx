import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, AboutPage, ServicesPage, FeaturesPage, ContactPage } from './pages';
import { Header } from './components';
import './App.css';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <AnimatePresence mode='wait'>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
    </AnimatePresence>
  );
}

export default App;
