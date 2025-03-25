import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import assets from "../../Assets/assets";

const clientLogos = [
  assets.s1,
  assets.s2,
  assets.s3,
  assets.s4,
  assets.s5,
  assets.s6,
  assets.s7,
  assets.s8,
];

const OurClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-4xl mx-auto bg-gray-200 rounded-3xl my-6 px-3 py-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Schools that trust us</h2>
      <div className="hidden md:block">
        <Slider {...settings} className="w-full">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="w-40 h-40 object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:hidden">
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="w-40 h-40 object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default OurClients;