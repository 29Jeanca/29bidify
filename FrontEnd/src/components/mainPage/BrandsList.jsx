import "../mainPage/styles/BrandsList.css";
const BrandsList = () =>{
    const brands = [
        {id: 1, name: "Rolex", image: "../src/assets/imgs/rolex_icon_brand.svg"},
        {id: 2, name: "Jordan", image: "../src/assets/imgs/jordan_icon_brand.svg"},
        {id: 3, name: "Puma", image: "../src/assets/imgs/puma_icon_brand.svg"},
    ]
    return(
        <>
        <section className="brands-list">
            <h2 className="brands-title-container">Most popular brands</h2>
            <div className="brands-container">
                {brands.map((brand) => (
                    <div className="brand-card" key={brand.id}>
                        <img src={brand.image} alt={brand.name} className="brand-image" />
                        <h3 className="brand-name">{brand.name}</h3>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}
export default BrandsList;