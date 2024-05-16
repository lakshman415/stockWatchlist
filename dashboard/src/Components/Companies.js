import React from 'react';
import { Row, Col } from 'react-bootstrap';

const IndianCompanies = [
  { name: 'Reliance Industries Limited', symbol: 'RELIANCE' },
  { name: 'Tata Consultancy Services Limited', symbol: 'TCS' },
  { name: 'Infosys Limited', symbol: 'INFY' },
  { name: 'HDFC Bank Limited', symbol: 'HDFCBANK' },
  { name: 'Hindustan Unilever Limited', symbol: 'HINDUNILVR' },
  { name: 'ITC Limited', symbol: 'ITC' },
  { name: 'Housing Development Finance Corporation Limited', symbol: 'HDFC' },
  { name: 'State Bank of India', symbol: 'SBIN' },
  { name: 'Larsen & Toubro Limited', symbol: 'LT' },
  { name: 'Kotak Mahindra Bank Limited', symbol: 'KOTAKBANK' },
  { name: 'Axis Bank Limited', symbol: 'AXISBANK' },
  { name: 'Mahindra & Mahindra Limited', symbol: 'M&M' },
  { name: 'Bharti Airtel Limited', symbol: 'BHARTIARTL' },
//   { name: 'Wipro Limited', symbol: 'WIPRO' },
//   { name: 'Maruti Suzuki India Limited', symbol: 'MARUTI' },
//   { name: 'Adani Ports and Special Economic Zone Limited', symbol: 'ADANIPORTS' },
//   { name: 'Bajaj Finance Limited', symbol: 'BAJFINANCE' },
//   { name: 'Tata Steel Limited', symbol: 'TATASTEEL' },
//   { name: 'Asian Paints Limited', symbol: 'ASIANPAINT' },
//   { name: 'Coal India Limited', symbol: 'COALINDIA' },
//   { name: 'Sun Pharmaceutical Industries Limited', symbol: 'SUNPHARMA' },
//   { name: 'UltraTech Cement Limited', symbol: 'ULTRACEMCO' },
//   { name: 'NTPC Limited', symbol: 'NTPC' },
//   { name: 'Tech Mahindra Limited', symbol: 'TECHM' },
//   { name: 'Power Grid Corporation of India Limited', symbol: 'POWERGRID' },
];

const WorldwideCompanies = [
  { name: 'Apple Inc.', symbol: 'AAPL' },
  { name: 'Microsoft Corporation', symbol: 'MSFT' },
  { name: 'Amazon.com, Inc.', symbol: 'AMZN' },
  { name: 'Alphabet Inc.', symbol: 'GOOGL' },
  { name: 'Meta Platforms, Inc.', symbol: 'META' },
  { name: 'Tesla, Inc.', symbol: 'TSLA' },
  { name: 'Facebook, Inc.', symbol: 'FB' },
  { name: 'Berkshire Hathaway Inc.', symbol: 'BRK.A' },
  { name: 'Johnson & Johnson', symbol: 'JNJ' },
  { name: 'JPMorgan Chase & Co.', symbol: 'JPM' },
  { name: 'Visa Inc.', symbol: 'V' },
  { name: 'Procter & Gamble Company', symbol: 'PG' },
  { name: 'NVIDIA Corporation', symbol: 'NVDA' },
  { name: 'Alibaba Group Holding Limited', symbol: 'BABA' },
  { name: 'The Walt Disney Company', symbol: 'DIS' },
  { name: 'PayPal Holdings, Inc.', symbol: 'PYPL' },
  { name: 'Mastercard Incorporated', symbol: 'MA' },
  { name: 'Intel Corporation', symbol: 'INTC' },
  { name: 'Cisco Systems, Inc.', symbol: 'CSCO' },
//   { name: 'Netflix, Inc.', symbol: 'NFLX' },
//   { name: 'Adobe Inc.', symbol: 'ADBE' },
//   { name: 'Walmart Inc.', symbol: 'WMT' },
//   { name: 'McDonald\'s Corporation', symbol: 'MCD' },
//   { name: 'Pfizer Inc.', symbol: 'PFE' },
//   { name: 'Exxon Mobil Corporation', symbol: 'XOM' },
];

const StockButtons = ({ companies }) => {
    return (
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <div>
            {companies.map((company, index) => (
              <button key={company.symbol} className="btn btn-light btn-lg mb-2" style={{ marginRight: '10px' }}>
                {company.symbol}
              </button>
            ))}
          </div>
        </Col>
      </Row>
    );
  };
  
  const TopCompanies = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
        <Row>
          <Col md={6}>
            <div>
              <h2 className="text-center mb-4">Indian Companies</h2>
              <StockButtons companies={IndianCompanies} />
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h2 className="text-center mb-4">Worldwide Companies</h2>
              <StockButtons companies={WorldwideCompanies} />
            </div>
          </Col>
        </Row>
      </div>
      
    );
  };
  
  export default TopCompanies;