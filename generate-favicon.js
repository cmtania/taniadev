// Generate CT favicon as base64 data URL
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 32;
canvas.height = 32;

// Draw background circle
ctx.fillStyle = '#2563eb';
ctx.beginPath();
ctx.arc(16, 16, 15, 0, 2 * Math.PI);
ctx.fill();

// Draw CT text
ctx.fillStyle = 'white';
ctx.font = 'bold 12px Arial, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('CT', 16, 16);

// Convert to data URL
const dataURL = canvas.toDataURL('image/png');
console.log('Base64 favicon data URL:', dataURL);