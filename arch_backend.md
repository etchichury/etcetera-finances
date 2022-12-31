---
title: Backend
parent: Architecture
nav_order: 2
---

# Overview

This will be a way challenger than the frontend. I don't almost any experience with backend systems and, therefore, I don't quite know what I'm doing. I will add more information in this sections as I discover and understand things.

I could be using other languages (Rust or Go) that I'm interested in, but I figured that build and deploying was already a good and big challenge. Because of this, I chose Python, a language I'm familiar with and really enjoy working with.

# Main Tools

- Docker
- PostgreSQL
- Python
- Uvicorn
- FastAPI
- Pydantic

# File structure

The root folder contains the project config files, e.g. `docker-compose.yml` and `.flake8`, and the folders bellow:

- `app`: contains all code for this application. The name of the files and folders inside this directory should be named following the name conventions of a standard Python project.
- `app/endpoints`: contains all endpoints. Each feature should have its own file and collection of endpoints, its name should be the endpoints name.
- `app/schemas`: contains the schemas for the requests and responses objects.

# Endpoints

# Database
