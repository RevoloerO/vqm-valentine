import './App.css';
import ColorSwitcher from './ColorSwitcher'; // Import the new component

const HQLogo = () => {
  return (
    <div className="propose-banner">
      <div className='propose-banner-box'>
        <div className="logo-text" id='logo-text-1'>Will You Be My</div>
        <div className="logo-text" id='logo-text-2'></div>
      </div>
      <div className="logo-text" id='logo-text-3'>VALENTINE?</div>
    </div>

  );
};

const WelcomeMessage = () => {
  return (
    <div className="message-wrap">
      <span></span>
    </div>
  );
};

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <ColorSwitcher /> 
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <ContactBar />
      <div className="banner-welcome">
        <HQLogo />
        <WelcomeMessage />
      </div>
      <div className="footer">
        
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Banner />
    </div>
  )
}

export default App;
