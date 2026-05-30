FROM php:8.4-fpm

# Install dependensi sistem yang dibutuhkan Laravel
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Bersihkan cache apt agar image tidak bengkak
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install ekstensi PHP (pdo_mysql wajib untuk konek ke MariaDB)
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Ambil Composer versi terbaru langsung dari image resminya
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory ke folder Laravel
WORKDIR /var/www/html