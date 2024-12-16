const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "order",
        },
    ],
});

// customerSchema.pre("findOneAndDelete", async()=>{
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async(customer)=>{
    if(customer.orders.length){
        let res = await order.deleteMany({_id:{$in: customer.orders}})
        console.log(res);
    }
});

const order = mongoose.model("order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async()=>{
// let cust1 = new Customer({
//     name: "Ankit Singh",
// });
// let order1 = await order.findOne({ item : "chips"});
// let order2 = await order.findOne({ item : "chocolate"});

// cust1.orders.push(order1);
// cust1.orders.push(order2);

// let result = await cust1.save();
// console.log(result);
// };
// addCustomer();

// Function 

const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result);
};

const addCust = async () => {
    let newCust = new Customer({
        name: "Ankit singh",
    });

    let newOrder = new order({
        item: "Burger",
        price: 250,
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
};

// addCust();

const delCust = async () => {
    let data = await Customer.findByIdAndDelete('65867149ec133f4d0f19614e');
    console.log(data);
}
delCust();

// const addOrders = async () => {
//     let res = await order.insertMany([
//         { item: "somasa", price: 10 },
//         { item: "chips", price: 15 },
//         { item: "chocolate", price: 25 },
//     ]);
//     console.log(res);
// };

// addOrders();
