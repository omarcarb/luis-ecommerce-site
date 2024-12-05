import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx';
import ProductSection from './components/ProductSections.jsx';
import CategorySection from './components/CategorySections.jsx';
import Styles from './styles.css'

function App() {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <CategorySection></CategorySection>
      <ProductSection></ProductSection>
       
    </div>
  );
}

export default App;
