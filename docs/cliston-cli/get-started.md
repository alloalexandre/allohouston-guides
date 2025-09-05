# Getting Started with Cliston CLI

## Installation

The easiest way to install Cliston CLI is using `npm link` locally. Follow these steps:

1. Clone the [repository](https://github.com/allohouston/suprakit-cli)
2. Checkout the desired branch/commit
3. Run the following command at the root of the repository:

```bash
npm link
```

## Verifying Installation

To verify that Cliston CLI is installed correctly, run:

```bash
cliston --version
```

You should see the version number of the CLI tool.

## Basic Usage

The basic syntax for Cliston commands is:

```bash
cliston COMMAND [OPTIONS]

# example
cliston meteor component
```

For example, to get help on any command:

```bash
cliston help [COMMAND]

# example
cliston help meteor
```

## Environment Setup

Cliston CLI is designed to work with Meteor projects. Make sure you have:

1. Node.js installed (v18.20.6 or later recommended)
2. Meteor installed
3. Git for version control

## Next Steps

Once you have Cliston CLI installed, you can:

1. Create a new Meteor application using `cliston meteor create-app`
2. Generate components using `cliston meteor component`
3. Create forms using `cliston meteor form`
4. Add new pages using `cliston meteor page`
5. Set up APIs using `cliston meteor api`

For detailed information about each command, check out the [Commands](./commands.md) documentation.
