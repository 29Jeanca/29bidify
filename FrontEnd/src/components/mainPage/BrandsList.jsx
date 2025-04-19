const BrandsList = () => {
    const brands = [
        {}
    ]
    return(
        <>
            <div>
                <ul>
                {brands.map((brand,index)=>(
                    <li key={index}>
                        <img src={brand.image} alt={brand.name} />
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}
export default BrandsList;