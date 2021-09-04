/** 
 * @author: Alexander Chi
 * @description:
 * @date: 01/Septiembre/2021
**/ 
import './App.scss';
import information from './utils/informations';

const App = (props) => {
    const { title, description, comments, cards } = information;
    return (
        <div className="container">
            <div className="content">
                <div className="row one">
                    <div className="head">
                        <div className="head__content">
                            <h3 className="title">{title}</h3>
                            <p className="description">{description}</p>
                        </div>
                    </div>
                    <div className="stars">
                        {comments.map((star, index) => {
                            return <ItemStar key={`star-${index}`} text={star.text} number={star.number} position={star.position} />
                        })}
                    </div>
                </div>
                <div className="row">
                    {cards.map((card, index) => {
                        return <Card key={`card-${index}`} card={card} />
                    })}
                </div>
            </div>
        </div>
    );
}

const ItemStar = (props) => {
    const { text, number, position } = props;
    return (
        <div className={`stars__container ${position}`}>
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
            <div className="card__container">
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
        </div>
    );
}

export default App;