## Contributing to `bangla-utils`

Thank you for your interest in contributing to `bangla-utils`, a library for Bangla language utilities. Before making changes, please discuss your proposed changes with the maintainers via issue, email, or any other method.

### Pull Request Process

1. **Code Formatting and Linting**  
   Ensure your code follows our coding standards. Run:

    ```bash
    npm run format
    npm run lint
    ```

    Ensure all tests pass:

    ```bash
    npm test
    ```

2. **Adding a Feature or Fixing a Bug**

    - For new functionality, create a new file under the appropriate directory (e.g., `/src/number`).
    - Modify existing files only for bug fixes or logic enhancements.

3. **Testing**  
   Include unit tests for your changes. Test files should be placed in `./workingDirectory/__tests__/workingFile.test.ts`. We use [Jest](https://jestjs.io/) for testing. Ensure tests cover edge cases.

4. **TypeScript**  
   Write code in TypeScript with type safety.

5. **Documentation**

    - Add or update `typedoc` comments, as this is important for documentation.
    - Reflect changes to `README.md` only for major features or updates.

6. **Commit Message**  
   Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

7. **Review and Approval**  
   Your PR must be reviewed and approved by a maintainer before merging.

### Code of Conduct

We are committed to providing a harassment-free and inclusive experience. By contributing, you agree to follow our Code of Conduct:

- **Positive Behavior**: Be respectful, inclusive, and constructive.
- **Unacceptable Behavior**: No harassment, discrimination, or trolling.

For any violations, contact the project team at [ping@forhadakhan.com](mailto:ping@forhadakhan.com). All complaints will be taken seriously and reviewed confidentially.
