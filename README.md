# Personal Profile Website

A modern, responsive personal profile website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle**: Switch between themes with smooth transitions
- **Animated Skill Bars**: Skills section with animated progress bars
- **Interactive Elements**: Hover effects and smooth animations
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Typewriter Effect**: Animated subtitle text
- **Contact Information**: Easy access to contact details and social links

## Files Structure

```
MyProfile.html    # Main HTML file
styles.css        # CSS styles and responsive design
script.js         # JavaScript for interactivity
README.md         # This file
```

## How to View

1. Open `MyProfile.html` in any modern web browser
2. Or run a local server:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000/MyProfile.html`

### Skills
In `MyProfile.html`, modify the skill items:
```html
<div class="skill-item">
    <span class="skill-name">Your Skill</span>
    <div class="skill-bar">
        <div class="skill-fill" data-width="XX%"></div>
    </div>
</div>
```

### Styling
Edit `styles.css` to customize:
- Colors and gradients
- Font sizes and families
- Layout and spacing
- Animation timings

### Profile Image
Replace the placeholder image URL in `MyProfile.html`:
```html
<img src="C:\Users\USER\Pictures\Saved Pictures\franco.jpeg" alt="Franci Chilumbu" class="profile-image">
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Interactive features and DOM manipulation
- **Font Awesome**: Icons for contact information

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## License

This project is open source and available under the MIT License.