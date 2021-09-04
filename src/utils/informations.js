/** 
 * @author: Alexander Chi
 * @description:
 * @date: 01/Septiembre/2021
**/ 
import smith from '../assets/images/image-colton.jpg';
import roberts from '../assets/images/image-irene.jpg';
import wallace from '../assets/images/image-anne.jpg';

export const information = {
    title: '10,000+ of our users love our products.',
    description: 'We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.',
    comments: [
        {number: 2, text: 'Rated 5 Stars in Reviews', position: 'top'},
        {number: 4, text: 'Rated 5 Stars in Report Guru', position: 'center'},
        {number: 1, text: 'Rated 5 Stars in BestTech', position: 'bottom'},
    ],
    cards: [
        {
            photo: smith,
            name: 'Colton Smith ',
            text: 'Verified Buyer',
            description: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
            position: 'left'
        },
        {
            photo: roberts,
            name: 'Irene Roberts',
            text: 'Verified Buyer',
            description: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
            position: 'middle'
        },
        {
            photo: wallace,
            name: 'Anne Wallace',
            text: 'Verified Buyer',
            description: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
            position: 'right'
        },
    ]
}

export default information;