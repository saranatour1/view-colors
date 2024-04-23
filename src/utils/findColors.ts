export const findColors = (value:string)=>{

  const hexRegex = /#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi;

  const hexaRegex = /#([a-f0-9]{8}|[a-f0-9]{4})\b/gi;
  
  const hslRegex = /hsl\(\s*(\d+)\s*,\s*(\d*(?:\.\d+)?%)\s*,\s*(\d*(?:\.\d+)?%)\)/gi;
  
  const hslaRegex = /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)/gi;
  
  const rgbaRegex = /rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)/gi;
  
  const rgbRegex = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/gi;


  const colorsObj: string[] | any = [];
  const variableNames = [
    hexRegex,
    hexaRegex,
    hslRegex,
    hslaRegex,
    rgbaRegex,
    rgbRegex
  ];
  variableNames.forEach((variable) =>
    colorsObj.push(value.match(variable) || [])
  );
  
  return colorsObj.flat().filter(Boolean);
}


