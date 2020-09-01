var shopper = {
    name : "Tiffany",
    age : 29,
    paidWithCash : true,
    groceryCart : ["steak", "bread", "lettuce", "soda"],

    nameAndAge : function () {
        return this. name + "" + this.age;
    }

}
    console.log(shopper.nameAndAge());