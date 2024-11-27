const path = require('path');

module.exports = {
    // Вхідний файл (місце, де Webpack починає збірку)
    entry: './src/index.js', // вказує на ваш основний JS файл

    // Вихідний файл (де зберігається зібраний бандл)
    output: {
        filename: 'bundle.js', // Назва файлу бандла
        path: path.resolve(__dirname, 'dist'), // Куди збирати файли (зазвичай папка dist)
    },

    // Налаштування для сервера для запуску проєкту
    devServer: {
        static: './dist', // вказує на директорію, що містить зібрані файли
        open: true, // автоматично відкриває браузер
    },

    // Модулі для обробки файлів
    module: {
        rules: [
            {
                test: /\.js$/, // обробляє всі файли з розширенням .js
                exclude: /node_modules/, // ігнорує node_modules
                use: 'babel-loader', // використовує Babel для трансляції
            },
            {
                test: /\.css$/, // для обробки стилів
                use: ['style-loader', 'css-loader'], // додає стилі до HTML
            },
        ],
    },
};
