const presets = [
    [
        "@babel/env",
        {
            targets: {
                node: "current",
            },
            useBuiltIns: "usage",
            corejs: "3.6.4",
        },
    ],
];

module.exports = { presets };
