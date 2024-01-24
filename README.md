# Dynamic Data Filtering Application

This is a test task for a Dynamic Data Filtering Application built with Angular. The application features a commodities table and utilizes a feature-based architecture.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Architecture](#architecture)
4. [Folder Structure](#folder-structure)
5. [How to Run](#how-to-run)

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js and npm
- Angular CLI (`npm install -g @angular/cli`)

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

Install dependencies:

```bash
npm install
```

## Architecture

The application follows a feature-based architecture, organizing code into feature modules. Each feature has its own folder, containing smart components, models, pipes, and utils. This structure promotes modularity and maintainability.

## Folder Structure

- **src/app/features**: Contains feature modules, especially smart components.
- **src/app/components**: Smart components reside here.
- **src/app/models**: Data models used in the application.
- **src/app/pipes**: Custom pipes for data transformation.
- **src/app/utils**: Utility functions for services.
- **src/app/services**: Core services for application data.

## How to Run

To run the application, use the following npm script:

```bash
npm start
```

This command will start the Angular development server. Open your browser and navigate to `http://localhost:4200/` to view the application.

## Testing

To run unit tests, use the following npm script:

```bash
npm test
```

### Have a nice review Mr. Developer!
