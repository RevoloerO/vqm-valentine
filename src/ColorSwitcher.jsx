import React from 'react';

const switchColorPalette = (palette) => {
    const root = document.documentElement;
    if (palette === 'default') { // Valentine palette as default
        root.style.setProperty('--color-background', '#ffe6e6'); /* Light pink background */
        root.style.setProperty('--color-primary', '#ff99cc'); /* Pink primary */
        root.style.setProperty('--color-secondary', '#ff6699'); /* Pink secondary */
        root.style.setProperty('--color-accent', '#ff3366'); /* Valentine red accent */
        root.style.setProperty('--color-text', '#990033'); /* Dark red text */
        root.style.setProperty('--color-border', '#cc3366'); /* Border color */
        root.style.setProperty('--color-neon-1', '#ff3366'); /* Neon red */
        root.style.setProperty('--color-neon-2', '#ffccff'); /* Neon pink */
        root.style.setProperty('--color-banner-bg', '#ffe0e0'); /* Soft pink background for contrast */
    } else if (palette === 'matcha') {
        root.style.setProperty('--color-background', '#f7f7e8'); /* Light cream background */
        root.style.setProperty('--color-primary', '#d4e157'); /* Light green primary */
        root.style.setProperty('--color-secondary', '#aed581'); /* Soft green secondary */
        root.style.setProperty('--color-accent', '#689f38'); /* Dark green accent */
        root.style.setProperty('--color-text', '#33691e'); /* Dark green text */
        root.style.setProperty('--color-border', '#8bc34a'); /* Green border */
        root.style.setProperty('--color-neon-1', '#689f38'); /* Bright green neon */
        root.style.setProperty('--color-neon-2', '#6a702b'); /* Lime neon */
        root.style.setProperty('--color-banner-bg', '#f7f7e8'); /* Light cream background for contrast */
    } else if (palette === 'elegant-matcha') {
        root.style.setProperty('--color-background', '#f5f5f5'); /* Light gray background */
        root.style.setProperty('--color-primary', '#c8e6c9'); /* Soft green primary */
        root.style.setProperty('--color-secondary', '#a5d6a7'); /* Light green secondary */
        root.style.setProperty('--color-accent', '#388e3c'); /* Dark green accent */
        root.style.setProperty('--color-text', '#1b5e20'); /* Dark green text */
        root.style.setProperty('--color-border', '#81c784'); /* Green border */
        root.style.setProperty('--color-neon-1', '#388e3c'); /* Dark green neon */
        root.style.setProperty('--color-neon-2', '#a5d6a7'); /* Light green neon */
        root.style.setProperty('--color-banner-bg', '#f5f5f5'); /* Light gray background for contrast */
    } else if (palette === 'heart-valentine') {
        root.style.setProperty('--color-background', '#f6dcdc'); /* Light pink background */
        root.style.setProperty('--color-primary', '#eea9a9'); /* Soft pink primary */
        root.style.setProperty('--color-secondary', '#bf3129'); /* Dark red secondary */
        root.style.setProperty('--color-accent', '#c31c1c'); /* Heart red accent */
        root.style.setProperty('--color-text', '#9c1212'); /* Dark red text */
        root.style.setProperty('--color-border', '#bf3129'); /* Dark red border */
        root.style.setProperty('--color-neon-1', '#c31c1c'); /* Heart red neon */
        root.style.setProperty('--color-neon-2', '#f6dcdc'); /* Soft pink neon */
        root.style.setProperty('--color-banner-bg', '#f6dcdc'); /* Light pink background for contrast */
    } else if (palette === 'tiramisu') {
        root.style.setProperty('--color-background', '#fff7e7'); /* Light cream background */
        root.style.setProperty('--color-primary', '#ecdba6'); /* Soft beige primary */
        root.style.setProperty('--color-secondary', '#e3d4a4'); /* Light brown secondary */
        root.style.setProperty('--color-accent', '#a3794e'); /* Brown accent */
        root.style.setProperty('--color-text', '#5c3d2e'); /* Dark brown text */
        root.style.setProperty('--color-border', '#a3794e'); /* Brown border */
        root.style.setProperty('--color-neon-1', '#a3794e'); /* Brown neon */
        root.style.setProperty('--color-neon-2', '#fff7e7'); /* Soft beige neon */
        root.style.setProperty('--color-banner-bg', '#fff8ea'); /* Light cream background for contrast */
    } else if (palette === 'dark-chocolate') {
        root.style.setProperty('--color-background', '#141514'); /* Dark background */
        root.style.setProperty('--color-primary', '#23241f'); /* Dark green primary */
        root.style.setProperty('--color-secondary', '#3e3c32'); /* Dark brown secondary */
        root.style.setProperty('--color-accent', '#584b3e'); /* Brown accent */
        root.style.setProperty('--color-text', '#766257'); /* Light brown text */
        root.style.setProperty('--color-border', '#3e3c32'); /* Dark brown border */
        root.style.setProperty('--color-neon-1', '#584b3e'); /* Brown neon */
        root.style.setProperty('--color-neon-2', '#141514'); /* Light brown neon */
        root.style.setProperty('--color-banner-bg', '#23241f'); /* Dark green background for contrast */
    } else if (palette === 'creamy-chocolate') {
        root.style.setProperty('--color-background', '#EEE1B4'); /* Light cream background */
        root.style.setProperty('--color-primary', '#FFFED0'); /* Soft cream primary */
        root.style.setProperty('--color-secondary', '#E3D4A4'); /* Light brown secondary */
        root.style.setProperty('--color-accent', '#3C1321'); /* Dark red accent */
        root.style.setProperty('--color-text', '#301301'); /* Dark brown text */
        root.style.setProperty('--color-border', '#472723'); /* Dark brown border */
        root.style.setProperty('--color-neon-1', '#3C1321'); /* Dark red neon */
        root.style.setProperty('--color-neon-2', '#EEE1B4'); /* Light brown neon */
        root.style.setProperty('--color-banner-bg', '#FFFED0'); /* Soft cream background for contrast */
    }
};

const ColorSwitcher = () => {
    return (
        <div className="color-switcher">
            <label htmlFor="color-palette">Theme: </label>
            <select onChange={(e) => switchColorPalette(e.target.value)}>
                <option value="default">Valentine</option> {/* Valentine as default */}
                <option value="matcha">Matcha</option>
                <option value="elegant-matcha">Elegant Matcha</option> {/* New Elegant Matcha palette */}
                <option value="heart-valentine">Heart Valentine</option> {/* New Heart Valentine palette */}
                <option value="tiramisu">Tiramisu</option> {/* New Tiramisu palette */}
                <option value="dark-chocolate">Dark Chocolate</option> {/* New Dark Chocolate palette */}
                <option value="creamy-chocolate">Creamy Chocolate</option> {/* New Creamy Chocolate palette */}
            </select>
        </div>
    );
};

export default ColorSwitcher;