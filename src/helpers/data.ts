import avatar1 from '../assets/images/avatarTestimonials1.jpg';
import avatar2 from '../assets/images/avatarTestimonials2.jpg';


export const activities = [
    {title: 'Body Pump', body: 'Weight training is a complete activity that helps tone and strengthen muscles throughout the whole body. Experience the benefits of weight training, such as increased endurance, flexibility, and self-confidence.'},
    {title: 'Boxing', body: 'The boxing is an intense and complete physical activity that works various muscle groups, improves motor coordination, and increases physical and mental endurance.'},
    {title: 'Zumba', body: 'Zumba is a fun and energizing physical activity that combines dance with aerobic exercise, helping to burn calories and improve cardiovascular health.'}
];

export const testimonials = [
    {
        name: "Mary",
        title: "Great experience!", 
        body: "I loved the facilities and the staff was very helpful. The classes are diverse and the trainers are top-notch. Highly recommend it!",
        avatar: avatar1,
        rating: 4.5
    },
    { 
        name: "John",
        title: "Best gym in town",
        body: "I have been a member for over a year now and I couldn't be happier. The equipment is always clean and the staff is friendly and knowledgeable.",
        avatar: avatar2,
        rating: 5
    },
    {   
        name: "Sarah",
        title: "Excellent service",
        body: "The classes are fun and challenging and the trainers are very motivating. I've seen great results since I joined this gym.",
        avatar: avatar1,
        rating: 4
    },
    {    
        name: "David",
        title: "Impressive facilities",
        body: "This gym has everything you need for a complete workout. The equipment is top-of-the-line and the facilities are well-maintained.",
        avatar: avatar2, 
        rating: 4.5
    },  
    {    
        name: "Maggie",
        title: "Friendly staff",
        body: "The staff at this gym are always welcoming and ready to help. They make you feel comfortable and motivated to reach your goals.",
        avatar: avatar1,
        rating: 4
    },
    {   
        name: "Alex",
        title: "Great value for money",
        body: "This gym offers a lot for a very reasonable price. The classes are great and the trainers are very knowledgeable.",
        avatar: avatar2,
        rating: 5
    },
    {    
        name: "Sophie",
        title: "Highly recommend it",
        body: "This gym has exceeded my expectations. The facilities are great, the classes are challenging and fun, and the staff is friendly and helpful.",
        avatar: avatar1,
        rating: 4.5
    },
    {
        name: "João Silva",
        title: "Exceeded my expectations",
        body: "I joined this gym expecting just a regular experience, but I was blown away by how friendly and helpful the staff was. They really make an effort to make you feel welcome and supported throughout your fitness journey.",
        avatar: avatar2,
        rating: 4.8
      },
];

export const plans = [
    {
        period: 'Monthly Plan',
        price: 150,
        payment: 'Payment via recurring credit card',
        access: 'Free access to all areas of the gym, except the parking lot',
        classes: 'Unlimited access to group classes',
        discount: '10% discount on extra services',
        extra: 'No extra',
        bgColor: '',
        main: false
    },
    {
        period: 'Quarterly Plan',
        price: 133,
        payment: 'Payment by check or credit card',
        access: 'Free access to all areas of the gym, except the parking lot',
        classes: 'Unlimited access to group classes',
        discount: '15% discount on extra services',
        extra: 'No extra',
        bgColor: '',
        main: true
    },
    {
        period: 'Annual Plan',
        price: 100,
        payment: 'Payment by check or credit card',
        access: 'Free access to all areas of the gym, including the parking lot',
        classes: 'Unlimited access to group classes',
        discount: '20% discount on extra services',
        extra: 'Nutritional evaluation',
        bgColor: '',
        main: false
    }
];