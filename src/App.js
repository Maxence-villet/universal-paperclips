import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import PaperclipCounter from './components/PaperclipCounter';
import Business from './components/Business';
import Marketing from './components/Marketing';
import Manufacturing from './components/Manufacturing';
import AutoClippers from './components/AutoClippers';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


const App = () => {
  const [paperclipCount, setPaperclipCount] = useState(0);
  const [inchesCount, setInchesCount] = useState(1000);
  const [unsoldInventoryCount, setUnsoldInventoryCount] = useState(0);
  const [availableFundsCount, setAvailableFundsCount] = useState(0.0);
  const [pricePerClipCount, setPricePerClipCount] = useState(0.25);
  const [publicDemandCount, setPublicDemandCount] = useState(31);
  const [marketingLevelCount, setMarketingLevelCount] = useState(1);
  const [marketingCostCount, setMarketingCostCount] = useState(100);
  const [manufacturingCostCount, setManufacturingCostCount] = useState(20);
  const [autoClippersCount, setAutoClippersCount] = useState(0);
  const [autoClippersCostCount, setAutoClippersCostCount] = useState(6.1);
  const [clipsPerSecond] = useState(0);
  const [theme, setTheme] = useState('light');

  const unsoldInventoryRef = useRef(unsoldInventoryCount);
  const publicDemandRef = useRef(publicDemandCount);
  const pricePerClipRef = useRef(pricePerClipCount);
  const availableFundsRef = useRef(availableFundsCount);
  const [manualClicksPerSecond, setManualClicksPerSecond] = useState(0);
  const [manualClickCount, setManualClickCount] = useState(0); 
  const manualClickRef = useRef(0);
  

  useEffect(() => {
    unsoldInventoryRef.current = unsoldInventoryCount;
    publicDemandRef.current = publicDemandCount;
    pricePerClipRef.current = pricePerClipCount;
    availableFundsRef.current = availableFundsCount;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (inchesCount > autoClippersCount) {
        setPaperclipCount((prev) => prev + autoClippersCount);
        setInchesCount((prev) => prev - autoClippersCount);
        setUnsoldInventoryCount((prev) => prev + autoClippersCount);
      } else if (inchesCount > 0) {
        setPaperclipCount((prev) => prev + inchesCount);
        setInchesCount(0);
        setUnsoldInventoryCount((prev) => prev + inchesCount);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [inchesCount, autoClippersCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      const quantitySold = Math.min(
        unsoldInventoryRef.current,
        Math.round((unsoldInventoryRef.current * publicDemandRef.current) / 100)
      );
      
      const salesAmount = quantitySold * pricePerClipRef.current;
      
      // Utiliser les setters fonctionnels pour garantir les dernières valeurs
      setAvailableFundsCount(prev => prev + salesAmount);
      setUnsoldInventoryCount(prev => prev - quantitySold);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setManufacturingCostCount(Math.floor(Math.random() * 14) + 14);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setManualClicksPerSecond(manualClickRef.current);
      manualClickRef.current = 0;
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  const totalClipsPerSecond = autoClippersCount + manualClicksPerSecond;
  useEffect(() => {
    console.log("Clips/s actuels:", totalClipsPerSecond);
  }, [totalClipsPerSecond]);

  const handleMakePaperclip = () => {
    if (inchesCount > 0) {
      manualClickRef.current += 1;
      setManualClickCount(prev => prev + 1);
      setPaperclipCount((prev) => prev + 1);
      setInchesCount((prev) => prev - 1);
      setUnsoldInventoryCount((prev) => prev + 1);
    }
  };

  

  const handleRaisePrice = () => {
    if (publicDemandCount > 3) {
      setPricePerClipCount((prev) => prev + 0.01);
      setPublicDemandCount((prev) => prev - 3);
    }
  };

  const handleLowerPrice = () => {
    if (pricePerClipCount > 0.01) {
      setPricePerClipCount((prev) => prev - 0.01);
      setPublicDemandCount((prev) => prev + 3);
    }
  };

  const handleWireClick = () => {
    if (availableFundsCount >= manufacturingCostCount) {
      setInchesCount((prev) => prev + 1000);
      setAvailableFundsCount((prev) => prev - manufacturingCostCount);
    }
  };

  const handleAutoClippersClick = () => {
    if (availableFundsCount >= autoClippersCostCount) {
      setAvailableFundsCount((prev) => prev - autoClippersCostCount);
      setAutoClippersCount((prev) => prev + 1);
      setAutoClippersCostCount((prev) => prev + 0.1);
    }
  };

  const handleMarketingClick = () => {
    if (availableFundsCount >= marketingCostCount) {
      setAvailableFundsCount((prev) => prev - marketingCostCount);
      setPublicDemandCount((prev) => prev * 1.25);
      setMarketingCostCount((prev) => prev * 2.25);
      setMarketingLevelCount((prev) => prev + 1);
    }
  };

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  return (
    <div className="App">
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <section className="game container">
        <div className="row g-4">
          <div className="col-12">
            <PaperclipCounter
              paperclipCount={paperclipCount}
              onMakePaperclip={handleMakePaperclip}
            />
          </div>
          <div className="col-md-6">
            <Business
              availableFunds={availableFundsCount}
              unsoldInventory={unsoldInventoryCount}
              pricePerClip={pricePerClipCount}
              publicDemand={publicDemandCount}
              onLowerPrice={handleLowerPrice}
              onRaisePrice={handleRaisePrice}
            />
          </div>
          <div className="col-md-6">
            <Marketing
              marketingLevel={marketingLevelCount}
              marketingCost={marketingCostCount}
              onMarketingClick={handleMarketingClick}
            />
          </div>
          <div className="col-md-6">
            <Manufacturing
              clipsPerSecond={totalClipsPerSecond}
              inches={inchesCount}
              manufacturingCost={manufacturingCostCount}
              onWireClick={handleWireClick}
            />
          </div>
          <div className="col-md-6">
            <AutoClippers
              autoClippersCount={autoClippersCount}
              autoClippersCost={autoClippersCostCount}
              onAutoClippersClick={handleAutoClippersClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;