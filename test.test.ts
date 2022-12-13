import {MorganPO} from "./pageObjects";
const fs = require('fs')

const MorganTest = new MorganPO();


describe("Morgan's Solo Capstone for Luma", () => {
    beforeEach(async () =>{
        await MorganTest.navigate();
    });
    
    afterAll(async() =>{
        await MorganTest.driver.quit();
    })

    test("Create new user account and add default shipping address", async ()=>{
        await MorganTest.click(MorganTest.creatAnAcctBtn);
        await MorganTest.setInput(MorganTest.firstName, "Morgan");
        await MorganTest.setInput(MorganTest.lastName, "Test");
        await MorganTest.setInput(MorganTest.email, "morgantest@test.com");
        await MorganTest.setInput(MorganTest.password, "123xyz#$%");
        await MorganTest.setInput(MorganTest.confirmPassword, "123xyz#$%");
        await MorganTest.click(MorganTest.creatAnAcctBtn);
        await MorganTest.click(MorganTest.addAddress);
        await MorganTest.setInput(MorganTest.phoneNumber, "123-456-7890");
        await MorganTest.setInput(MorganTest.streetAddress, "123 Bonkers Way");
        await MorganTest.setInput(MorganTest.city, "Timbuktu");
        await MorganTest.setInput(MorganTest.zip, "12345");
        await MorganTest.click(MorganTest.saveAddress);
        await MorganTest.click(MorganTest.dropDownMenu);
        await MorganTest.click(MorganTest.signOutBtn);
     })

    
    test("Signing In and Out of user account", async ()=>{
        //test two
    })
    
    test("Adding and removing items from Wishlist", async ()=>{
        //test three
    })
    
    test("Adding and removing items from Compare list", async ()=>{
        //test four
    })
    
    test("Adding Items to cart and checking out", async ()=>{
        //test five
    })
})