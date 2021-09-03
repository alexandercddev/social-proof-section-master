/** 
 * @author: Alexander Chi
 * @description:
 * @date: 01/Septiembre/2021
**/ 
import './App.scss';

const information = {
    title: '10,000+ of our users love our products.',
    description: 'We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.',
    comments: [
        {number: 2, text: 'Rated 5 Stars in Reviews'},
        {number: 4, text: 'Rated 5 Stars in Report Guru'},
        {number: 1, text: 'Rated 5 Stars in BestTech'},
    ],
    cards: [
        {
            photo: null,
            name: 'Colton Smith ',
            text: 'Verified Buyer',
            description: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
            position: 'left'
        },
        {
            photo: null,
            name: 'Irene Roberts',
            text: 'Verified Buyer',
            description: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
            position: 'middle'
        },
        {
            photo: null,
            name: 'Anne Wallace',
            text: 'Verified Buyer',
            description: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
            position: 'right'
        },
    ]
}

const App = (props) => {
    const { title, description, comments, cards } = information;
    return (
        <section className="container">
            <div className="content">
                <div className="row">
                    <div className="head">
                        <h3 className="title">{title}</h3>
                        <p className="description">{description}</p>
                    </div>
                    <div className="stars">
                        {comments.map((star, index) => {
                            return <ItemStar text={star.text} number={star.number} />
                        })}
                    </div>
                </div>
                <div className="row">
                    {cards.map((card, index) => {
                        return <Card card={card} />
                    })}
                </div>
            </div>
        </section>
    );
}

const ItemStar = (props) => {
    const { text, number } = props;
    return (
        <div className="stars__container">
            <span className={`stars__content `}> 
            <i className={`start__${number}`}></i>
            <i className={`start__${number - 1}`}></i>
            <i className={`start__${number - 2}`}></i>
            <i className={`start__${number - 3}`}></i>
            <i className={`start__${number - 4}`}></i>
            </span>
            <span className="stars__text">{text}</span>
        </div>
    )
}

const Card = (props) => {
    const { photo, name, text, description, position  } = props.card;
    return (
        <div className={`card ${position}`}>
            <div className="card__head">
                <img alt={name} src={photo} />
                <div className="card__content">
                    <span className="card__name">{name}</span>
                    <span className="card__text">{text}</span>
                </div>
            </div>
            <div className="card__description">
                {description}
            </div>
        </div>
    );
}

export default App;