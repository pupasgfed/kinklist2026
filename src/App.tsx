import Header from './components/Header';
import Footer from './components/Footer';
import Questionnaire from './pages/Questionnaire';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Header />
      <main className="flex-1">
        <Questionnaire />
      </main>
      <Footer />
    </div>
  );
}

export default App;
