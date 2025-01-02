# Bangla Utils

A comprehensive utility library for working with Bangla (Bengali) numbers, dates, math operations, and more.

[![Documentation](https://img.shields.io/badge/docs-latest-blue)](https://forhadakhan.github.io/bangla-utils)
[![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/forhadakhan/bangla-utils/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/bangla-utils)](https://www.npmjs.com/package/bangla-utils)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)](https://github.com/forhadakhan/bangla-utils/blob/main/CONTRIBUTING.md)

---

## Features

- **Number Utilities**: Convert English digits to Bengali digits, format numbers, and more.
- **Date & Time Utilities**: Work with Bengali dates, convert UTC timestamps to local Bengali time, and more.
- **Math Utilities**: Perform basic math operations with Bengali number support.
- **General Utilities**: Useful functions for working with Bengali text and data.

---

## Installation

Install the library via npm:

```bash
npm install bangla-utils
```

---

## Usage

Import and use the utilities in your project:

```typescript
import {
    welcome,
    convertToBanglaDigits,
    utcToLocalTimestamp,
} from 'bangla-utils';

console.log(welcome()); // Output: "স্বাগতম!"
console.log(convertToBanglaDigits(12345)); // Output: "১২৩৪৫"
console.log(convertToWords(123.45)); // Output: "একশত তেইশ দশমিক চার পাঁচ"
console.log(convertToTakaInWords(123.45)); // Output: "একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা"
console.log(convertToTakaInWords(123.45, false, true)); // "একশত তেইশ টাকা এবং পঁয়তাল্লিশ পয়সা মাত্র।"
console.log(convertToTakaInWords(123.45, true, true)); // "One hundred twenty-three taka and forty-five poisha only."
```

For detailed usage, refer to the [documentation](https://forhadakhan.github.io/bangla-utils/docs/modules.html).

---

## Documentation

Explore the full documentation to learn about all available utilities and their usage:

[📚 Documentation](https://forhadakhan.github.io/bangla-utils/modules.html)

---

## Contributing

We welcome contributions from the community! Whether you want to add new features, fix bugs, or improve documentation, your help is appreciated.

Learn how to contribute: [Contributing Guide](https://github.com/forhadakhan/bangla-utils/blob/main/CONTRIBUTING.md)

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/forhadakhan/bangla-utils/blob/main/LICENSE) file for details.

---

## Support

If you find this library useful, consider giving it a ⭐️ on [GitHub](https://github.com/forhadakhan/bangla-utils). For questions or feedback, please open an [issue](https://github.com/forhadakhan/bangla-utils/issues).
