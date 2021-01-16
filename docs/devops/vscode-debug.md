# babel-node debug

1. .babelrc.json

```JSON
{
  "presets": [
    "env"
  ],
  "env": {
    "development": {
      "sourceMaps": "inline",
      "retainLines": true
    }
  }
}
```

2. Create a new launch.json

```JSON
{
  "type": "node",
  "request": "launch",
  "name": "Debug",
  "program": "${workspaceFolder}/index.js",
  "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/babel-node",
  "runtimeArgs": [
    "--nolazy"
  ],
  "env": {
    "BABEL_ENV": "development"
  }
}
```

# CRA Debug

```JSON
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Chrome",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}/src",
            "sourceMapPathOverrides": {
                "webpack:///./*": "${webRoot}/*",
                "webpack:///src/*": "${webRoot}/*",
                "webpack:///*": "*",
                "webpack:///./~/*": "${webRoot}/node_modules/*",
                "meteor://💻app/*": "${webRoot}/*"
            }
        }
    ]
}
```

# CRA Unit Test Debug

```JSON
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug CRA Tests",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
      "args": ["test", "--runInBand", "--no-cache", "--env=jsdom"],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```
