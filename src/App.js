import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert('Please enter some text to analyze.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text.trim() }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response from backend:', data);
      setResults(data);
      setShowResults(true);
    } catch (error) {
      console.error('Error:', error);
      alert(`Error connecting to the backend: ${error.message}. Please make sure the Flask server is running on http://127.0.0.1:5000`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setShowResults(false);
    setResults(null);
    setText('');
  };

  if (showResults && results) {
    // Calculate probabilities as percentages
    const humanProb = (results['Human Generated'] * 100).toFixed(2);
    const aiProb = (results['AI Generated'] * 100).toFixed(2);

    // For bar heights (max 180px)
    const maxBarHeight = 180;
    const humanBarHeight = Math.round((humanProb / 100) * maxBarHeight);
    const aiBarHeight = Math.round((aiProb / 100) * maxBarHeight);

    return (
      <div className="App">
        <div className="results-container">
          <h1 className="results-title">Analysis Results</h1>
          <div className="results-split">
            {/* Left: Probabilities */}
            <div className="results-left">
              <div className="probability-display">
                <div className="probability-item">
                  <div className="probability-label">Human Generated Probability</div>
                  <div className="probability-value">{humanProb}%</div>
                </div>
                <div className="probability-item">
                  <div className="probability-label">AI Generated Probability</div>
                  <div className="probability-value">{aiProb}%</div>
                </div>
              </div>
            </div>
            {/* Right: Vertical Bar Chart */}
            <div className="results-right">
              <div className="bar-chart-container">
                <div className="chart-title">Probability Bar Chart</div>
                <div className="bar-chart">
                  <div className="bar-item">
                    <div className="bar-label">Human</div>
                    <div className="bar-wrapper">
                      <div
                        className="bar human-bar"
                        style={{ height: `${humanBarHeight}px` }}
                      ></div>
                      <div className="bar-value">{humanProb}%</div>
                    </div>
                  </div>
                  <div className="bar-item">
                    <div className="bar-label">AI</div>
                    <div className="bar-wrapper">
                      <div
                        className="bar ai-bar"
                        style={{ height: `${aiBarHeight}px` }}
                      ></div>
                      <div className="bar-value">{aiProb}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleBack} className="submit-button" style={{ marginTop: '40px' }}>
            Analyze Another Text
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1 className="title">Authenticate</h1>
          <p className="subtitle">Check if your text is AI or Human Generated</p>
        </div>
        
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <textarea
              className="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your text here..."
              rows="8"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? 'Analyzing...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App; 