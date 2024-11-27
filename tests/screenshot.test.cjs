// Импортируем необходимые библиотеки
import { expect } from 'chai';
import puppeteer from 'puppeteer';

describe('Screenshot Tests', function () {
    let browser;
    let page;

    // Перед каждым тестом запускаем браузер и страницу
    beforeEach(async function () {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    // После каждого теста закрываем браузер
    afterEach(async function () {
        await browser.close();
    });

    // Тест 1: Проверка скриншота главной страницы
    it('should take a screenshot of the homepage', async function () {
        await page.goto('https://example.com'); // Замените на нужный URL
        const screenshotPath = 'homepage.png';
        await page.screenshot({ path: screenshotPath });

        // Проверяем, что скриншот существует
        const fs = require('fs');
        expect(fs.existsSync(screenshotPath)).to.be.true;

        // Дополнительная проверка содержимого или качества скриншота
        // Это можно реализовать с помощью других библиотек, например, для сравнения изображений.
    });
});
