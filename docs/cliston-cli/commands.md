# Cliston CLI Commands

This page provides detailed documentation for all available Cliston CLI commands.

## Available Commands

### `cliston meteor create-app`

Creates a new Meteor application using the StarterKit.

```bash
cliston meteor create-app
```

This command will:

- Set up a new Meteor project
- Configure React
- Set up routing
- Add authentication boilerplate
- Configure development tools

### `cliston meteor component`

Creates a new Meteor Template folder with state-of-the-art configuration.

```bash
cliston meteor component
```

Generated files include:

- JSX component file
- Less stylesheet
- Mobile-specific styles
- Integration with i18n

### `cliston meteor form`

Creates a new Meteor formik form with validation and best practices.

```bash
cliston meteor form
```

Features:

- Formik integration
- Yup validation
- React Router integration
- Alert system integration
- React Query support
- i18n support

### `cliston meteor page`

Creates a new Meteor page with routing configuration.

```bash
cliston meteor page
```

Includes:

- Page component
- Route configuration
- Loading states
- Error handling
- i18n integration

### `cliston meteor api`

Creates a new Meteor API folder with complete configuration.

```bash
cliston meteor api
```

Generated structure includes:

- Collection definition
- Schema configuration
- Methods
- GraphQL integration
- Indexes setup
- Permission configuration

### `cliston help [COMMAND]`

Displays help information for any command.

```bash
cliston help [COMMAND]
```

Use `--all` flag to see all available commands:

```bash
cliston help --all
```

## Command Structure

All commands follow this general structure:

- Topic command (`meteor`)
- Specific action (`component`, `form`, etc.)
- Optional flags and arguments

## Best Practices

When using Cliston commands:

1. Always run commands from the root of your Meteor project
2. Follow the prompts for naming and configuration
3. Review generated files for any necessary customizations
4. Use the help command when unsure about options
