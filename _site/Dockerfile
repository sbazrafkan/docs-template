# Use official Ruby image as base
FROM ruby:3.0-slim

# Install essential dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    nodejs \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy Gemfile first for better caching
COPY Gemfile* ./

# Install Jekyll and dependencies
RUN gem install bundler:2.4.22 && \
    bundle config set --local deployment false && \
    bundle install

# Copy the rest of the application
COPY . .

# Expose Jekyll's default port
EXPOSE 4000

# Expose LiveReload port
EXPOSE 35729

# Command to run Jekyll with live reload
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--force_polling"]