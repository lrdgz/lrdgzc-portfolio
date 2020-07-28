
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


    async signIn(){
        return 'Signin In...';
    }

    async signOut(){
        return 'Signin Out...';
    }

}

module.exports = User;