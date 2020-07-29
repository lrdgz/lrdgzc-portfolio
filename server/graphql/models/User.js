
class User {
    constructor( model ){
        this.Model = model;
    }

    async signUp(signUpData){
        if(signUpData.password !== signUpData.passwordConfirmation){
            throw new Error('Password must be the same as confirmation password!');
        }

        return await this.Model.create(signUpData);
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