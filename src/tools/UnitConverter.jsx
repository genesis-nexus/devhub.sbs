import React, { useState, useMemo } from 'react';
import { ArrowLeftRight, RotateCcw } from 'lucide-react';

const unitCategories = {
    length: {
        name: 'Length',
        units: {
            mm: { name: 'Millimeters', toBase: 0.001 },
            cm: { name: 'Centimeters', toBase: 0.01 },
            m: { name: 'Meters', toBase: 1 },
            km: { name: 'Kilometers', toBase: 1000 },
            in: { name: 'Inches', toBase: 0.0254 },
            ft: { name: 'Feet', toBase: 0.3048 },
            yd: { name: 'Yards', toBase: 0.9144 },
            mi: { name: 'Miles', toBase: 1609.344 },
        }
    },
    weight: {
        name: 'Weight',
        units: {
            mg: { name: 'Milligrams', toBase: 0.000001 },
            g: { name: 'Grams', toBase: 0.001 },
            kg: { name: 'Kilograms', toBase: 1 },
            lb: { name: 'Pounds', toBase: 0.453592 },
            oz: { name: 'Ounces', toBase: 0.0283495 },
            ton: { name: 'Metric Tons', toBase: 1000 },
        }
    },
    temperature: {
        name: 'Temperature',
        units: {
            c: { name: 'Celsius' },
            f: { name: 'Fahrenheit' },
            k: { name: 'Kelvin' },
        }
    },
    area: {
        name: 'Area',
        units: {
            sqm: { name: 'Square Meters', toBase: 1 },
            sqkm: { name: 'Square Kilometers', toBase: 1000000 },
            sqft: { name: 'Square Feet', toBase: 0.092903 },
            sqyd: { name: 'Square Yards', toBase: 0.836127 },
            acre: { name: 'Acres', toBase: 4046.86 },
            ha: { name: 'Hectares', toBase: 10000 },
        }
    },
    volume: {
        name: 'Volume',
        units: {
            ml: { name: 'Milliliters', toBase: 0.001 },
            l: { name: 'Liters', toBase: 1 },
            gal: { name: 'Gallons (US)', toBase: 3.78541 },
            qt: { name: 'Quarts (US)', toBase: 0.946353 },
            pt: { name: 'Pints (US)', toBase: 0.473176 },
            cup: { name: 'Cups (US)', toBase: 0.236588 },
            floz: { name: 'Fluid Ounces (US)', toBase: 0.0295735 },
        }
    },
    time: {
        name: 'Time',
        units: {
            ms: { name: 'Milliseconds', toBase: 0.001 },
            s: { name: 'Seconds', toBase: 1 },
            min: { name: 'Minutes', toBase: 60 },
            hr: { name: 'Hours', toBase: 3600 },
            day: { name: 'Days', toBase: 86400 },
            wk: { name: 'Weeks', toBase: 604800 },
            yr: { name: 'Years', toBase: 31536000 },
        }
    },
    data: {
        name: 'Digital Storage',
        units: {
            b: { name: 'Bytes', toBase: 1 },
            kb: { name: 'Kilobytes', toBase: 1024 },
            mb: { name: 'Megabytes', toBase: 1048576 },
            gb: { name: 'Gigabytes', toBase: 1073741824 },
            tb: { name: 'Terabytes', toBase: 1099511627776 },
        }
    },
};

export default function UnitConverter() {
    const [category, setCategory] = useState('length');
    const [fromUnit, setFromUnit] = useState('cm');
    const [toUnit, setToUnit] = useState('m');
    const [inputValue, setInputValue] = useState('100');

    const units = unitCategories[category].units;

    const result = useMemo(() => {
        const value = parseFloat(inputValue);
        if (isNaN(value)) return '';

        // Temperature requires special handling
        if (category === 'temperature') {
            let celsius;
            // Convert to Celsius first
            if (fromUnit === 'c') celsius = value;
            else if (fromUnit === 'f') celsius = (value - 32) * 5 / 9;
            else if (fromUnit === 'k') celsius = value - 273.15;

            // Convert from Celsius to target
            if (toUnit === 'c') return celsius;
            else if (toUnit === 'f') return (celsius * 9 / 5) + 32;
            else if (toUnit === 'k') return celsius + 273.15;
        }

        // Standard conversion via base unit
        const fromFactor = units[fromUnit].toBase;
        const toFactor = units[toUnit].toBase;
        return (value * fromFactor) / toFactor;
    }, [inputValue, fromUnit, toUnit, category, units]);

    const swapUnits = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
    };

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        const newUnits = Object.keys(unitCategories[newCategory].units);
        setFromUnit(newUnits[0]);
        setToUnit(newUnits[1] || newUnits[0]);
        setInputValue('100');
    };

    const formatResult = (num) => {
        if (typeof num !== 'number' || isNaN(num)) return '—';
        if (Math.abs(num) < 0.000001 && num !== 0) return num.toExponential(6);
        if (Math.abs(num) >= 1000000) return num.toExponential(6);
        return num.toLocaleString(undefined, { maximumFractionDigits: 6 });
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
                {Object.entries(unitCategories).map(([key, cat]) => (
                    <button
                        key={key}
                        onClick={() => handleCategoryChange(key)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${category === key
                                ? 'bg-[var(--accent-primary)] text-white'
                                : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Converter */}
            <div className="p-6 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)]">
                <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
                    {/* From */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[var(--text-muted)]">From</label>
                        <input
                            type="number"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full p-3 text-xl font-bold bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)]"
                            placeholder="Enter value"
                        />
                        <select
                            value={fromUnit}
                            onChange={(e) => setFromUnit(e.target.value)}
                            className="w-full p-2 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg"
                        >
                            {Object.entries(units).map(([key, unit]) => (
                                <option key={key} value={key}>{unit.name} ({key})</option>
                            ))}
                        </select>
                    </div>

                    {/* Swap Button */}
                    <button
                        onClick={swapUnits}
                        className="p-3 bg-[var(--bg-tertiary)] rounded-full hover:bg-[var(--accent-primary)] hover:text-white transition-colors self-center"
                        title="Swap units"
                    >
                        <ArrowLeftRight size={20} />
                    </button>

                    {/* To */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-[var(--text-muted)]">To</label>
                        <div className="p-3 text-xl font-bold bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg min-h-[52px] flex items-center">
                            {formatResult(result)}
                        </div>
                        <select
                            value={toUnit}
                            onChange={(e) => setToUnit(e.target.value)}
                            className="w-full p-2 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg"
                        >
                            {Object.entries(units).map(([key, unit]) => (
                                <option key={key} value={key}>{unit.name} ({key})</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Formula Display */}
            <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] text-center text-sm text-[var(--text-muted)]">
                <span className="font-mono">
                    {inputValue || '0'} {units[fromUnit]?.name} = {formatResult(result)} {units[toUnit]?.name}
                </span>
            </div>

            {/* Quick Reference */}
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                <strong>Tip:</strong> Select a category above to convert between different unit types. Use the swap button to quickly reverse the conversion.
            </div>
        </div>
    );
}
