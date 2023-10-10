import { Link } from 'react-router-dom';
import * as SC from './HomePage.styled';

const HomePage = () => {
    return (
        <>
            <main>
                <SC.MainImage
                    src="https://cdn.pixabay.com/photo/2020/11/06/09/30/man-5717288_1280.jpg"
                    alt="happy driver"
                />
                <SC.BackDrop>
                    <SC.MainTitle>
                        Compare car rentals and save up to 50%
                    </SC.MainTitle>
                    <SC.MainText>
                        With more than 15 years of online Car Rental market
                        experience we guarantee value for money!
                    </SC.MainText>
                    <Link to="/catalog">
                        <SC.MainButton type="button" variant="contained">
                            Catalog
                        </SC.MainButton>
                    </Link>
                </SC.BackDrop>
            </main>
            <SC.Section>
                <h2>Why Us</h2>
                <SC.AdventageBox>
                    <SC.AdventageItem>
                        <img
                            src="https://cdn.economybookings.com/_next/static/img/diversity-3157d1d4f2a451cee31253b5b39442c3.svg?w=1920&q=100"
                            alt=""
                        />
                        <h2>Diversity</h2>
                        <div>
                            We guarantee that you will find the best car for
                            your trip thanks to special offers from 800+
                            suppliers.
                        </div>
                    </SC.AdventageItem>
                    <SC.AdventageItem>
                        <img
                            src="https://cdn.economybookings.com/_next/static/img/discountBadge-fb1824a12bbded45c14f20fd9945d014.svg?w=1920&q=100"
                            alt=""
                        />
                        <h2>Value for Money</h2>
                        <div>
                            We are happy to offer our customers the best prices
                            due to having access to discounts provided by rental
                            companies.
                        </div>
                    </SC.AdventageItem>
                    <SC.AdventageItem>
                        <img
                            src="https://cdn.economybookings.com/_next/static/img/cup-56d3955e00d5cf254c448986d0d3f650.svg?w=1920&q=100"
                            alt=""
                        />
                        <h2>Experience & Expertise</h2>
                        <div>
                            With over a decade on the market, we are one of the
                            most experienced and trusted experts in the car
                            rental field.
                        </div>
                    </SC.AdventageItem>
                </SC.AdventageBox>
            </SC.Section>
        </>
    );
};

export default HomePage;
