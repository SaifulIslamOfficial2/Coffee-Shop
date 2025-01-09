
import icon1 from "../../assets/image/icons/1.png";
import icon2 from "../../assets/image/icons/2.png";
import icon3 from "../../assets/image/icons/3.png";
import icon4 from "../../assets/image/icons/4.png";

function Cetagory() {
  const categories = [
    {
      icon: icon1,
      title: 'Awesome Aroma',
      description: 'You will definitely be a fan of the design & aroma of your coffee.',
    },
    {
      icon: icon2,
      title: 'High Quality',
      description: 'We served the coffee to you, maintaining the best quality.',
    },
    {
      icon: icon3,
      title: 'Pure Grades',
      description: 'The coffee is made of the green coffee beans which you will love.',
    },
    {
      icon: icon4,
      title: 'Proper Roasting',
      description: 'Your coffee is brewed by first roasting the green coffee beans.',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="text-center bg-white shadow-md hover:bg-slate-300 hover:text-white hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg"
            >
              {/* Render the image */}
              <div className="mb-4">
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl text-[#4b2a2a] font-semibold mb-2 ">
                {category.title}
              </h3>
              <p className= "text-[#4b2a2a] ">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cetagory;
