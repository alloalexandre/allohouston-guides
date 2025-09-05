# Allohouston Guides

Welcome to ALLOHOUSTON's comprehensive development documentation. This guide serves as your primary resource for understanding our development tools, best practices, and common solutions to challenges we've encountered.

## Our Development Stack

### Core Technologies

- **Meteor**: Our full-stack JavaScript framework
- **React**: UI component library
- **MongoDB**: Primary database
- **GraphQL**: API query language using Nova
- **TypeScript**: For type-safe development

### Development Tools

#### Cliston CLI

Our command-line interface tool for rapid development. It helps you:

- Scaffold new Meteor projects
- Generate components and pages
- Create forms with validation
- Set up API endpoints

[Learn more about Cliston CLI](./cliston-cli/overview.md)

#### SupraKit UI

Our component library providing:

- Reusable UI components
- Custom hooks
- Form utilities
- Table components

[Explore SupraKit UI](./suprakit-ui/overview.md)

## Best Practices

### Project Structure

```plaintext
my-project/
├── client/            # Client-side code
├── imports/
│   ├── api/          # API definitions
│   ├── startup/      # Initialization code
│   └── ui/           # UI components
├── public/           # Static assets
└── server/           # Server-side code
```

### Code Organization

1. **Component Structure**
    - One component per file
    - Separate styling in .less files
    - Mobile-specific styles in separate files

2. **API Organization**
    - Collection definitions
    - Methods
    - Publications
    - GraphQL queries/mutations

3. **State Management**
    - React Query for server state
    - React hooks for local state
    - Context for global state

### Development Workflow

1. **Starting a New Project**
    - Use Cliston CLI for project creation
    - Follow the starter kit structure
    - Set up environment variables

2. **Feature Development**
    - Create feature branch
    - Use Cliston CLI for scaffolding
    - Implement tests

3. **Code Review Process**
    - Self-review checklist
    - Peer review guidelines
    - Testing requirements

## Tools Quick Start

### Getting Started with Cliston

```bash
git clone git@github.com:allohouston/suprakit-cli.git
cd suprakit-cli
npm install
npm link
cliston --version
```

### Using SupraKit UI

```bash
meteor npm install meteor/suprakit:ui
```

## Additional Resources

- [Custom Hooks Documentation](./suprakit-ui/hooks.md)
- [Component Library](./suprakit-ui/components.md)
- [CLI Commands Reference](./cliston-cli/commands.md)

## Contributing

We encourage contributions to our documentation. If you find areas that need clarification or have suggestions for improvement:

1. Submit an issue describing the problem
2. Create a pull request with your proposed changes
3. Follow our documentation style guide

## Support

If you encounter any issues or need clarification:

1. Check the relevant documentation section
2. Look for similar solved problems
3. Contact the development team
