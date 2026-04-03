import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const stocks = [
        { name: 'AAPL', price: 150.25, change: '+1.25%' },
        { name: 'GOOGL', price: 2750.15, change: '-0.75%' },
        { name: 'MSFT', price: 299.85, change: '+0.15%' },
        { name: 'TSLA', price: 720.50, change: '+2.10%' }
    ];

    const portfolioStats = {
        totalValue: '$50,000',
        todaysGain: '+$500',
        returnPercentage: '+1%',
        holdingsCount: 10
    };

    return (
        <div className="dashboard">
            <h1>Stock Market Overview</h1>
            <div className="stock-grid">
                {stocks.map((stock) => (
                    <div key={stock.name} className="stock-card">
                        <h2>{stock.name}</h2>
                        <p>Price: {stock.price}</p>
                        <p>Change: {stock.change}</p>
                    </div>
                ))}
            </div>
            <h1>Portfolio Stats</h1>
            <div className="portfolio-stats">
                <div className="stat-card">
                    <h2>Total Value</h2>
                    <p>{portfolioStats.totalValue}</p>
                </div>
                <div className="stat-card">
                    <h2>Today's Gain</h2>
                    <p>{portfolioStats.todaysGain}</p>
                </div>
                <div className="stat-card">
                    <h2>Return Percentage</h2>
                    <p>{portfolioStats.returnPercentage}</p>
                </div>
                <div className="stat-card">
                    <h2>Holdings Count</h2>
                    <p>{portfolioStats.holdingsCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;