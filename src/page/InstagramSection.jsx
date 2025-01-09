

const InstagramSection = () => {
  const images = [
   
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
              src={img}
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
