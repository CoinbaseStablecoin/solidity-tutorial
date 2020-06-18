# solidity-tutorial

Use this pre-configured template to learn Solidity.

Features:

- Truffle
- Ganache
- Auto formatting
- Code linting

## Setup

Requirements:

- Node >= v12
- Yarn

```
$ npm i -g yarn       # Install yarn if you don't already have it
$ yarn install        # Install dependencies
```

## Linting and Formatting

To check code for problems:

```
$ yarn lint           # Check JavaScript code
$ yarn solhint        # Check Solidity code
```

To auto-format code:

```
$ yarn fmt
```

## Testing

First, make sure Ganache is running.

```
$ yarn ganache
```

Run all tests:

```
$ yarn test
```

To run tests in a specific file, run:

```
$ yarn test [path/to/file]
```

## Deploying

First, make sure you have your mnemonic (BIP39 recovery phrase) and an
[INFURA](https://infura.io/) API key.

```
$ MNEMONIC="your mnemonic" INFURA_API_KEY="yourAPIKey" truffle deploy --network=ropsten
```

---

MIT License
