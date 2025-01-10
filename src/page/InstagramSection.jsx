import img1 from "../assets/image/cups/1.png"
import img2 from "../assets/image/cups/2.png"
import img3 from "../assets/image/cups/3.png"
import img4 from "../assets/image/cups/4.png"
import img5 from "../assets/image/cups/5.png"
import img6 from "../assets/image/cups/6.png"
import img7 from "../assets/image/cups/7.png"
import img8 from "../assets/image/cups/8.png"

const InstagramSection = () => {
  const images = [
    {
      name:img1
    },
    {
      name:img2
    },
    {
      name:img3
    },
    {
      name:img4
    },
    {
      name:img5
    },
    {
      name:img6
    },
    {
      name:img7
    },
    {
      name:img8
    },
    
    // Add more images as needed
  ];
  

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <p className="text-gray-700 text-sm">Follow Us Now</p>
        <h2 className="text-2xl font-bold text-brown-600">Follow on Instagram</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-auto max-w-5xl">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={img.name}
              alt={`Coffee ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
