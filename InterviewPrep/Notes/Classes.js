class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers() {
        console.log('There are 50 users');
    }

    register() {
        console.log(this.username + ' is now registered.');
    }

}


let bob = new User('bob', 'bob@bob.com', 'bobby123');

bob.register();

// static method do not need objects instantiated.
User.countUsers();


class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.memberPackage = memberPackage;
    }

    getPackage() {
        console.log(this.username + ' is subscribed to the ' + this.memberPackage);
    }
}


let mike = new Member('mikey', 'mike@mike.com', 'mike123', 'Pro');
mike.register();
mike.getPackage();