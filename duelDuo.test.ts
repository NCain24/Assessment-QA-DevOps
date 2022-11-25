
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
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
    const choices = await driver.findElement(By.id('choices'))
    const display = await choices.isDisplayed()
    expect(display).toBe(true)
    await driver.sleep(500)

})

test('add to duo button displays div with id="player-duo"', async() => {
    const duo = await driver.findElement(By.id('player-duo'))
    const show = await duo.isDisplayed()
    expect(show).toBe(true)
    await driver.sleep(500)

})