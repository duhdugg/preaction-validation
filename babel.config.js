// this config should only be used for babel-jest
module.exports =
  process.env.NODE_ENV === 'test'
    ? {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
        ],
      }
    : {}
