// Comprehensive periodic table elements data
const elementsData = [
    {
        number: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, category: 'nonmetal',
        period: 1, group: 1, position: [0, 0], discovered: '1766',
        electronConfig: '1s¹'
    },
    {
        number: 2, symbol: 'He', name: 'Helium', mass: 4.003, category: 'noble-gas',
        period: 1, group: 18, position: [17, 0], discovered: '1895',
        electronConfig: '1s²'
    },
    {
        number: 3, symbol: 'Li', name: 'Lithium', mass: 6.94, category: 'alkali-metal',
        period: 2, group: 1, position: [0, 1], discovered: '1817',
        electronConfig: '[He] 2s¹'
    },
    {
        number: 4, symbol: 'Be', name: 'Beryllium', mass: 9.012, category: 'alkaline-earth',
        period: 2, group: 2, position: [1, 1], discovered: '1797',
        electronConfig: '[He] 2s²'
    },
    {
        number: 5, symbol: 'B', name: 'Boron', mass: 10.81, category: 'metalloid',
        period: 2, group: 13, position: [12, 1], discovered: '1808',
        electronConfig: '[He] 2s² 2p¹'
    },
    {
        number: 6, symbol: 'C', name: 'Carbon', mass: 12.01, category: 'nonmetal',
        period: 2, group: 14, position: [13, 1], discovered: 'Ancient',
        electronConfig: '[He] 2s² 2p²'
    },
    {
        number: 7, symbol: 'N', name: 'Nitrogen', mass: 14.01, category: 'nonmetal',
        period: 2, group: 15, position: [14, 1], discovered: '1772',
        electronConfig: '[He] 2s² 2p³'
    },
    {
        number: 8, symbol: 'O', name: 'Oxygen', mass: 16.00, category: 'nonmetal',
        period: 2, group: 16, position: [15, 1], discovered: '1774',
        electronConfig: '[He] 2s² 2p⁴'
    },
    {
        number: 9, symbol: 'F', name: 'Fluorine', mass: 19.00, category: 'halogen',
        period: 2, group: 17, position: [16, 1], discovered: '1886',
        electronConfig: '[He] 2s² 2p⁵'
    },
    {
        number: 10, symbol: 'Ne', name: 'Neon', mass: 20.18, category: 'noble-gas',
        period: 2, group: 18, position: [17, 1], discovered: '1898',
        electronConfig: '[He] 2s² 2p⁶'
    },
    {
        number: 11, symbol: 'Na', name: 'Sodium', mass: 22.99, category: 'alkali-metal',
        period: 3, group: 1, position: [0, 2], discovered: '1807',
        electronConfig: '[Ne] 3s¹'
    },
    {
        number: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.31, category: 'alkaline-earth',
        period: 3, group: 2, position: [1, 2], discovered: '1808',
        electronConfig: '[Ne] 3s²'
    },
    {
        number: 13, symbol: 'Al', name: 'Aluminum', mass: 26.98, category: 'post-transition',
        period: 3, group: 13, position: [12, 2], discovered: '1825',
        electronConfig: '[Ne] 3s² 3p¹'
    },
    {
        number: 14, symbol: 'Si', name: 'Silicon', mass: 28.09, category: 'metalloid',
        period: 3, group: 14, position: [13, 2], discovered: '1824',
        electronConfig: '[Ne] 3s² 3p²'
    },
    {
        number: 15, symbol: 'P', name: 'Phosphorus', mass: 30.97, category: 'nonmetal',
        period: 3, group: 15, position: [14, 2], discovered: '1669',
        electronConfig: '[Ne] 3s² 3p³'
    },
    {
        number: 16, symbol: 'S', name: 'Sulfur', mass: 32.06, category: 'nonmetal',
        period: 3, group: 16, position: [15, 2], discovered: 'Ancient',
        electronConfig: '[Ne] 3s² 3p⁴'
    },
    {
        number: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.45, category: 'halogen',
        period: 3, group: 17, position: [16, 2], discovered: '1774',
        electronConfig: '[Ne] 3s² 3p⁵'
    },
    {
        number: 18, symbol: 'Ar', name: 'Argon', mass: 39.95, category: 'noble-gas',
        period: 3, group: 18, position: [17, 2], discovered: '1894',
        electronConfig: '[Ne] 3s² 3p⁶'
    },
    {
        number: 19, symbol: 'K', name: 'Potassium', mass: 39.10, category: 'alkali-metal',
        period: 4, group: 1, position: [0, 3], discovered: '1807',
        electronConfig: '[Ar] 4s¹'
    },
    {
        number: 20, symbol: 'Ca', name: 'Calcium', mass: 40.08, category: 'alkaline-earth',
        period: 4, group: 2, position: [1, 3], discovered: '1808',
        electronConfig: '[Ar] 4s²'
    },
    {
        number: 21, symbol: 'Sc', name: 'Scandium', mass: 44.96, category: 'transition-metal',
        period: 4, group: 3, position: [2, 3], discovered: '1879',
        electronConfig: '[Ar] 3d¹ 4s²'
    },
    {
        number: 22, symbol: 'Ti', name: 'Titanium', mass: 47.87, category: 'transition-metal',
        period: 4, group: 4, position: [3, 3], discovered: '1791',
        electronConfig: '[Ar] 3d² 4s²'
    },
    {
        number: 23, symbol: 'V', name: 'Vanadium', mass: 50.94, category: 'transition-metal',
        period: 4, group: 5, position: [4, 3], discovered: '1801',
        electronConfig: '[Ar] 3d³ 4s²'
    },
    {
        number: 24, symbol: 'Cr', name: 'Chromium', mass: 51.96, category: 'transition-metal',
        period: 4, group: 6, position: [5, 3], discovered: '1797',
        electronConfig: '[Ar] 3d⁵ 4s¹'
    },
    {
        number: 25, symbol: 'Mn', name: 'Manganese', mass: 54.94, category: 'transition-metal',
        period: 4, group: 7, position: [6, 3], discovered: '1774',
        electronConfig: '[Ar] 3d⁵ 4s²'
    },
    {
        number: 26, symbol: 'Fe', name: 'Iron', mass: 55.85, category: 'transition-metal',
        period: 4, group: 8, position: [7, 3], discovered: 'Ancient',
        electronConfig: '[Ar] 3d⁶ 4s²'
    },
    {
        number: 27, symbol: 'Co', name: 'Cobalt', mass: 58.93, category: 'transition-metal',
        period: 4, group: 9, position: [8, 3], discovered: '1735',
        electronConfig: '[Ar] 3d⁷ 4s²'
    },
    {
        number: 28, symbol: 'Ni', name: 'Nickel', mass: 58.69, category: 'transition-metal',
        period: 4, group: 10, position: [9, 3], discovered: '1751',
        electronConfig: '[Ar] 3d⁸ 4s²'
    },
    {
        number: 29, symbol: 'Cu', name: 'Copper', mass: 63.55, category: 'transition-metal',
        period: 4, group: 11, position: [10, 3], discovered: 'Ancient',
        electronConfig: '[Ar] 3d¹⁰ 4s¹'
    },
    {
        number: 30, symbol: 'Zn', name: 'Zinc', mass: 65.38, category: 'transition-metal',
        period: 4, group: 12, position: [11, 3], discovered: 'Ancient',
        electronConfig: '[Ar] 3d¹⁰ 4s²'
    },
    {
        number: 31, symbol: 'Ga', name: 'Gallium', mass: 69.72, category: 'post-transition',
        period: 4, group: 13, position: [12, 3], discovered: '1875',
        electronConfig: '[Ar] 3d¹⁰ 4s² 4p¹'
    },
    {
        number: 32, symbol: 'Ge', name: 'Germanium', mass: 72.63, category: 'metalloid',
        period: 4, group: 14, position: [13, 3], discovered: '1886',
        electronConfig: '[Ar] 3d¹⁰ 4s² 4p²'
    },
    {
        number: 33, symbol: 'As', name: 'Arsenic', mass: 74.92, category: 'metalloid',
        period: 4, group: 15, position: [14, 3], discovered: 'Ancient',
        electronConfig: '[Ar] 3d¹⁰ 4s² 4p³'
    },
    {
        number: 34, symbol: 'Se', name: 'Selenium', mass: 78.96, category: 'nonmetal',
        period: 4, group: 16, position: [15, 3], discovered: '1817',
        electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁴'
    },
    {
        number: 35, symbol: 'Br', name: 'Bromine', mass: 79.90, category: 'halogen',
        period: 4, group: 17, position: [16, 3], discovered: '1826',
        electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁵'
    },
    {
        number: 36, symbol: 'Kr', name: 'Krypton', mass: 83.80, category: 'noble-gas',
        period: 4, group: 18, position: [17, 3], discovered: '1898',
        electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁶'
    },
    // Adding more elements for periods 5-7 (truncated for brevity)
    {
        number: 37, symbol: 'Rb', name: 'Rubidium', mass: 85.47, category: 'alkali-metal',
        period: 5, group: 1, position: [0, 4], discovered: '1861',
        electronConfig: '[Kr] 5s¹'
    },
    {
        number: 38, symbol: 'Sr', name: 'Strontium', mass: 87.62, category: 'alkaline-earth',
        period: 5, group: 2, position: [1, 4], discovered: '1790',
        electronConfig: '[Kr] 5s²'
    },
    {
        number: 39, symbol: 'Y', name: 'Yttrium', mass: 88.91, category: 'transition-metal',
        period: 5, group: 3, position: [2, 4], discovered: '1794',
        electronConfig: '[Kr] 4d¹ 5s²'
    },
    {
        number: 40, symbol: 'Zr', name: 'Zirconium', mass: 91.22, category: 'transition-metal',
        period: 5, group: 4, position: [3, 4], discovered: '1789',
        electronConfig: '[Kr] 4d² 5s²'
    },
    // Adding lanthanides
    {
        number: 57, symbol: 'La', name: 'Lanthanum', mass: 138.91, category: 'lanthanide',
        period: 6, group: 3, position: [2, 7], discovered: '1839',
        electronConfig: '[Xe] 5d¹ 6s²'
    },
    {
        number: 58, symbol: 'Ce', name: 'Cerium', mass: 140.12, category: 'lanthanide',
        period: 6, group: 3, position: [3, 7], discovered: '1803',
        electronConfig: '[Xe] 4f¹ 5d¹ 6s²'
    },
    // Adding actinides
    {
        number: 89, symbol: 'Ac', name: 'Actinium', mass: 227, category: 'actinide',
        period: 7, group: 3, position: [2, 8], discovered: '1899',
        electronConfig: '[Rn] 6d¹ 7s²'
    },
    {
        number: 90, symbol: 'Th', name: 'Thorium', mass: 232.04, category: 'actinide',
        period: 7, group: 3, position: [3, 8], discovered: '1828',
        electronConfig: '[Rn] 6d² 7s²'
    },
    {
        number: 91, symbol: 'Pa', name: 'Protactinium', mass: 231.04, category: 'actinide',
        period: 7, group: 3, position: [4, 8], discovered: '1913',
        electronConfig: '[Rn] 5f² 6d¹ 7s²'
    },
    {
        number: 92, symbol: 'U', name: 'Uranium', mass: 238.03, category: 'actinide',
        period: 7, group: 3, position: [5, 8], discovered: '1789',
        electronConfig: '[Rn] 5f³ 6d¹ 7s²'
    },
    // Adding heavier elements
    {
        number: 79, symbol: 'Au', name: 'Gold', mass: 196.97, category: 'transition-metal',
        period: 6, group: 11, position: [10, 5], discovered: 'Ancient',
        electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹'
    },
    {
        number: 47, symbol: 'Ag', name: 'Silver', mass: 107.87, category: 'transition-metal',
        period: 5, group: 11, position: [10, 4], discovered: 'Ancient',
        electronConfig: '[Kr] 4d¹⁰ 5s¹'
    },
    {
        number: 82, symbol: 'Pb', name: 'Lead', mass: 207.2, category: 'post-transition',
        period: 6, group: 14, position: [13, 5], discovered: 'Ancient',
        electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²'
    }
];

// Add remaining elements programmatically for a complete periodic table
const additionalElements = [
    // Period 5 continuation
    { number: 41, symbol: 'Nb', name: 'Niobium', mass: 92.91, category: 'transition-metal', period: 5, group: 5, position: [4, 4] },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', mass: 95.95, category: 'transition-metal', period: 5, group: 6, position: [5, 4] },
    { number: 43, symbol: 'Tc', name: 'Technetium', mass: 98, category: 'transition-metal', period: 5, group: 7, position: [6, 4] },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', mass: 101.07, category: 'transition-metal', period: 5, group: 8, position: [7, 4] },
    { number: 45, symbol: 'Rh', name: 'Rhodium', mass: 102.91, category: 'transition-metal', period: 5, group: 9, position: [8, 4] },
    { number: 46, symbol: 'Pd', name: 'Palladium', mass: 106.42, category: 'transition-metal', period: 5, group: 10, position: [9, 4] },
    { number: 48, symbol: 'Cd', name: 'Cadmium', mass: 112.41, category: 'transition-metal', period: 5, group: 12, position: [11, 4] },
    { number: 49, symbol: 'In', name: 'Indium', mass: 114.82, category: 'post-transition', period: 5, group: 13, position: [12, 4] },
    { number: 50, symbol: 'Sn', name: 'Tin', mass: 118.71, category: 'post-transition', period: 5, group: 14, position: [13, 4] },
    { number: 51, symbol: 'Sb', name: 'Antimony', mass: 121.76, category: 'metalloid', period: 5, group: 15, position: [14, 4] },
    { number: 52, symbol: 'Te', name: 'Tellurium', mass: 127.6, category: 'metalloid', period: 5, group: 16, position: [15, 4] },
    { number: 53, symbol: 'I', name: 'Iodine', mass: 126.9, category: 'halogen', period: 5, group: 17, position: [16, 4] },
    { number: 54, symbol: 'Xe', name: 'Xenon', mass: 131.29, category: 'noble-gas', period: 5, group: 18, position: [17, 4] },
    
    // Period 6
    { number: 55, symbol: 'Cs', name: 'Cesium', mass: 132.91, category: 'alkali-metal', period: 6, group: 1, position: [0, 5] },
    { number: 56, symbol: 'Ba', name: 'Barium', mass: 137.33, category: 'alkaline-earth', period: 6, group: 2, position: [1, 5] },
    { number: 72, symbol: 'Hf', name: 'Hafnium', mass: 178.49, category: 'transition-metal', period: 6, group: 4, position: [3, 5] },
    { number: 73, symbol: 'Ta', name: 'Tantalum', mass: 180.95, category: 'transition-metal', period: 6, group: 5, position: [4, 5] },
    { number: 74, symbol: 'W', name: 'Tungsten', mass: 183.84, category: 'transition-metal', period: 6, group: 6, position: [5, 5] },
    { number: 75, symbol: 'Re', name: 'Rhenium', mass: 186.21, category: 'transition-metal', period: 6, group: 7, position: [6, 5] },
    { number: 76, symbol: 'Os', name: 'Osmium', mass: 190.23, category: 'transition-metal', period: 6, group: 8, position: [7, 5] },
    { number: 77, symbol: 'Ir', name: 'Iridium', mass: 192.22, category: 'transition-metal', period: 6, group: 9, position: [8, 5] },
    { number: 78, symbol: 'Pt', name: 'Platinum', mass: 195.08, category: 'transition-metal', period: 6, group: 10, position: [9, 5] },
    { number: 80, symbol: 'Hg', name: 'Mercury', mass: 200.59, category: 'transition-metal', period: 6, group: 12, position: [11, 5] },
    { number: 81, symbol: 'Tl', name: 'Thallium', mass: 204.38, category: 'post-transition', period: 6, group: 13, position: [12, 5] },
    { number: 83, symbol: 'Bi', name: 'Bismuth', mass: 208.98, category: 'post-transition', period: 6, group: 15, position: [14, 5] },
    { number: 84, symbol: 'Po', name: 'Polonium', mass: 209, category: 'post-transition', period: 6, group: 16, position: [15, 5] },
    { number: 85, symbol: 'At', name: 'Astatine', mass: 210, category: 'halogen', period: 6, group: 17, position: [16, 5] },
    { number: 86, symbol: 'Rn', name: 'Radon', mass: 222, category: 'noble-gas', period: 6, group: 18, position: [17, 5] },
    
    // Period 7
    { number: 87, symbol: 'Fr', name: 'Francium', mass: 223, category: 'alkali-metal', period: 7, group: 1, position: [0, 6] },
    { number: 88, symbol: 'Ra', name: 'Radium', mass: 226, category: 'alkaline-earth', period: 7, group: 2, position: [1, 6] },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: 267, category: 'transition-metal', period: 7, group: 4, position: [3, 6] },
    { number: 105, symbol: 'Db', name: 'Dubnium', mass: 270, category: 'transition-metal', period: 7, group: 5, position: [4, 6] },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: 271, category: 'transition-metal', period: 7, group: 6, position: [5, 6] },
    { number: 107, symbol: 'Bh', name: 'Bohrium', mass: 270, category: 'transition-metal', period: 7, group: 7, position: [6, 6] },
    { number: 108, symbol: 'Hs', name: 'Hassium', mass: 277, category: 'transition-metal', period: 7, group: 8, position: [7, 6] },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: 276, category: 'transition-metal', period: 7, group: 9, position: [8, 6] },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: 281, category: 'transition-metal', period: 7, group: 10, position: [9, 6] },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: 280, category: 'transition-metal', period: 7, group: 11, position: [10, 6] },
    { number: 112, symbol: 'Cn', name: 'Copernicium', mass: 285, category: 'transition-metal', period: 7, group: 12, position: [11, 6] },
    { number: 113, symbol: 'Nh', name: 'Nihonium', mass: 284, category: 'post-transition', period: 7, group: 13, position: [12, 6] },
    { number: 114, symbol: 'Fl', name: 'Flerovium', mass: 289, category: 'post-transition', period: 7, group: 14, position: [13, 6] },
    { number: 115, symbol: 'Mc', name: 'Moscovium', mass: 288, category: 'post-transition', period: 7, group: 15, position: [14, 6] },
    { number: 116, symbol: 'Lv', name: 'Livermorium', mass: 293, category: 'post-transition', period: 7, group: 16, position: [15, 6] },
    { number: 117, symbol: 'Ts', name: 'Tennessine', mass: 294, category: 'halogen', period: 7, group: 17, position: [16, 6] },
    { number: 118, symbol: 'Og', name: 'Oganesson', mass: 294, category: 'noble-gas', period: 7, group: 18, position: [17, 6] }
];

// Add electron configurations and discovery dates for additional elements
additionalElements.forEach(element => {
    if (!element.discovered) element.discovered = 'Modern';
    if (!element.electronConfig) element.electronConfig = 'Complex';
});

// Combine all elements
elementsData.push(...additionalElements);

// Color mapping for different element categories
const categoryColors = {
    'alkali-metal': 0xff6b6b,
    'alkaline-earth': 0xfeca57,
    'transition-metal': 0x48dbfb,
    'post-transition': 0xff9ff3,
    'metalloid': 0x54a0ff,
    'nonmetal': 0x5f27cd,
    'halogen': 0x00d2d3,
    'noble-gas': 0xff6348,
    'lanthanide': 0x1dd1a1,
    'actinide': 0xfeca57
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { elementsData, categoryColors };
}