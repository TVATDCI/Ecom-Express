import React from 'react';
import './About.css';

function About() {
  const profiles = [
    { name: 'Nikolas Wolf', role: 'Lead Developer', funFact: 'Loves hiking in the mountains.', image: '/Nikolas.jpg' },
    { name: 'Tabassum Khan', role: 'UX Designer', funFact: 'Avid coffee enthusiast.', image: '/Tabassum.jpg' },
    { name: 'Ashwini Bhimereddy', role: 'Project Manager', funFact: 'Enjoys painting in her free time.', image: '/Ashwini1.jpg' },
    { name: 'Tuanthong Vaidyanand', role: 'Software Engineer', funFact: 'Loves playing chess.', image: '/Thong.jpg' },
  ];

  return (
    <div className="App">
   {/* Banner Section */}
      <header className="banner animated-section">
        <div className="banner-text">
          <h1>Welcome to ECOM EXPRESS– Your One-Stop Online Shop</h1>
        </div>
      </header>

      {/* Mission Section */}
      <section className="mission animated-section">
        <h2>Our Mission</h2>
        <p>Our mission is to inspire and empower customers with quality products that meet their unique needs and values.</p>
      </section>

      {/* Values Section */}
      <section className="values animated-section">
        <h2>Our Values</h2>
        <ul>
          <li><span>❤️</span> Customer-Centricity</li>
          <li><span>🌱</span> Sustainability</li>
          <li><span>📈</span> Innovation</li>
          <li><span>🤝</span> Integrity</li>
        </ul>
      </section>

      {/* Tech Crew Profiles Section */}
      <section className="profiles">
        <h2 className="animated-section">Meet the Tech Crew</h2>
        <div className="profile-cards">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card animated-section" style={{ animationDelay: `${index * 0.5 + 2.5}s` }}>
              <img src={profile.image} alt={`${profile.name} Profile`} />
              <h3>{profile.name}</h3>
              <p>{profile.role}</p>
              <p>Fun Fact: {profile.funFact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Section - Promise to You */}
      <section className="promise animated-section">
        <h2>Your Satisfaction, Our Promise</h2>
        <p>We are committed to delivering excellence and ensuring your satisfaction with every purchase. Explore our store or follow us on social media for updates!</p>
      </section>

      {/* Footer with Contact and Social Links */}
      <footer className="footer">
        <p>Contact Us | Follow us on: <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a></p>
      </footer>
    </div>
  );
}

export default About;
