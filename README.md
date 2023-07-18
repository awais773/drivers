<ul>
    <li>Your machine needs to be ready for the latest Laravel and Node.js.</li>
</ul>

## Installation


   ```sh
    # Clone the project
    git clone https://github.com/ramoncrisante/laravel-vue-dashboard.git

    # Enter the project directory
    cd laravel-vue-dashboard

    # Copy env file and add your own database and mail credentials
    cp .env.example .env

    # Install dependency
    composer install

    # Generate app key
    php artisan key:generate
    
    # Migrate database
    php artisan migrate

    # Create encryption keys
    php artisan passport:install

    # Install dependency with NPM
    npm install

    # Develop
    npm run dev # or npm run watch

    # Build on production
    npm run production
    
    # Serving application
    php artisan serve

   ```

