import React from 'react'
import background from '../Assets/parallex.png'

function Aboutpage() {
    return (
        <div>
            <div style={{
                PaddingTop: '100px',
                width: '100%', // Full viewport width
                height: '95vh', // Full viewport height
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover', // Ensure proper background size
                backgroundPosition: 'center',
                marginBottom: '100px',
            }}>

                <div className="flex justify-center items-center h-64 sm:h-80 md:h-96 lg:max-h-full">
                    <span className="text-center text-white font-black font-serif text-sm sm:text-base md:text-lg lg:text-7xl">
                        About Us
                    </span>
                </div>
            </div>

            <div className="flex flex-col lg:flex items-center p-6 lg:p-12 bg-white w-full mx-auto">
                <div className="lg:w-1/2 p-4">
                    <h2 className="text-4xl text-center font-bold mb-4 text-[#2c2c2c]">About Us</h2>
                    <p className="text-lg leading-7 text-center mb-4 text-[#2c2c2c]">
                        USPizza is all about quality you can trust. As one of the original founding Pizza brands and the 3rd largest Pizza chain in India, our sole mission is making the freshest, tastiest and cheesiest Pizza around.
                    </p>
                    <p className="text-lg leading-7 text-center text-[#2c2c2c]">
                        Our classic pan pizza will always be a fan favourite, with a soft and chewy crust perfectly balancing out the healthy tomato pure and mozzarella - cheddar blended cheese.<br />
                    </p>
                    <p className="text-lg leading-7 text-center text-[#2c2c2c]">
                        Our authentic Italian crust for those who would prefer a light and airy crust to more fully enjoy the toppings. Thin, light and delicious.<br />
                    </p>
                    <p className="text-lg leading-7 text-center text-[#2c2c2c]">
                        Our newest addition of Puree sauces will blow your mind. Chose between a spicy buffalo, sweet bbq, tangy chipotle can creamy makhni to perfectly compliment your toppings and crust. Our suggestions of combinations might be helpful but ultimately the power lies with you. <br />
                    </p>
                    <p className="text-lg leading-7 text-center text-[#2c2c2c]">
                        Contrary to industry standard strategy, USPizza, since 1996, has been committed to growing our brand slowly and steadily. Every outlet is carefully selected on strict criteria. To be a USPizza franchisee is a privilege unto itself. The same commitment to product and service perfection we practice is expected from our partners.<br />
                    </p>
                    <p className="text-lg leading-7 text-center text-[#2c2c2c]">
                        Our outlets designed by leading architects to reflect our philosophy of being open and inviting, while putting our customer comfort on priority.<br />
                    </p>
                    <p className="text-lg leading-7 text-center text-[#2c2c2c]">
                        Everywhere we go, we hear ‘Your pizza is the tastiest pizza around, why aren’t you open in my location’. The answer is simple, every outlet opened is a promise to our customer, and not one we take lightly.<br />
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Aboutpage;
