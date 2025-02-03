import React, { useState } from 'react';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg>
        </button>
        <div className="sidebar-content">
          <h1>MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)</h1>
          <div className='icons-container'>
            <div className='icons'>
              <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
              </div>
              <p>0</p>
            </div>
            <div className='icons'>
              <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                </svg>
              </div>
              <p>120</p>
            </div>
            <div className='icons'>
              <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                </svg>
              </div>
              <p>27</p>
            </div>
          </div>
          <div className='details'>
            <p>Dyrssty: Ahichchhatra</p>
            <p>Period: 200 CE</p>
            <p>Material: Sandstone</p>
            <p>Location: National Museum</p>
          </div>
          <div className='description'>
            <h3>Description:</h3>
            <p>Maitreys, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to redee humanity. In Buddhism, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhass). The Digha Nikaya mentions, Maitreya Buddha will be bom in Ketumati, les present-day Varanasi, Uttar Pradesh As a bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets, necklaces, and an amulet. The</p>
            <div className='read-more'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
              <p>READ MORE</p>
            </div>
          </div>
          <div className='buttons'>
            <button className='button1'>ADD TO COLLECTION</button>
            <button className='button2'>SOUVENIR</button>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="image-container">
          {!sidebarOpen && <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
          </button>}
          <img src={`${process.env.PUBLIC_URL}/statue.png`} alt='statue-image' className='statue-image'/>
        </div>
      </div>
    </div>
  );
}

export default App;