import React, { useState, useMemo } from 'react';
import { Activity, RotateCcw } from 'lucide-react';

export default function BMICalculator() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [unit, setUnit] = useState('metric'); // metric or imperial

    const result = useMemo(() => {
        const w = parseFloat(weight) || 0;
        const h = parseFloat(height) || 0;

        let bmi;
        if (unit === 'metric') {
            // weight in kg, height in cm
            const heightM = h / 100;
            bmi = w / (heightM * heightM);
        } else {
            // weight in lbs, height in inches
            bmi = (w / (h * h)) * 703;
        }

        if (!isFinite(bmi) || bmi <= 0) {
            return { bmi: 0, category: 'Unknown', color: 'gray' };
        }

        let category, color;
        if (bmi < 18.5) {
            category = 'Underweight';
            color = '#3b82f6';
        } else if (bmi < 25) {
            category = 'Normal';
            color = '#22c55e';
        } else if (bmi < 30) {
            category = 'Overweight';
            color = '#eab308';
        } else {
            category = 'Obese';
            color = '#ef4444';
        }

        return { bmi, category, color };
    }, [weight, height, unit]);

    const handleReset = () => {
        setWeight(unit === 'metric' ? '70' : '154');
        setHeight(unit === 'metric' ? '170' : '67');
    };

    return (
        <div className="max-w-md mx-auto space-y-6">
            {/* Unit Toggle */}
            <div className="flex bg-[var(--bg-secondary)] rounded-lg p-1">
                {['metric', 'imperial'].map(u => (
                    <button
                        key={u}
                        onClick={() => {
                            setUnit(u);
                            if (u === 'metric') {
                                setWeight('70');
                                setHeight('170');
                            } else {
                                setWeight('154');
                                setHeight('67');
                            }
                        }}
                        className={`flex-1 py-2 rounded-md transition-colors ${unit === u ? 'bg-[var(--accent-primary)] text-white' : ''}`}
                    >
                        {u === 'metric' ? 'Metric (kg/cm)' : 'Imperial (lbs/in)'}
                    </button>
                ))}
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium">
                        Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                    </label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full p-3 text-lg bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)]"
                        min="0"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium">
                        Height ({unit === 'metric' ? 'cm' : 'inches'})
                    </label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full p-3 text-lg bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)]"
                        min="0"
                    />
                </div>
            </div>

            {/* Result */}
            <div className="p-8 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] text-center">
                <div className="text-sm text-[var(--text-muted)] mb-2">Your BMI</div>
                <div className="text-5xl font-bold mb-2" style={{ color: result.color }}>
                    {result.bmi.toFixed(1)}
                </div>
                <div className="text-lg font-medium" style={{ color: result.color }}>
                    {result.category}
                </div>
            </div>

            {/* BMI Scale */}
            <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
                <div className="text-sm font-medium mb-3">BMI Categories</div>
                <div className="space-y-2 text-sm">
                    {[
                        { range: '< 18.5', label: 'Underweight', color: '#3b82f6' },
                        { range: '18.5 - 24.9', label: 'Normal', color: '#22c55e' },
                        { range: '25 - 29.9', label: 'Overweight', color: '#eab308' },
                        { range: '≥ 30', label: 'Obese', color: '#ef4444' },
                    ].map(item => (
                        <div key={item.label} className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="w-24">{item.range}</span>
                            <span className="text-[var(--text-muted)]">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handleReset} className="w-full flex items-center justify-center gap-2 px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                <RotateCcw size={16} /> Reset
            </button>
        </div>
    );
}
