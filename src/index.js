import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './components/Footer/Footer'
import Enjoy from './components/Enjoy/Enjoy';
import WatchEverywhere from './components/WatchEverywhere/WatchEverywhere';
import DownloadSection from './components/DownloadSection/DownloadSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Enjoy />
    <DownloadSection />
    <WatchEverywhere />
    <Footer />
  </React.StrictMode>
);

// Sukurti Netflix puslapio dublikatą. puslapio pavyzdys: https://www.netflix.com/lt/ 

// Užduotį galima atlikti dviems būdais:
// Naudojantis React library sudėlioti komponentus kiekvienam section atskirai panaudojant props perduodant informacija iš vieno komponento į kitą.  Bus atsižvelgta į komponentų skirstymą, ir tikslinį pavadinimą.
// Naudojantis HTML ir CSS sudėlioti puslapio struktūrą. Papildomai bus atsižvelgta į javascript panaudojimą papildomi balai skiriami už button komponentų įgalinimą atidarant modal langą su registracija
// Užduoties tikslas: kuo tiksliau atvaizduoti puslapį ir pasitreniruoti puslapio strukturizavimą ir pagilinti CSS ir React props žinias 

// Prašome pasidaryti gitHub repozitorija ir daryti commit'us. Minimaliai šiame projekte turi būti bent 6 commit'ai