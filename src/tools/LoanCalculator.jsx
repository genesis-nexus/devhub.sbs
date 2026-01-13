import React, { useState, useMemo } from 'react';
import { Calculator, RotateCcw } from 'lucide-react';

export default function LoanCalculator() {
    const [principal, setPrincipal] = useState('10000');
    const [rate, setRate] = useState('5');
    const [years, setYears] = useState('5');

    const result = useMemo(() => {
        const p = parseFloat(principal) || 0;
        const r = (parseFloat(rate) || 0) / 100 / 12;
        const n = (parseFloat(years) || 0) * 12;

        if (p <= 0 || r <= 0 || n <= 0) {
            return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0 };
        }

        const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = monthlyPayment * n;
        const totalInterest = totalPayment - p;

        return {
            monthlyPayment: isFinite(monthlyPayment) ? monthlyPayment : 0,
            totalPayment: isFinite(totalPayment) ? totalPayment : 0,
            totalInterest: isFinite(totalInterest) ? totalInterest : 0
        };
    }, [principal, rate, years]);

    const handleReset = () => {
        setPrincipal('10000');
        setRate('5');
        setYears('5');
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium">Loan Amount ($)</label>
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)]"
                        min="0"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium">Interest Rate (%)</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)]"
                        min="0"
                        step="0.1"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium">Loan Term (Years)</label>
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        className="w-full p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)]"
                        min="1"
                    />
                </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 bg-[var(--accent-primary)] text-white rounded-lg text-center">
                    <div className="text-sm opacity-80 mb-2">Monthly Payment</div>
                    <div className="text-3xl font-bold">${result.monthlyPayment.toFixed(2)}</div>
                </div>
                <div className="p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] text-center">
                    <div className="text-sm text-[var(--text-muted)] mb-2">Total Payment</div>
                    <div className="text-2xl font-bold">${result.totalPayment.toFixed(2)}</div>
                </div>
                <div className="p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] text-center">
                    <div className="text-sm text-[var(--text-muted)] mb-2">Total Interest</div>
                    <div className="text-2xl font-bold text-red-500">${result.totalInterest.toFixed(2)}</div>
                </div>
            </div>

            {/* Visual breakdown */}
            <div className="p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
                <div className="text-sm font-medium mb-2">Payment Breakdown</div>
                <div className="flex h-4 rounded-full overflow-hidden">
                    <div
                        className="bg-[var(--accent-primary)]"
                        style={{ width: `${(parseFloat(principal) / result.totalPayment) * 100 || 0}%` }}
                        title="Principal"
                    />
                    <div
                        className="bg-red-400"
                        style={{ width: `${(result.totalInterest / result.totalPayment) * 100 || 0}%` }}
                        title="Interest"
                    />
                </div>
                <div className="flex justify-between text-xs mt-2 text-[var(--text-muted)]">
                    <span>Principal: ${parseFloat(principal).toFixed(2)}</span>
                    <span>Interest: ${result.totalInterest.toFixed(2)}</span>
                </div>
            </div>

            <button onClick={handleReset} className="w-full flex items-center justify-center gap-2 px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                <RotateCcw size={16} /> Reset
            </button>
        </div>
    );
}
