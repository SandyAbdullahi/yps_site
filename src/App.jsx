import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, AboutPage, ServicesPage, FeaturesPage, ContactPage } from './pages';
import { Header, Footer } from './components';
import './App.css';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <AnimatePresence mode='wait'>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/contact" component={ContactPage} />
    </AnimatePresence>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
