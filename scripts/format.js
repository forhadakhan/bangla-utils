import { exec } from 'child_process';

exec('prettier --write .', (error, stdout, stderr) => {
    if (error) {
        console.error('\x1b[31m%s\x1b[0m', 'Formatting failed:'); // Red text
        console.error(stderr || stdout);
        process.exit(1);
    } else {
        console.log('\x1b[32m%s\x1b[0m', 'Formatting completed successfully!'); // Green text

        // Read the prettier stdout and find the files changed
        const filesChanged = stdout
            .split('\n')
            .filter((line) => line && line.includes('formatted'))
            .map((line) => line.replace('formatted', '').trim());

        if (filesChanged.length > 0) {
            console.log(
                `\x1b[33m%s\x1b[0m`,
                `${filesChanged.length} files were formatted:`
            );
            filesChanged.forEach((file) => console.log(`- ${file}`));
        } else {
            console.log('\x1b[33m%s\x1b[0m', 'No files were changed.');
        }
    }
});
