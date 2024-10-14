# Этап сборки: установка Node.js и установка зависимостей
FROM node:21 AS build

# Установим рабочую директорию
WORKDIR /app

# Скопируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./
COPY angular.json ./
COPY tsconfig.app.json ./
COPY tsconfig.json ./

RUN npm install -g npm@latest
RUN npm install -g @angular/cli
# Установим зависимости
RUN npm install

# Скопируем исходный код приложения
COPY . .

# Соберем приложение (здесь предполагаем, что у вас есть команда сборки)
RUN ng build

# Этап сервера: установка Nginx
FROM nginx:latest

# Удаляем стандартный конфиг Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем новый конфиг Nginx (предполагается, что у вас есть файл nginx.conf)
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем сгенерированные файлы из папки dist в директорию Nginx
COPY --from=build /app/dist /var/www

# Копируем файл dyweset в нужное место
COPY dywed /etc/nginx/sites-enabled/

# Открываем порт 80
EXPOSE 46

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
