/* 
   BlackCosmos Tunnel Configuration
   Using Public Bare Server to bypass Vercel Static Limits
*/
self.__uv$config = {
    prefix: '/active/service/',
    
    // PUBLIC TUNNEL (Stops the Bare-Mux Error)
    bare: 'https://v.m9.io', 
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/active/uv/uv.handler.js',
    bundle: '/active/uv/uv.bundle.js',
    config: '/active/uv/uv.config.js',
sw: '/active/sw.js',
};
