import Header from '../sections/Header';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Interests from '../sections/Interests';
import Footer from '../sections/Footer';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        <Header />
        <Skills />
        <Projects />
        <Interests />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
