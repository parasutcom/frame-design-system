---
title: Installation
---

Welcome to Frame Design System. This guide walks you through the process of installing and integrating the Frame Design System into your project directly from GitHub. Please follow the steps below to get started.

## Prerequisites

Before you begin, ensure you have Node 14.x or newer installed.

## Getting Started

### Clone the Repository

Open your terminal and navigate to your project directory. Then, run one of the following commands to clone the repository:

Using HTTPS:

```bash
  git clone https://github.com/parasutcom/frame-design-system.git
```

Or using SSH:

```bash
  git clone git@github.com:parasutcom/frame-design-system.git
```

### Install Dependencies

Change into the cloned design system directory:

```bash
  cd frame-design-system
```

Install the necessary dependencies with npm:

```bash
  npm install
```

### Build with Gulp

Frame Design System uses Gulp to compile and build assets. If you haven't installed Gulp CLI globally, do so by running:

```bash
  npm install -g gulp-cli
```

Next, execute the Gulp build process:

```bash
  gulp
```

### Embedding Frame Design System into Your Project

After the build process, the dist folder will contain all the compiled CSS and other assets. To apply Frame Design System styles to your web project, include the CSS file in your HTML:

```bash
  <link rel="stylesheet" href="path/to/frame-design-system/dist/css/main.css">
```

Congratulations! You've successfully installed the Frame Design System from GitHub and built it using Gulp. Now, you can begin to use the design system's components and utilities in your project. For further instructions on usage and access to component documentation, please see our Components Documentation.
