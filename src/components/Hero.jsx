export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-label">YOUR DAILY SELF-CARE ✨</span>
        <h1>
          Glow Naturally.
          <br />
          <span>Feel Beautiful.</span>
        </h1>

        <p>
          Discover your everyday beauty essentials.
          A little care, a little love, and a whole lot of glow.
        </p>

        <a href="#products" className="hero-button">
          Explore Products →
        </a>

        <div className="hero-stats">
          <div>
            <strong>100%</strong>
            <span>Self Care</span>
          </div>
          <div>
            <strong>Glow</strong>
            <span>Every Day</span>
          </div>
          <div>
            <strong>♡</strong>
            <span>Love Your Skin</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900"
          alt="Beauty and body care"
        />
        <div className="hero-floating">
          <span>🌸</span>
          <p>Make self-care your favourite ritual</p>
        </div>
      </div>
    </section>
  );
}