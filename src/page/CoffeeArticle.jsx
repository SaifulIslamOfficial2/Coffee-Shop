import { Link } from "react-router-dom";
import img1 from "../assets/image/articale.png"


function CoffeeArticle() {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 md:px-16 lg:px-32 mt-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center">
        <img src={img1} alt="articale" />
        </div>
        {/* Title Section */}
        <h1 className="text-3xl mt-4 sm:text-4xl md:text-5xl font-bold text-center text-brown-800 mb-6">
           
          Would You Like a Cup of Delicious Coffee?
        </h1>
        <p className="text-sm sm:text-base text-gray-500 text-center mb-12">
          Explore the magic and nostalgia of coffee, one sip at a time.
        </p>

        {/* Content Section */}
        <div className="space-y-8 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-brown-700 mb-4">The Essence of Coffee</h2>
            <p>
              Coffee isn’t merely about caffeine—it’s about connection. It brings people together, sparks conversations, 
              and fuels creativity. From cozy cafes on street corners to the steaming pot at home, coffee has been a faithful 
              companion through centuries of human history.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-700 mb-4">Sip and Relax</h2>
            <p>
              Imagine holding a warm cup in your hands, feeling its comforting heat seep into your palms as you take a moment 
              to breathe. Coffee is more than a drink; it’s a chance to pause and savor life. It’s the small things, like the 
              frothy art atop your latte or the bold flavors of a well-brewed espresso, that create moments of peace and indulgence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-700 mb-4">Nostalgia in Every Sip</h2>
            <p>
              For many, coffee evokes a sense of nostalgia. It reminds us of late-night study sessions, early mornings with loved 
              ones, or long talks with friends at a favorite café. Every sip tells a story, and every cup carries memories.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-700 mb-4">A Global Love Affair</h2>
            <p>
              Coffee is a universal language. From the robust espressos of Italy to the smooth brews of Ethiopia, every culture 
              has its unique way of enjoying coffee. It’s a shared love that bridges continents and brings people together.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brown-700 mb-4">Make Every Moment Memorable</h2>
            <p>
              The next time you hold a cup of coffee, take a moment to truly enjoy it. Let its warmth, aroma, and taste remind 
              you to pause and appreciate life’s simple pleasures. Whether it’s a quiet moment alone or shared laughter with 
              friends, coffee adds a touch of magic to our everyday lives.
            </p>
          </section>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 flex justify-center">
          <Link to={"/coffeesection"} className="bg-[#D1A054] text-black font-medium px-6 py-3 rounded-lg hover:bg-transparent hover:border hover:text-[#D1A054] transition duration-300">
            Grab Your Cup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoffeeArticle;
