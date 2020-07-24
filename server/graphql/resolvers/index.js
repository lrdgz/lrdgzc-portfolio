const data = {
    portfolios: [
        { _id: '32aaasssaa', title: 'Job in RD', company: 'Test', companyWebSite: 'google.com', location: 'Santiago RD', jobTitle: 'Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nunc, elementum eget purus sit amet, elementum sollicitudin est. Sed ultricies lorem elit, nec egestas augue sodales in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam turpis elit, consectetur vel iaculis pharetra, vestibulum vel orci. Fusce eu massa in lorem viverra pulvinar sit amet in ligula. Ut pulvinar, diam a consequat tempor, augue dolor consequat orci, vitae tincidunt leo dui et erat. Sed et tellus congue, congue metus a, consequat odio. Fusce a libero sit amet ex posuere finibus. Etiam quis nisi tincidunt, laoreet sem nec, posuere ante. Proin at tellus sollicitudin ante hendrerit tempus. Sed mauris orci, maximus eget lorem vel, faucibus feugiat orci. Ut ornare nibh sed magna volutpat venenatis. In efficitur et diam non pretium. Etiam id mi vel odio placerat faucibus ac quis mi. Vestibulum ut tempus sem, ac porttitor neque.', startDate: '01/01/2014', endDate: '01/01/2015' },
        { _id: '33aaasssaa', title: 'Job in RD', company: 'Test', companyWebSite: 'google.com', location: 'Santiago RD', jobTitle: 'Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nunc, elementum eget purus sit amet, elementum sollicitudin est. Sed ultricies lorem elit, nec egestas augue sodales in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam turpis elit, consectetur vel iaculis pharetra, vestibulum vel orci. Fusce eu massa in lorem viverra pulvinar sit amet in ligula. Ut pulvinar, diam a consequat tempor, augue dolor consequat orci, vitae tincidunt leo dui et erat. Sed et tellus congue, congue metus a, consequat odio. Fusce a libero sit amet ex posuere finibus. Etiam quis nisi tincidunt, laoreet sem nec, posuere ante. Proin at tellus sollicitudin ante hendrerit tempus. Sed mauris orci, maximus eget lorem vel, faucibus feugiat orci. Ut ornare nibh sed magna volutpat venenatis. In efficitur et diam non pretium. Etiam id mi vel odio placerat faucibus ac quis mi. Vestibulum ut tempus sem, ac porttitor neque.', startDate: '01/01/2014', endDate: '01/01/2015' },
        { _id: '34aaasssaa', title: 'Job in RD', company: 'Test', companyWebSite: 'google.com', location: 'Santiago RD', jobTitle: 'Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nunc, elementum eget purus sit amet, elementum sollicitudin est. Sed ultricies lorem elit, nec egestas augue sodales in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam turpis elit, consectetur vel iaculis pharetra, vestibulum vel orci. Fusce eu massa in lorem viverra pulvinar sit amet in ligula. Ut pulvinar, diam a consequat tempor, augue dolor consequat orci, vitae tincidunt leo dui et erat. Sed et tellus congue, congue metus a, consequat odio. Fusce a libero sit amet ex posuere finibus. Etiam quis nisi tincidunt, laoreet sem nec, posuere ante. Proin at tellus sollicitudin ante hendrerit tempus. Sed mauris orci, maximus eget lorem vel, faucibus feugiat orci. Ut ornare nibh sed magna volutpat venenatis. In efficitur et diam non pretium. Etiam id mi vel odio placerat faucibus ac quis mi. Vestibulum ut tempus sem, ac porttitor neque.', startDate: '01/01/2014', endDate: '01/01/2015' },
        { _id: '35aaasssaa', title: 'Job in RD', company: 'Test', companyWebSite: 'google.com', location: 'Santiago RD', jobTitle: 'Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nunc, elementum eget purus sit amet, elementum sollicitudin est. Sed ultricies lorem elit, nec egestas augue sodales in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam turpis elit, consectetur vel iaculis pharetra, vestibulum vel orci. Fusce eu massa in lorem viverra pulvinar sit amet in ligula. Ut pulvinar, diam a consequat tempor, augue dolor consequat orci, vitae tincidunt leo dui et erat. Sed et tellus congue, congue metus a, consequat odio. Fusce a libero sit amet ex posuere finibus. Etiam quis nisi tincidunt, laoreet sem nec, posuere ante. Proin at tellus sollicitudin ante hendrerit tempus. Sed mauris orci, maximus eget lorem vel, faucibus feugiat orci. Ut ornare nibh sed magna volutpat venenatis. In efficitur et diam non pretium. Etiam id mi vel odio placerat faucibus ac quis mi. Vestibulum ut tempus sem, ac porttitor neque.', startDate: '01/01/2014', endDate: '01/01/2015' },
        { _id: '36aaasssaa', title: 'Job in RD', company: 'Test', companyWebSite: 'google.com', location: 'Santiago RD', jobTitle: 'Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nunc, elementum eget purus sit amet, elementum sollicitudin est. Sed ultricies lorem elit, nec egestas augue sodales in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam turpis elit, consectetur vel iaculis pharetra, vestibulum vel orci. Fusce eu massa in lorem viverra pulvinar sit amet in ligula. Ut pulvinar, diam a consequat tempor, augue dolor consequat orci, vitae tincidunt leo dui et erat. Sed et tellus congue, congue metus a, consequat odio. Fusce a libero sit amet ex posuere finibus. Etiam quis nisi tincidunt, laoreet sem nec, posuere ante. Proin at tellus sollicitudin ante hendrerit tempus. Sed mauris orci, maximus eget lorem vel, faucibus feugiat orci. Ut ornare nibh sed magna volutpat venenatis. In efficitur et diam non pretium. Etiam id mi vel odio placerat faucibus ac quis mi. Vestibulum ut tempus sem, ac porttitor neque.', startDate: '01/01/2014', endDate: '01/01/2015' },
    ]
}

exports.portfolioQueries = {
    hello: () => {
        return 'Hello World'
    },

    portfolio: (root, {id}) => {
        const portfolio = data.portfolios.find(p => p._id === id);
        return portfolio;
    },

    portfolios: () => {
        return data.portfolios
    }
};

exports.portfolioMutations = {

    createPortfolio: (root, { input }) => {
        const _id = require('crypto').randomBytes(10).toString('hex');
        const newPortfolio = {...input};
        newPortfolio._id = _id;
        data.portfolios.push(newPortfolio);
        return newPortfolio;
    },

    updatePortfolio: (root, { id, input }) => {
        const index = data.portfolios.findIndex(p => p._id === id);
        const oldPortfolio = data.portfolios[index];
        const newPortfolio = { ...oldPortfolio, ...input };
        data.portfolios[index] = newPortfolio;
        return newPortfolio;
    },

    deletePortfolio: (root, { id }) => {
        const index = data.portfolios.findIndex(p => p._id === id);
        data.portfolios.splice(index, 1);
        return id;
    },

};