// Импортируем chai и функцию sum
import { expect } from 'chai';
import sum from './sum.js'; // Импорт функции sum из файла sum.js

// Тест 1: Проверка сложения двух чисел
it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).to.equal(3);
});

// Тест 2: Проверка сложения отрицательных чисел
it('adds -1 + -2 to equal -3', () => {
  expect(sum(-1, -2)).to.equal(-3);
});

// Тест 3: Проверка сложения с нулем
it('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).to.equal(0);
});

// Тест 4: Проверка сложения чисел с плавающей точкой
it('adds 0.1 + 0.2 to equal 0.3', () => {
  expect(sum(0.1, 0.2)).to.be.closeTo(0.3, 1);  // Для проверки с плавающей точкой используем closeTo
});
