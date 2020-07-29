const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const data = {
    users: [
        {
            _id: user1Id,
            avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
            email: 'developer0606@gmail.com',
            name: 'Luis Rodriguez',
            username: 'developer',
            info: 'Hello I am Luis I am a developer!',
            password: '123456789',
            role: 'admin'
        },
        {
            _id: user2Id, 
            avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
            email: 'lrdgzc@gmail.com',
            name: 'Luis Rodriguez',
            username: 'lrdgzc',
            info: 'Hello I am Luis I am a developer!',
            password: '123456789'
        }
    ],
    portfolios: [
        { 
            title: 'Job in RD1', 
            company: 'Test', 
            companyWebSite: 'google.com', 
            location: 'Santiago RD', 
            jobTitle: 'Developer', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nunc, elementum eget purus sit amet, elementum sollicitudin est. Sed ultricies lorem elit, nec egestas augue sodales in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam turpis elit, consectetur vel iaculis pharetra, vestibulum vel orci. Fusce eu massa in lorem viverra pulvinar sit amet in ligula. Ut pulvinar, diam a consequat tempor, augue dolor consequat orci, vitae tincidunt leo dui et erat. Sed et tellus congue, congue metus a, consequat odio. Fusce a libero sit amet ex posuere finibus. Etiam quis nisi tincidunt, laoreet sem nec, posuere ante. Proin at tellus sollicitudin ante hendrerit tempus. Sed mauris orci, maximus eget lorem vel, faucibus feugiat orci. Ut ornare nibh sed magna volutpat venenatis. In efficitur et diam non pretium. Etiam id mi vel odio placerat faucibus ac quis mi. Vestibulum ut tempus sem, ac porttitor neque.', 
            startDate: '01/01/2014', 
            endDate: '01/01/2015',
            user: user1Id
        },
        { 
            title: 'Job in RD2', 
            company: 'Test', 
            companyWebSite: 'google.com', 
            location: 'Santiago RD', 
            jobTitle: 'Developer', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nunc, elementum eget purus sit amet, elementum sollicitudin est. Sed ultricies lorem elit, nec egestas augue sodales in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam turpis elit, consectetur vel iaculis pharetra, vestibulum vel orci. Fusce eu massa in lorem viverra pulvinar sit amet in ligula. Ut pulvinar, diam a consequat tempor, augue dolor consequat orci, vitae tincidunt leo dui et erat. Sed et tellus congue, congue metus a, consequat odio. Fusce a libero sit amet ex posuere finibus. Etiam quis nisi tincidunt, laoreet sem nec, posuere ante. Proin at tellus sollicitudin ante hendrerit tempus. Sed mauris orci, maximus eget lorem vel, faucibus feugiat orci. Ut ornare nibh sed magna volutpat venenatis. In efficitur et diam non pretium. Etiam id mi vel odio placerat faucibus ac quis mi. Vestibulum ut tempus sem, ac porttitor neque.', 
            startDate: '01/01/2014', 
            endDate: '01/01/2015',
            user: user1Id
        },
        { 
            title: 'Job in RD3', 
            company: 'Test', 
            companyWebSite: 'google.com', 
            location: 'Santiago RD', 
            jobTitle: 'Developer', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nunc, elementum eget purus sit amet, elementum sollicitudin est. Sed ultricies lorem elit, nec egestas augue sodales in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam turpis elit, consectetur vel iaculis pharetra, vestibulum vel orci. Fusce eu massa in lorem viverra pulvinar sit amet in ligula. Ut pulvinar, diam a consequat tempor, augue dolor consequat orci, vitae tincidunt leo dui et erat. Sed et tellus congue, congue metus a, consequat odio. Fusce a libero sit amet ex posuere finibus. Etiam quis nisi tincidunt, laoreet sem nec, posuere ante. Proin at tellus sollicitudin ante hendrerit tempus. Sed mauris orci, maximus eget lorem vel, faucibus feugiat orci. Ut ornare nibh sed magna volutpat venenatis. In efficitur et diam non pretium. Etiam id mi vel odio placerat faucibus ac quis mi. Vestibulum ut tempus sem, ac porttitor neque.', 
            startDate: '01/01/2014', 
            endDate: '01/01/2015',
            user: user1Id
        },
        { 
            title: 'Job in RD4', 
            company: 'Test', 
            companyWebSite: 'google.com', 
            location: 'Santiago RD', 
            jobTitle: 'Developer', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nunc, elementum eget purus sit amet, elementum sollicitudin est. Sed ultricies lorem elit, nec egestas augue sodales in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam turpis elit, consectetur vel iaculis pharetra, vestibulum vel orci. Fusce eu massa in lorem viverra pulvinar sit amet in ligula. Ut pulvinar, diam a consequat tempor, augue dolor consequat orci, vitae tincidunt leo dui et erat. Sed et tellus congue, congue metus a, consequat odio. Fusce a libero sit amet ex posuere finibus. Etiam quis nisi tincidunt, laoreet sem nec, posuere ante. Proin at tellus sollicitudin ante hendrerit tempus. Sed mauris orci, maximus eget lorem vel, faucibus feugiat orci. Ut ornare nibh sed magna volutpat venenatis. In efficitur et diam non pretium. Etiam id mi vel odio placerat faucibus ac quis mi. Vestibulum ut tempus sem, ac porttitor neque.', 
            startDate: '01/01/2014', 
            endDate: '01/01/2015',
            user: user1Id
        },
        { 
            title: 'Job in RD5', 
            company: 'Test', 
            companyWebSite: 'google.com', 
            location: 'Santiago RD', 
            jobTitle: 'Developer', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nunc, elementum eget purus sit amet, elementum sollicitudin est. Sed ultricies lorem elit, nec egestas augue sodales in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam turpis elit, consectetur vel iaculis pharetra, vestibulum vel orci. Fusce eu massa in lorem viverra pulvinar sit amet in ligula. Ut pulvinar, diam a consequat tempor, augue dolor consequat orci, vitae tincidunt leo dui et erat. Sed et tellus congue, congue metus a, consequat odio. Fusce a libero sit amet ex posuere finibus. Etiam quis nisi tincidunt, laoreet sem nec, posuere ante. Proin at tellus sollicitudin ante hendrerit tempus. Sed mauris orci, maximus eget lorem vel, faucibus feugiat orci. Ut ornare nibh sed magna volutpat venenatis. In efficitur et diam non pretium. Etiam id mi vel odio placerat faucibus ac quis mi. Vestibulum ut tempus sem, ac porttitor neque.', 
            startDate: '01/01/2014', 
            endDate: '01/01/2015',
            user: user2Id
        },
    ]
}


module.exports = data;