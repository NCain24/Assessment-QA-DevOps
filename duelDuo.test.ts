
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://ec2-35-92-196-1.us-west-2.compute.amazonaws.com/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(500)
})

test('draw button displays div with id="choices"', async () => {
    const draw = await driver.findElement(By.id('draw'))
    draw.click()
    const choices = await driver.findElement(By.id('choices'))
    const display = await choices.isDisplayed()
    expect(display).toBe(false)
    await driver.sleep(500)

})

test('add to duo button displays div with id="player-duo"', async() => {
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()
    await driver.sleep(2000)
    const botBtn = await driver.findElement(By.className('bot-btn'))
    botBtn.click()
    const show = await botBtn.isDisplayed()
    expect(show).toBe(true)
    await driver.sleep(2000)

})