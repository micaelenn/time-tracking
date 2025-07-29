# ⏱️Time Tracking

Automatically starts or stops time tracking through the [ClickUp API ](https://developer.clickup.com/docs/index) in response to webhook events triggered by changes on task status

## Requirements
- [Node.js](https://nodejs.org/en) - `22.0.0 +`

## Environment Variables
Create a `.env` file at the root of the project with `API_TOKEN` and `TEAM_ID`

## Getting Started

Install dependencies

```
npm install
```

Development mode

```
npm run dev
```

Production build

```
npm run build
```

## Development Tool

To ensure consistency and speed up development, this project uses [Plop.js](https://plopjs.com/) as a code generator to create the initial structure for endpoints

**1. Install plop globally**

```
$ npm install -g plop
```

**2. Generate structure**

Run the `plop` command at the root of the project and insert the name of the new endpoint
