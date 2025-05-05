import "../mainPage/styles/BrandsList.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const BrandsList = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const brands = [
    { id: 1, name: "Rolex", image: "../src/assets/imgs/rolex_icon_brand.svg" },
    { id: 2, name: "Cartier", image: "../src/assets/imgs/cartier_icon_brand.jpg" },
    { id: 3, name: "Rolls Royce", image: "../src/assets/imgs/rolls_royce_icon_brand.jpg" },
    { id: 4, name: "Bentley", image: "../src/assets/imgs/bentley_icon_brand.jpg" },
    { id: 5, name: "Chanel", image: "../src/assets/imgs/chanel_icon_brand.jpg" }
  ];

  return (
    <>
      <h2 className="brands-title-container mt-3">Most popular brands</h2>
    <section className="brands-list">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        ssr={true}
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="carousel"
      >
        {brands.map((brand) => (
          <div className="brand-card" key={brand.id}>
            <img src={brand.image} alt={brand.name} className="brand-image" />
            <h3 className="brand-name">{brand.name}</h3>
          </div>
        ))}
      </Carousel>
    </section>
    </>
  );
};

export default BrandsList;
