import React, { useState } from 'react';
import { Calculator, RotateCcw } from 'lucide-react';

export default function TipCalculator() {
    const [billAmount, setBillAmount] = useState('');
    const [tipPercent, setTipPercent] = useState(15);
    const [splitCount, setSplitCount] = useState(1);

    const bill = parseFloat(billAmount) || 0;
    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;
    const perPerson = splitCount > 0 ? total / splitCount : total;

    const handleReset = () => {
        setBillAmount('');
        setTipPercent(15);
        setSplitCount(1);
    };

    return (
        <div className="max-w-md mx-auto space-y-6">
            {/* Bill Input */}
            <div className="space-y-2">
                <label className="block text-sm font-medium">Bill Amount ($)</label>
                <input
                    type="number"
                    value={billAmount}
                    onChange={(e) => setBillAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full p-4 text-2xl font-bold bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)]"
                    min="0"
                    step="0.01"
                />
            </div>

            {/* Tip Percentage */}
            <div className="space-y-2">
                <label className="block text-sm font-medium">Tip: {tipPercent}%</label>
                <div className="flex gap-2 flex-wrap">
                    {[10, 15, 18, 20, 25].map(p => (
                        <button
                            key={p}
                            onClick={() => setTipPercent(p)}
                            className={`px-4 py-2 rounded-md transition-colors ${tipPercent === p ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)]'}`}
                        >
                            {p}%
                        </button>
                    ))}
                </div>
                <input
                    type="range"
                    min="0"
                    max="50"
                    value={tipPercent}
                    onChange={(e) => setTipPercent(parseInt(e.target.value))}
                    className="w-full mt-2"
                />
            </div>

            {/* Split */}
            <div className="space-y-2">
                <label className="block text-sm font-medium">Split Between</label>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setSplitCount(Math.max(1, splitCount - 1))}
                        className="w-12 h-12 text-2xl bg-[var(--bg-secondary)] rounded-lg hover:bg-[var(--bg-tertiary)]"
                    >
                        -
                    </button>
                    <span className="text-2xl font-bold w-12 text-center">{splitCount}</span>
                    <button
                        onClick={() => setSplitCount(splitCount + 1)}
                        className="w-12 h-12 text-2xl bg-[var(--bg-secondary)] rounded-lg hover:bg-[var(--bg-tertiary)]"
                    >
                        +
                    </button>
                    <span className="text-[var(--text-muted)]">people</span>
                </div>
            </div>

            {/* Results */}
            <div className="p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-[var(--text-secondary)]">Tip Amount</span>
                    <span className="text-xl font-bold">${tipAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[var(--text-secondary)]">Total</span>
                    <span className="text-xl font-bold">${total.toFixed(2)}</span>
                </div>
                <hr className="border-[var(--border-color)]" />
                <div className="flex justify-between items-center">
                    <span className="text-[var(--text-secondary)]">Per Person</span>
                    <span className="text-2xl font-bold text-[var(--accent-primary)]">${perPerson.toFixed(2)}</span>
                </div>
            </div>

            <button onClick={handleReset} className="w-full flex items-center justify-center gap-2 px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                <RotateCcw size={16} /> Reset
            </button>
        </div>
    );
}
