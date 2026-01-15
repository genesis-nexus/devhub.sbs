export const toolContent = {
    'jwt': {
        title: "All About JWT (JSON Web Tokens)",
        content: `
## What is a JWT?
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

## How to use this JWT Verifier
1. **Paste your token**: Copy your JWT string (usually starting with \`eyJ...\`) into the input box.
2. **View Header & Payload**: The tool instantly decodes the Base64Url encoded parts of the token.
3. **Verify Signature**: Enter your secret key to verify if the token has been tampered with.

## Common Use Cases
*   **Authorization**: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.
*   **Information Exchange**: JWTs are a good way of securely transmitting information between parties. Because JWTs can be signed (for example, using public/private key pairs), you can be sure the senders are who they say they are.
        `
    },
    'json': {
        title: "Understanding JSON Validation",
        content: `
## Why Validate JSON?
JSON (JavaScript Object Notation) is the de facto standard for data exchange on the web. However, a single missing comma or unclosed brace can break your entire application. This tool helps you:
*   Identify syntax errors instantly.
*   Format (beautify) minified JSON for readability.
*   Minify JSON to save bandwidth.

## Key Features
*   **Error Highlighting**: Pinpoints the exact line number where your JSON is invalid.
*   **Auto-fixing**: Can automatically correct common errors like trailing commas or single quotes.
*   **Tree View**: Visualize nested JSON structures easily.

## Best Practices
Always validate your JSON payloads before sending them to an API or storing them in a database. Consistent formatting also helps in code reviews and debugging.
        `
    },
    'base64': {
        title: "Base64 Encoding Explained",
        content: `
## What is Base64?
Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation.

## When to use Base64
*   **Embedding Images**: You can embed small images directly into HTML or CSS using Base64 data URIs to reduce HTTP requests.
*   **Email Attachments**: SMTP (email protocol) was designed for text, so binary attachments are encoded in Base64.
*   **Data URLs**: Representing file data as a string for easy storage or transmission.

## Security Note
Base64 is **encoding**, not encryption. It does not secure your data. Anyone can decode a Base64 string back to its original form. Never use Base64 to hide sensitive information like passwords or API keys.
        `
    },
    'hash': {
        title: "Cryptographic Hashing Guide",
        content: `
## What is a Hash Function?
A hash function is an algorithm that takes an input (or 'message') and returns a fixed-size string of bytes. The output is typically a 'digest' that is unique to each unique input.

## Supported Algorithms
*   **MD5**: Fast but considered cryptographically broken. Good for checksums, bad for passwords.
*   **SHA-1**: Legacy secure hash, now deprecated for most security uses.
*   **SHA-256**: Widely used security standard (e.g., Bitcoin, SSL certificates).
*   **SHA-512**: More secure variant producing a longer hash.

## Use Cases
*   **Password Storage**: *Note: Always use salted hashes (like bcrypt/argon2) for passwords, not simple SHA/MD5.*
*   **File Integrity**: Verify that a downloaded file hasn't been corrupted.
*   **Digital Signatures**: Ensuring data hasn't been tampered with.
        `
    },
    'url': {
        title: "URL Encoding & Decoding",
        content: `
## Why Encode URLs?
URLs can only contain a limited set of characters from the US-ASCII character set. Characters outside this set (like spaces, emojis, or foreign scripts) must be converted into a valid ASCII format.

## How it Works
URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits. For example, a space becomes \`%20\`.

## Common Characters
*   Space → \`%20\`
*   / (Forward Slash) → \`%2F\`
*   ? (Question Mark) → \`%3F\`
*   = (Equals) → \`%3D\`

Use this tool to clean up query parameters before sending API requests or to decode messy URLs you find in logs.
        `
    }
};
