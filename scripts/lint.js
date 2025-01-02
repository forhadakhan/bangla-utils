import { exec } from 'child_process';

exec('eslint .', (error, stdout, stderr) => {
    if (error) {
        console.error('\x1b[31m%s\x1b[0m', 'Linting failed:'); // Red text
        console.error(stdout || stderr);

        // Check if Prettier errors exist in the output
        if (stdout.includes('prettier/prettier')) {
            console.log(
                '\x1b[33m%s\x1b[0m',
                'Prettier issues detected.',
                'To fix all Prettier issues automatically, run "npm run format", then redo linting.'
            );
        }

        process.exit(1); // Exit with error code
    } else {
        console.log('\x1b[32m%s\x1b[0m', 'Linting completed successfully!'); // Green text
    }
});
