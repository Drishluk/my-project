const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

// Регистрируем расширение для Jest
expect.extend({ toMatchImageSnapshot });

describe('Visual regression tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        // Запуск Puppeteer и создание страницы
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000');  // Убедитесь, что ваш сервер работает на этом порту
    });

    afterAll(async () => {
        // Закрытие браузера после тестов
        await browser.close();
    });

    it('should match visual snapshot of the page', async () => {
        // Делаем снимок экрана страницы
        const image = await page.screenshot();

        // Сравниваем с эталонным изображением
        expect(image).toMatchImageSnapshot();
    });

    it('should match snapshot after changing title', async () => {
        // Изменяем текст заголовка на странице
        await page.evaluate(() => {
            document.querySelector('h1').textContent = 'Updated Header Text';
        });

        // Делаем снимок экрана после изменений
        const image = await page.screenshot();

        // Сравниваем с эталонным изображением
        expect(image).toMatchImageSnapshot();
    });

    it('should match snapshot with different styles', async () => {
        // Изменяем стили (например, шрифт и цвет) на странице
        await page.evaluate(() => {
            document.querySelector('h1').style.fontSize = '60px';
