const getRandomColor = () => {
  const colors = [
    '#8A2BE2',
    '#DDA0DD',
    '#9ACD32',
    '#87CEEB',
    '#4169E1',
    '#FFFF00',
    '#FF4500',
    '#FF8C00',
    '#FF69B4',
    '#000000',
    '#D3D3D3'
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
};

export default getRandomColor;
