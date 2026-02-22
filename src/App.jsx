import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import AlgoSelectPage from './pages/AlgoSelectPage';
import InputPage from './pages/InputPage';
import VisualizationPage from './pages/VisualizationPage';
import ResultsPage from './pages/ResultsPage';
import CodePage from './pages/CodePage';

/**
 * 5-page flow:
 *  splash → select → input → visualize → results
 *              ↑_________________________↓   (Try Another)
 *                         ↑____________↓    (Back to Config)
 *                    ↑___↓                  (Back / Change Algo)
 */
export default function App() {
  // 'splash' | 'select' | 'input' | 'visualize' | 'results' | 'code'
  const [page, setPage] = useState('splash');
  const [selectedAlgo, setSelectedAlgo] = useState(null);
  const [configuredArr, setConfiguredArr] = useState([]);
  const [configSpeed, setConfigSpeed] = useState(70);
  const [runStats, setRunStats] = useState({ comparisons: 0, swaps: 0 });

  function goTo(nextPage) {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ── Page handlers ── */
  const handleSplashDone = () => goTo('select');
  const handleAlgoSelect = (id) => { setSelectedAlgo(id); goTo('input'); };
  const handleInputProceed = (arr, spd) => { setConfiguredArr(arr); setConfigSpeed(spd); goTo('visualize'); };
  const handleSortDone = (stats) => { setRunStats(stats); goTo('results'); };
  const handleBackToInput = () => goTo('input');
  const handleBackToSelect = () => goTo('select');
  const handleRestart = () => goTo('select');
  const handleViewCode = () => goTo('code');
  const handleBackToViz = () => goTo('visualize');

  return (
    <>
      {/* ── Splash (no Navbar) ── */}
      {page === 'splash' && <SplashScreen onFinish={handleSplashDone} />}

      {/* ── Pages that share Navbar ── */}
      {page !== 'splash' && (
        <div className="min-h-screen flex flex-col">
          <Navbar page={page} onHomeClick={handleBackToSelect} />

          <div key={page} className="flex-1 animate-fade-in">
            {page === 'select' && (
              <AlgoSelectPage onSelect={handleAlgoSelect} />
            )}

            {page === 'input' && selectedAlgo && (
              <InputPage
                selectedAlgo={selectedAlgo}
                onBack={handleBackToSelect}
                onProceed={handleInputProceed}
              />
            )}

            {page === 'visualize' && selectedAlgo && (
              <VisualizationPage
                selectedAlgo={selectedAlgo}
                initialArray={configuredArr}
                speed={configSpeed}
                onBack={handleBackToInput}
                onDone={handleSortDone}
                onViewCode={handleViewCode}
              />
            )}

            {page === 'code' && selectedAlgo && (
              <CodePage
                selectedAlgo={selectedAlgo}
                onBack={handleBackToViz}
              />
            )}

            {page === 'results' && selectedAlgo && (
              <ResultsPage
                selectedAlgo={selectedAlgo}
                comparisons={runStats.comparisons}
                swaps={runStats.swaps}
                onBack={handleBackToInput}
                onRestart={handleRestart}
              />
            )}
          </div>

          <footer className="py-5 border-t border-white/[0.04] text-center">
            <p className="text-slate-600 text-xs tracking-wide">
              Built with React · TailwindCSS · Pure JS Algorithms &nbsp;•&nbsp; Portfolio Project
            </p>
          </footer>
        </div>
      )}
    </>
  );
}
