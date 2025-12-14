# 🖼️ Interactive Image Gallery

A responsive, dark-themed image gallery built with **HTML**, **CSS**, and **JavaScript**. This project features a modern grid layout that adapts to screen sizes and includes a custom **Lightbox (Fullscreen Mode)** with image navigation.

## ✨ Features

* **Responsive Grid Layout:** Images are arranged in a masonry-style grid that automatically adjusts columns based on screen width (`auto-fit`).
* **Lightbox / Fullscreen Mode:** Clicking an image opens it in a high-resolution modal overlay.
* **Image Navigation:** Built-in "Next" (`>`) and "Previous" (`<`) buttons to cycle through the gallery while in fullscreen mode.
* **Hover Animations:** Smooth zoom effects (`transform: scale`) when hovering over thumbnails.
* **Dynamic Image Loading:** JavaScript automatically detects all images in the grid to build the slideshow array.

## 🛠️ Technologies Used

* **HTML5:** Semantic structure.
* **CSS3:** Flexbox (for the modal), CSS Grid (for the gallery), and media queries.
* **JavaScript (ES6):** DOM manipulation and array logic for the image slider.

## 📂 Project Structure

```text
├── index.html      # Main HTML structure
├── Gallery.css     # Styling, Grid layout, and Animations
└── Gallery.js      # Lightbox logic and Navigation functions
