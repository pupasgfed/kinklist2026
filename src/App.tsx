import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuestionnaireAdvanced from './pages/QuestionnaireAdvanced';
import QuestionnaireBasic from './pages/QuestionnaireBasic';

function App() {
  return (
    <BrowserRouter basename="/kinklist2026">
      <div className="min-h-screen flex flex-col bg-brand-dark">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<QuestionnaireAdvanced />} />
            <Route path="/basic" element={<QuestionnaireBasic />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
