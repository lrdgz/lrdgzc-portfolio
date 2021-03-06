exports.portfolioQueries = {
    portfolio: async (root, {id}, ctx) => {
        return await ctx.models.Portfolio.getById(id);
    },

    portfolios: async (root, args, ctx) => {
        return await ctx.models.Portfolio.getAll();
    }
};

exports.portfolioMutations = {

    createPortfolio: async (root, { input }, ctx) => {
        const createdPortfolio = await ctx.models.Portfolio.create(input);
        return createdPortfolio;
    },

    updatePortfolio: async (root, { id, input }, ctx) => {
        const updatedPortfolio = await ctx.models.Portfolio.findAndUpdate(id, input);
        return updatedPortfolio;
    },

    deletePortfolio: async (root, { id }, ctx) => {
        const deletedPortfolio = await ctx.models.Portfolio.findAndDelete(id);
        return deletedPortfolio._id;
    },

};


exports.userQueries = {
    user: async (root, args, ctx) => {
        return await ctx.models.User.getAuthUser(ctx);
    }
};

exports.userMutations = {

    signUp: async (root, { input }, ctx) => {
        const registerUser = await ctx.models.User.signUp(input);
        return registerUser._id;
    },

    signIn: async (root, { input }, ctx) => {
        return await ctx.models.User.signIn(input, ctx);
    },

    signOut: async (root, args, ctx) => {
        return await ctx.models.User.signOut(ctx);
    },

};