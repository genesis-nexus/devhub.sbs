export function getJSONErrorLine(input, errorMessage) {
    const match = errorMessage.match(/position (\d+)/);
    if (match) {
        const position = parseInt(match[1]);
        const lines = input.substring(0, position).split('\n');
        return lines.length;
    }
    return 'Unknown';
}

export function beautifyJSON(obj, indent = 2, maxDepth = 100) {
    const seen = new WeakSet();

    function beautify(value, currentIndent = 0, depth = 0) {
        if (depth > maxDepth) {
            return '"[Max depth exceeded]"';
        }

        if (value === null) return 'null';
        if (typeof value === 'undefined') return 'undefined';
        if (typeof value === 'string') return `"${value.replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t')}"`;
        if (typeof value === 'number') return value.toString();
        if (typeof value === 'boolean') return value.toString();

        if (typeof value === 'object') {
            if (seen.has(value)) {
                return '"[Circular reference]"';
            }
            seen.add(value);

            if (Array.isArray(value)) {
                if (value.length === 0) return '[]';

                // Simple check for arrays of primitives to keep them separate lines or not? 
                // Original legacy logic put every item on new line.
                const items = value.map(item =>
                    ' '.repeat(currentIndent + indent) + beautify(item, currentIndent + indent, depth + 1)
                );

                return `[\n${items.join(',\n')}\n${' '.repeat(currentIndent)}]`;
            } else {
                const keys = Object.keys(value);
                if (keys.length === 0) return '{}';

                const items = keys.map(key => {
                    const formattedKey = `"${key}": `;
                    const formattedValue = beautify(value[key], currentIndent + indent, depth + 1);
                    return ' '.repeat(currentIndent + indent) + formattedKey + formattedValue;
                });

                return `{\n${items.join(',\n')}\n${' '.repeat(currentIndent)}}`;
            }
        }

        return String(value);
    }

    return beautify(obj, 0, 0);
}
