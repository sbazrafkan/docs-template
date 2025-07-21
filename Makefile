# Makefile for easy Docker commands

.PHONY: help
help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: up
up: ## Start the development server
	docker-compose up

.PHONY: up-bg
up-bg: ## Start the development server in background
	docker-compose up -d

.PHONY: down
down: ## Stop the development server
	docker-compose down

.PHONY: logs
logs: ## View server logs
	docker-compose logs -f

.PHONY: build
build: ## Rebuild the Docker container
	docker-compose build

.PHONY: rebuild
rebuild: ## Rebuild container without cache
	docker-compose build --no-cache

.PHONY: shell
shell: ## Access container shell
	docker-compose run jekyll bash

.PHONY: clean
clean: ## Clean up everything (including volumes)
	docker-compose down -v

.PHONY: jekyll-build
jekyll-build: ## Build the site for production
	docker-compose run jekyll bundle exec jekyll build

.PHONY: install
install: ## Install dependencies (runs inside container)
	docker-compose run jekyll bundle install