
class User {
    constructor( model ){
        this.Model = model;
    }

    async getAuthUser(ctx) {
        if(ctx.isAuthenticated()){
            return ctx.getUser();
        }

        return null;
    }

    async signUp(signUpData){
        if(signUpData.password !== signUpData.passwordConfirmation){
            throw new Error('Password must be the same as confirmation password!');
        }

        try {
            return await this.Model.create(signUpData);
        } catch (e) {
            if(e.code && e.code === 11000) {
                throw new Error('User with provided email already exists!');
            }

            throw e;
        }
    }

    async signIn(signInData, ctx){
        try {
            const user = await ctx.authenticate(signInData);
            return user;
        } catch (error) {
            return error;
        }
    }

    signOut(ctx){
        try { 
            console.log('BEFORE LOGOUT ---------------------');
            console.log('Is Authenticated', ctx.isAuthenticated());
            console.log('User', ctx.getUser());
            ctx.logout();
            console.log('AFTER LOGOUT ---------------------');
            console.log('Is Authenticated', ctx.isAuthenticated());
            console.log('User', ctx.getUser());
            return true;
        } catch (e) {
            return false;
        }
    }

}

module.exports = User;