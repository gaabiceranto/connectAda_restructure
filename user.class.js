export class User{
    firstName;
    lastName;
    userName;
    email;
    password;
    confirmPassword;

    constructor(firstName, lastName, userName, email, password, confirmPassword ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    

}