import {MorganPO} from "./pageObjects";
const fs = require('fs')

const MorganTest = new MorganPO();

beforeEach(async()=>{
    await MorganTest.navigate();
})
afterAll(async ()=>{
    await MorganTest.driver.quit();
});

describe("Morgan's Solo Capstone for Luma", () => {

    test("Create new user account and add default shipping address", async ()=>{
        await MorganTest.click(MorganTest.createAnAcctLink);
        await MorganTest.setInput(MorganTest.firstName, "Morgan");
        await MorganTest.setInput(MorganTest.lastName, "Test");
        await MorganTest.setInput(MorganTest.email, "morganstest@test.ts");
        await MorganTest.setInput(MorganTest.password, "123xyz#$%");
        await MorganTest.setInput(MorganTest.confirmPassword, "123xyz#$%");
        await MorganTest.click(MorganTest.creatAnAcctBtn);
        await MorganTest.driver.sleep(100);
        await MorganTest.click(MorganTest.addAddress);
        await MorganTest.setInput(MorganTest.phoneNumber, "123-456-7890");
        await MorganTest.setInput(MorganTest.streetAddress, "123 Bonkers Way");
        await MorganTest.setInput(MorganTest.city, "Timbuktu");
        await MorganTest.click(MorganTest.stateMenu);
        await MorganTest.click(MorganTest.northCarolina);
        await MorganTest.setInput(MorganTest.zip, "12345");
        await MorganTest.click(MorganTest.saveAddress);
        await MorganTest.click(MorganTest.dropDwnMenuAfterSvingAddress);
        await MorganTest.driver.sleep(100);
        await MorganTest.click(MorganTest.signOutBtn);
        await MorganTest.driver.sleep(1000);
     })

    
    test("Signing In and Out of user account", async ()=>{
        await MorganTest.click(MorganTest.signInLink);
        await MorganTest.driver.sleep(100);
        await MorganTest.setInput(MorganTest.signInEmail, "morganstest@test.ts");
        await MorganTest.driver.sleep(300);
        await MorganTest.setInput(MorganTest.signInPassword, "123xyz#$%");
        await MorganTest.driver.sleep(300);
        await MorganTest.click(MorganTest.signInBtn);
        await MorganTest.driver.sleep(100);
        await MorganTest.click(MorganTest.dropDownMenu);
        await MorganTest.click(MorganTest.signOutBtn);
    
    })
    
    
    test("Adding and removing items from Wishlist", async ()=>{
        await MorganTest.click(MorganTest.signInLink);
        await MorganTest.driver.sleep(2000);
        await MorganTest.setInput(MorganTest.signInEmail, "morganstest@test.ts");
        await MorganTest.driver.sleep(1000);
        await MorganTest.setInput(MorganTest.signInPassword, "123xyz#$%");
        await MorganTest.driver.sleep(1000);
        await MorganTest.click(MorganTest.signInBtn);
        await MorganTest.click(MorganTest.womenCat);
        await MorganTest.click(MorganTest.womenJackets);
        await MorganTest.click(MorganTest.firstJacket);
        await MorganTest.click(MorganTest.addToWishlist);
        await MorganTest.click(MorganTest.menCat);
        await MorganTest.click(MorganTest.menPants);
        await MorganTest.click(MorganTest.firstPants);
        await MorganTest.click(MorganTest.addToWishlist);
        await MorganTest.driver.sleep(1000);
    // cannot figure out how to hover over first item in wishlist
      //  await MorganTest.click(MorganTest.trashcan);
    // hover over first item in wishlist again
       // await MorganTest.click(MorganTest.trashcan);
        await MorganTest.click(MorganTest.dropDownMenu);
        await MorganTest.click(MorganTest.signOutBtn);    
        await MorganTest.driver.sleep(1000);    
    })
    
    test("Adding and removing items from kpare list", async ()=>{
        await MorganTest.click(MorganTest.signInLink);
        await MorganTest.driver.sleep(2000);
        await MorganTest.setInput(MorganTest.signInEmail, "morganstest@test.ts");
        await MorganTest.driver.sleep(1000);
        await MorganTest.setInput(MorganTest.signInPassword, "123xyz#$%");
        await MorganTest.driver.sleep(1000);
        await MorganTest.click(MorganTest.signInBtn);
        await MorganTest.click(MorganTest.womenCat);
        await MorganTest.click(MorganTest.womenJackets);
        await MorganTest.click(MorganTest.secondWomenJacketItem);
        await MorganTest.click(MorganTest.addToCompare);
        await MorganTest.click(MorganTest.menCat);
        await MorganTest.click(MorganTest.menPants);
        await MorganTest.click(MorganTest.secondMenPantsItem);
        await MorganTest.click(MorganTest.addToCompare);
    // cannot figure out how to hover over first item in compare list
       // await MorganTest.click(MorganTest.trashcan);
    // hover over first item in compare list again
       // await MorganTest.click(MorganTest.trashcan);
        await MorganTest.click(MorganTest.dropDownMenu);
        await MorganTest.click(MorganTest.signOutBtn);  
        await MorganTest.driver.sleep(1000);
    })
    
    test("Adding Items to cart and checking out", async ()=>{
        await MorganTest.click(MorganTest.signInLink);
        await MorganTest.driver.sleep(2000);
        await MorganTest.setInput(MorganTest.signInEmail, "morganstest@test.ts");
        await MorganTest.driver.sleep(1000);
        await MorganTest.setInput(MorganTest.signInPassword, "123xyz#$%");
        await MorganTest.driver.sleep(1000)
        await MorganTest.click(MorganTest.signInBtn);
        await MorganTest.driver.sleep(3000);
        await MorganTest.click(MorganTest.womenCat);
        await MorganTest.click(MorganTest.womenJackets);
        await MorganTest.click(MorganTest.firstJacket);
        await MorganTest.click(MorganTest.womenJacketFirstSize);
        await MorganTest.click(MorganTest.womenJacketFirstItemColor);
        await MorganTest.click(MorganTest.addToCart);
        await MorganTest.driver.sleep(300);
        await MorganTest.click(MorganTest.menCat);
        await MorganTest.click(MorganTest.menPants);
        await MorganTest.click(MorganTest.firstPants);
        await MorganTest.click(MorganTest.menPantsFirstItemSize);
        await MorganTest.click(MorganTest.menPantsFirstItemColor);
        await MorganTest.click(MorganTest.addToCart);
        await MorganTest.driver.sleep(300);
        await MorganTest.click(MorganTest.cartIcon);
        await MorganTest.click(MorganTest.proceedToCart);
        await MorganTest.driver.sleep(300);
        await MorganTest.click(MorganTest.bestWayShipping);
        await MorganTest.click(MorganTest.nextBtn);
        await MorganTest.driver.sleep(900);
        await MorganTest.click(MorganTest.placeOrder);
    });

    
})
