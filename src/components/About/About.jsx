import nikolasImg from "../../assets/team/Nikolas.jpg";
import tabassumImg from "../../assets/team/Logo.png";
import ashwiniImg from "../../assets/team/Ashwini1.jpg";
import thongImg from "../../assets/team/Thong.jpg";

// todo: centralize the imges to instant/index.js and export them as an object, then import that object here and use the properties to access the images. This way we can avoid multiple imports and have a cleaner codebase.

const About = () => {
  const profiles = [
    {
      name: "Nikolas Wolf",
      role: "Lead Developer",
      funFact: "Loves hiking in the mountains.",
      image: nikolasImg, // 2. Use the imported variable, not a string
    },
    {
      name: "Tabassum Khan",
      role: "UX Designer",
      funFact: "Avid coffee enthusiast.",
      image: tabassumImg,
    },
    {
      name: "Ashwini Bhimereddy",
      role: "Project Manager",
      funFact: "Enjoys painting in her free time.",
      image: ashwiniImg,
    },
    {
      name: "Tuanthong Vaidyanand",
      role: "Software Engineer",
      funFact: "Loves playing chess.",
      image: thongImg,
    },
  ];

  return (
    <div className="about-container">
      {/* Banner Section */}
      <header className="about-banner">
        <div className="about-banner-text">
          <h1 className="about-banner-title text-gold-gradient">
            Welcome to ECOM EXPRESS – Your One-Stop Online Shop
          </h1>
        </div>
      </header>

      {/* Mission Section */}
      <section className="about-section animate-fadeInUp">
        <h2 className="about-section-title">Our Mission</h2>
        <p className="about-section-text">
          Our mission is to inspire and empower customers with quality products
          that meet their unique needs and values.
        </p>
      </section>

      {/* Values Section */}
      <section className="about-section animate-fadeInUp">
        <h2 className="about-section-title">Our Values</h2>
        <ul className="about-values-list">
          <li className="about-values-item">
            <span className="about-values-icon">❤️</span>
            Customer-Centricity
          </li>
          <li className="about-values-item">
            <span className="about-values-icon">🌱</span>
            Sustainability
          </li>
          <li className="about-values-item">
            <span className="about-values-icon">📈</span>
            Innovation
          </li>
          <li className="about-values-item">
            <span className="about-values-icon">🤝</span>
            Integrity
          </li>
        </ul>
      </section>

      {/* Tech Crew Profiles Section */}
      <section className="about-profiles-section">
        <h2 className="about-section-title">Meet the Tech Crew</h2>
        <div className="about-profiles-grid">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="about-profile-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={profile.image}
                alt={`${profile.name} Profile`}
                className="about-profile-avatar"
              />
              <h3 className="about-profile-name">{profile.name}</h3>
              <p className="about-profile-role">{profile.role}</p>
              <p className="about-profile-fact">Fun Fact: {profile.funFact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promise Section */}
      <section className="about-promise-section animate-fadeInUp">
        <h2 className="about-section-title">Your Satisfaction, Our Promise</h2>
        <p className="about-section-text">
          We are committed to delivering excellence and ensuring your
          satisfaction with every purchase. Explore our store or follow us on
          social media for updates!
        </p>
      </section>
    </div>
  );
};

export default About;
