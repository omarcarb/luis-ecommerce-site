import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx';
import ProductSection from './components/ProductSections.jsx';
import CategorySection from './components/CategorySections.jsx';
import Promotional from "./components/Promotional.jsx"
import Styles from './styles.css'

function App() {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <CategorySection></CategorySection>
      <ProductSection sectionHeader={"Recommended"} isSale={false}></ProductSection>
      <Promotional index ={0} reverse ={"false"}></Promotional>
      <ProductSection sectionHeader={"On Sale"} isSale={true}></ProductSection>
      <Promotional index={1} reverse ={"true"}></Promotional>
    </div>
  );
}

export default App;
