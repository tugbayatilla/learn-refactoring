/*
    Refactoring Technique: 
    Message Chains: 
    Occurs when a client asks one object for another object, which the client then asks for another object, and so on. 
    This creates tight coupling and violates the law of Demeter.
*/

// Example Before Refactoring (with Message Chain)

class Address {
    getCountry() {
        // returns the country
    }
}

class Customer {
    getAddress() {
        return new Address();
    }
}

class Order {
    getCustomer() {
        return new Customer();
    }
}

// Usage
const order = new Order();
const country = order.getCustomer().getAddress().getCountry();


// Example After Refactoring (Breaking the Chain)

class RefactoredOrder {
    getCustomer() {
        return new Customer();
    }

    // Adding a method to encapsulate the chain
    getCustomerCountry() {
        return this.getCustomer().getAddress().getCountry();
    }
}

// Usage
const refactoredOrder = new RefactoredOrder();
const sameCountry = refactoredOrder.getCustomerCountry();
