FROM php:8.1-fpm-alpine
RUN mkdir -p /var/www/cms-api
RUN docker-php-ext-install pdo pdo_mysql sockets
RUN curl -sS https://getcomposer.org/installer | php -- \
     --install-dir=/usr/local/bin --filename=composer

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/cms-api
COPY composer.json .
RUN composer install --prefer-dist --no-interaction
COPY . .

# RUN php artisan config:cache && \
#     php artisan route:cache && \
#     chmod 777 -R /var/www/html/storage/ && \
#     chown -R www-data:www-data /var/www/ && \
#     a2enmod rewrite

EXPOSE 8000
CMD php artisan serve --host=0.0.0.0 --port=8000
