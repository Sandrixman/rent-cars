import { Section } from './CarCard.styled';

const CarCard = ({ cars }) => {
    return (
        <Section>
            {cars.map(({ id, img, name }) => (
                <div key={id}>
                    <img src={img} alt="" />
                    <div>{name}</div>
                </div>
            ))}
        </Section>
    );
};

export default CarCard;
