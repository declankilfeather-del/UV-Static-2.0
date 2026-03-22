self.__uv$config = {
    prefix: '/active/service/',
    // This Bare Server is configured to bypass CORB blocks
    bare: 'https://v.m9.io', 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/active/uv/uv.handler.js',
    bundle: '/active/uv/uv.bundle.js',
    config: '/active/uv/uv.config.js',
    sw: '/active/sw.js',
};
