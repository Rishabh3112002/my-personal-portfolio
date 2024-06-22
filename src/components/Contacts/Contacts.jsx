import React, { useState } from 'react';
import './Contacts.css'; // Import the CSS file for styling

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    setErrorMessage('');
    setSuccessMessage('');

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    console.log('done')

    const data = {
      name: name,
      email: email
    };

    setLoading(true);

    try {
      const response = await fetch('https://email-server-lp4z.onrender.com/api/url/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSuccessMessage('Woohoo! Your form is in! Thanks for submitting! 🎉');
        setName('');
        setEmail('');
      } else {
        setErrorMessage('Oh no! The form submission didn\'t go through. Please try again!');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Oops! Looks like we hit a snag. Please give it another shot!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contacts" className="contact-main">
      <div className="contact-title">~Say Hello!~</div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-note">
            <p className='contact-desc'>Let's turn ideas into reality! Whether it's a project, a partnership, or just a chat, I'm excited to hear from you. Fill out the form or reach out through my socials, and I'll get back to you!</p>
            <div className="contact-icons">
              <a href="https://github.com/Rishabh3112002" target="_blank" rel="noopener noreferrer">
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.414-4.033-1.414-.546-1.387-1.333-1.757-1.333-1.757-1.086-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.836 2.81 1.306 3.495.998.108-.776.418-1.305.762-1.606-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.467-2.382 1.235-3.22-.135-.302-.54-1.522.105-3.176 0 0 1.005-.322 3.3 1.23.957-.267 1.983-.399 3.005-.404 1.02.005 2.048.137 3.005.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.654.24 2.874.105 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.81 1.104.81 2.222v3.293c0 .322.218.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/rishabhk31/" target="_blank" rel="noopener noreferrer">
                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.75 19h-2.5v-10h2.5v10zm-1.25-11.213c-.813 0-1.25-.543-1.25-1.213 0-.687.438-1.213 1.271-1.213s1.25.526 1.264 1.213c0 .67-.438 1.213-1.264 1.213zm12.75 11.213h-2.5v-5.472c0-1.384-.495-2.329-1.736-2.329-.945 0-1.507.632-1.754 1.247-.091.222-.114.533-.114.846v5.708h-2.5v-10h2.5v1.362c.348-.538 1.041-1.295 2.543-1.295 1.857 0 3.261 1.207 3.261 3.807v6.126z"/></svg>
              </a>
              <a href="https://www.instagram.com/rishhh31/" target="_blank" rel="noopener noreferrer">
              <svg className="contact-icon" fill="#FF5001" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_504_"> <path id="XMLID_505_" d="M38.52,0.012h222.978C282.682,0.012,300,17.336,300,38.52v222.978c0,21.178-17.318,38.49-38.502,38.49 H38.52c-21.184,0-38.52-17.313-38.52-38.49V38.52C0,17.336,17.336,0.012,38.52,0.012z M218.546,33.329 c-7.438,0-13.505,6.091-13.505,13.525v32.314c0,7.437,6.067,13.514,13.505,13.514h33.903c7.426,0,13.506-6.077,13.506-13.514 V46.854c0-7.434-6.08-13.525-13.506-13.525H218.546z M266.084,126.868h-26.396c2.503,8.175,3.86,16.796,3.86,25.759 c0,49.882-41.766,90.34-93.266,90.34c-51.487,0-93.254-40.458-93.254-90.34c0-8.963,1.37-17.584,3.861-25.759H33.35v126.732 c0,6.563,5.359,11.902,11.916,11.902h208.907c6.563,0,11.911-5.339,11.911-11.902V126.868z M150.283,90.978 c-33.26,0-60.24,26.128-60.24,58.388c0,32.227,26.98,58.375,60.24,58.375c33.278,0,60.259-26.148,60.259-58.375 C210.542,117.105,183.561,90.978,150.283,90.978z"></path> </g> </g></svg>
              </a>
            </div> 
          </div>
        </div>
        <div className='centre-line'></div>
        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending Mail...' : 'Submit'}
            </button>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
