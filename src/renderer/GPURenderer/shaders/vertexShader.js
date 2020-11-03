const SIZE_ATTENUATION_FACTOR = '1600.0';

export const vertexShader = () => {
  return `

    uniform sampler2D uTexture;                                     //GPU

    //atlasIndex is a 256x1 float texture of tile rectangles as r=minx g=miny b=maxx a=maxy
    uniform sampler2D atlasIndex;                                   //GPU


    attribute float size;
    attribute vec3 color;
    attribute float alpha;

    attribute float texID;                                          //GPU

    varying vec3 targetColor;
    varying float targetAlpha;

    varying vec4  tileRect;                                         //GPU
    varying float  tileID;                                          //GPU
    
    void main() {
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      targetColor = color;
      targetAlpha = alpha;
    
      tileID = texID;                                               //GPU
      //get the tile rectangle from the atlasIndex texture..
      tileRect = texture2D(atlasIndex,vec2((texID+.5)/256.,.5));    //GPU

      gl_PointSize = size * (${SIZE_ATTENUATION_FACTOR} / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
`;
};
