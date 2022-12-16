import { By } from "selenium-webdriver"
import {BasePage} from "./basePage"

export class MorganPO extends BasePage{

createAnAcctLink: By = By.xpath('/html/body/div[2]/header/div[1]/div/ul/li[3]/a')
firstName: By = By.xpath('/html/body/div[2]/main/div[3]/div/form/fieldset[1]/div[1]/div/input')
lastName: By = By.xpath('/html/body/div[2]/main/div[3]/div/form/fieldset[1]/div[2]/div/input')
email: By = By.xpath('/html/body/div[2]/main/div[3]/div/form/fieldset[2]/div[1]/div/input')
password: By = By.xpath('/html/body/div[2]/main/div[3]/div/form/fieldset[2]/div[2]/div/input')
confirmPassword: By = By.xpath('/html/body/div[2]/main/div[3]/div/form/fieldset[2]/div[3]/div/input')
creatAnAcctBtn: By = By.xpath('/html/body/div[2]/main/div[3]/div/form/div/div[1]/button')
addAddress: By = By.xpath('/html/body/div[2]/main/div[2]/div[1]/div[4]/div[1]/a')
phoneNumber: By = By.xpath('/html/body/div[2]/main/div[2]/div[1]/form/fieldset[1]/div[4]/div/input')
streetAddress: By = By.xpath('/html/body/div[2]/main/div[2]/div[1]/form/fieldset[2]/div[1]/div/input')
city: By = By.xpath('/html/body/div[2]/main/div[2]/div[1]/form/fieldset[2]/div[2]/div/input') 
stateMenu: By = By.xpath('/html/body/div[2]/main/div[2]/div[1]/form/fieldset[2]/div[3]/div/select')
northCarolina: By = By.xpath('/html/body/div[2]/main/div[2]/div[1]/form/fieldset[2]/div[3]/div/select/option[45]')
zip: By = By.xpath('/html/body/div[2]/main/div[2]/div[1]/form/fieldset[2]/div[4]/div/input')
saveAddress: By = By.xpath('/html/body/div[2]/main/div[2]/div[1]/form/div/div[1]/button')
signInLink: By = By.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/a')
signInBtn: By = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/div[1]/div[2]/form/fieldset/div[4]/div[1]/button')
signInEmail: By = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/div[1]/div[2]/form/fieldset/div[2]/div/input')
signInPassword: By = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/div[1]/div[2]/form/fieldset/div[3]/div/input')
dropDownMenu: By = By.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button')
signOutBtn: By = By.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[3]/a')
womenCat: By = By.xpath('/html/body/div[2]/div[1]/div/div[2]/nav/ul/li[2]/a')
womenJackets: By = By.xpath('/html/body/div[2]/main/div[4]/div[2]/div[2]/div/ul[1]/li[2]/a')
firstJacket: By = By.xpath('/html/body/div[2]/main/div[3]/div[1]/div[3]/ol/li[1]/div/div/strong/a')
addToWishlist: By = By.xpath('/html/body/div[2]/main/div[2]/div/div[1]/div[5]/div/a[1]')
menCat: By = By.xpath('/html/body/div[2]/div[1]/div/div[2]/nav/ul/li[3]/a')
menPants: By = By.xpath('/html/body/div[2]/main/div[4]/div[2]/div[2]/div/ul[2]/li[1]/a')
firstPants: By = By.xpath('/html/body/div[2]/main/div[3]/div[1]/div[3]/ol/li[1]/div/div/strong/a')
firstWishlistItem: By = By.xpath('/html/body/div[2]/main/div[2]/div[1]/form/div[1]/ol/li/div')
removeFromWishlist: By = By.xpath('/html/body/div[2]/main/div[2]/div[3]/div[3]/div[2]/ol/li[1]/div/div/div[2]/div[2]/a')
removeFromWishlistTwo: By = By.xpath('/html/body/div[2]/main/div[2]/div[3]/div[3]/div[2]/ol/li/div/div/div[2]/div[2]/a')
compareList: By = By.xpath('/html/body/div[2]/main/div[1]/div[2]/div/div/div/a')
compareRemoveOne: By = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/table/thead/tr/td[1]/a')
proceedToRemoveCompare: By = By.xpath('/html/body/div[3]/aside[2]/div[2]/footer/button[2]')
compareRemoveTwo: By = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/table/thead/tr/td/a')
secondWomenJacketItem: By = By.xpath('/html/body/div[2]/main/div[3]/div[1]/div[3]/ol/li[2]/div/div/strong/a')
secondMenPantsItem: By = By.xpath('/html/body/div[2]/main/div[3]/div[1]/div[3]/ol/li[2]/div/div/strong/a')
addToCompare: By = By.xpath('/html/body/div[2]/main/div[2]/div/div[1]/div[5]/div/a[2]')
womenJacketFirstSize: By = By.xpath('/html/body/div[2]/main/div[2]/div/div[1]/div[4]/form/div[1]/div/div/div[1]/div/div[4]')
womenJacketFirstItemColor: By = By.xpath('/html/body/div[2]/main/div[2]/div/div[1]/div[4]/form/div[1]/div/div/div[2]/div/div[1]')
menPantsFirstItemSize: By = By.xpath('/html/body/div[2]/main/div[2]/div/div[1]/div[4]/form/div[1]/div/div/div[1]/div/div[1]')
menPantsFirstItemColor: By = By.xpath('/html/body/div[2]/main/div[2]/div/div[1]/div[4]/form/div[1]/div/div/div[2]/div/div[1]')
addToCart: By = By.xpath('/html/body/div[2]/main/div[2]/div/div[1]/div[4]/form/div[2]/div/div/div[2]/button')
cartIcon: By = By.xpath('/html/body/div[2]/header/div[2]/div[1]/a')
proceedToCart: By = By.xpath('/html/body/div[2]/header/div[2]/div[1]/div/div/div/div[2]/div[3]/div/button')
bestWayShipping: By = By.xpath('/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[2]/div/div[3]/form/div[1]/table/tbody/tr[1]')
nextBtn: By = By.xpath('/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[2]/div/div[3]/form/div[3]/div/button')
placeOrder: By = By.xpath('/html/body/div[3]/main/div[2]/div/div[2]/div[4]/ol/li[3]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[4]/div/button/span')
dropDownAcctBtn: By = By.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button')
dropDwnMenuAfterSvingAddress: By = By.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button')

constructor() {
        super ({url:"https://magento.softwaretestingboard.com/"});
    };
    async getResults() {
        return await this.getText(this.nextBtn)
    }
 
}