import React , { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './TopCompanies.css';
import Watchlist from './Watchlist';


const IndianCompanies = [
  { name: 'Reliance Industries Limited', symbol: 'RELIANCE', price: '$150.00' },
  { name: 'Tata Consultancy Services Limited', symbol: 'TCS', price: '$140.00' },
  { name: 'Infosys Limited', symbol: 'INFY', price: '$130.00' },
  { name: 'HDFC Bank Limited', symbol: 'HDFCBANK', price: '$120.00' },
  { name: 'Hindustan Unilever Limited', symbol: 'HINDUNILVR', price: '$110.00' },
  { name: 'ITC Limited', symbol: 'ITC', price: '$100.00' },
  { name: 'State Bank of India', symbol: 'SBIN', price: '$80.00' },
  { name: 'Larsen & Toubro Limited', symbol: 'LT', price: '$70.00' },
  { name: 'Kotak Mahindra Bank Limited', symbol: 'KOTAKBANK', price: '$60.00' },
  { name: 'Axis Bank Limited', symbol: 'AXISBANK', price: '$50.00' },
  { name: 'Mahindra & Mahindra Limited', symbol: 'M&M', price: '$40.00' },
  { name: 'Bharti Airtel Limited', symbol: 'BHARTIARTL', price: '$30.00' },
  { name: 'Wipro Limited', symbol: 'WIPRO', price: '$20.00' },
  { name: 'Maruti Suzuki India Limited', symbol: 'MARUTI', price: '$10.00' },
  { name: 'Adani Ports and Special Economic Zone Limited', symbol: 'ADANIPORTS', price: '$15.00' },
  { name: 'Bajaj Finance Limited', symbol: 'BAJFINANCE', price: '$25.00' },
  { name: 'Tata Steel Limited', symbol: 'TATASTEEL', price: '$35.00' },
  { name: 'Asian Paints Limited', symbol: 'ASIANPAINT', price: '$45.00' },
  { name: 'Coal India Limited', symbol: 'COALINDIA', price: '$55.00' },
  { name: 'Sun Pharmaceutical Industries Limited', symbol: 'SUNPHARMA', price: '$65.00' },
  { name: 'UltraTech Cement Limited', symbol: 'ULTRACEMCO', price: '$75.00' },
  { name: 'NTPC Limited', symbol: 'NTPC', price: '$85.00' },
  { name: 'Tech Mahindra Limited', symbol: 'TECHM', price: '$95.00' },
  { name: 'Power Grid Corporation of India Limited', symbol: 'POWERGRID', price: '$105.00' },
];

const WorldwideCompanies = [
  { name: 'Apple Inc.', symbol: 'AAPL', price: '$150.00' },
  { name: 'Microsoft Corporation', symbol: 'MSFT', price: '$140.00' },
  { name: 'Amazon.com, Inc.', symbol: 'AMZN', price: '$130.00' },
  { name: 'Alphabet Inc.', symbol: 'GOOGL', price: '$120.00' },
  { name: 'Meta Platforms, Inc.', symbol: 'META', price: '$110.00' },
  { name: 'Tesla, Inc.', symbol: 'TSLA', price: '$100.00' },
  { name: 'Facebook, Inc.', symbol: 'FB', price: '$90.00' },
  { name: 'Berkshire Hathaway Inc.', symbol: 'BRK.A', price: '$80.00' },
  { name: 'Johnson & Johnson', symbol: 'JNJ', price: '$70.00' },
  { name: 'JPMorgan Chase & Co.', symbol: 'JPM', price: '$60.00' },
  { name: 'Visa Inc.', symbol: 'V', price: '$50.00' },
  { name: 'Procter & Gamble Company', symbol: 'PG', price: '$40.00' },
  { name: 'NVIDIA Corporation', symbol: 'NVDA', price: '$30.00' },
  { name: 'Alibaba Group Holding Limited', symbol: 'BABA', price: '$20.00' },
  { name: 'The Walt Disney Company', symbol: 'DIS', price: '$10.00' },
  { name: 'PayPal Holdings, Inc.', symbol: 'PYPL', price: '$5.00' },
  { name: 'Mastercard Incorporated', symbol: 'MA', price: '$2.00' },
  { name: 'Intel Corporation', symbol: 'INTC', price: '$1.00' },
  { name: 'Cisco Systems, Inc.', symbol: 'CSCO', price: '$0.50' },
  { name: 'Netflix, Inc.', symbol: 'NFLX', price: '$150.00' },
  { name: 'Adobe Inc.', symbol: 'ADBE', price: '$140.00' },
  { name: 'Walmart Inc.', symbol: 'WMT', price: '$130.00' },
  { name: 'McDonald\'s Corporation', symbol: 'MCD', price: '$120.00' },
  { name: 'Pfizer Inc.', symbol: 'PFE', price: '$110.00' },
  { name: 'Exxon Mobil Corporation', symbol: 'XOM', price: '$100.00' },
];

const StockButtons = ({ companies}) => {
  
  const [selectedSymbol, setSelectedSymbol] = useState(null); // Declare selectedSymbol state variable
  const [watchlist, setWatchlist] = useState([]);


  const handleCardClick = (symbol) => {
    setSelectedSymbol(symbol);
  };
  const handleAddToWatchlist = (company) => {
    setWatchlist([...watchlist, company]);
  };
  const handleRemoveFromWatchlist = (symbol) => {
    setWatchlist(watchlist.filter((company) => company.symbol !== symbol));
  };

  return (
    <div>
      <div className="marquee">
        <div className="marquee-content">
          {companies.map((company, index) => (
            <Card
              key={index}
              className={`company-card ${selectedSymbol === company.symbol ? 'selected' : ''}`}
              onClick={() => handleCardClick(company.symbol)}
            >
              <Card.Body>
                <Card.Title>{company.name}</Card.Title>
                <Card.Text>
                  <strong>{company.symbol}</strong>
                </Card.Text>
                <Card.Text>
                  <small>{company.price}</small>
                </Card.Text>
                <Button variant="primary" onClick={() => handleAddToWatchlist(company)}>
                  Add to Watchlist
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div className="watchlist">
        {watchlist.map((company, index) => (
          <Watchlist key={index} company={company} onRemove={handleRemoveFromWatchlist} />
        ))}
      </div>
    </div>
  );
};

const TopCompanies = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={12}>
          <h2 className="text-center mb-4">Indian Companies</h2>
          <StockButtons companies={IndianCompanies} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <h2 className="text-center mb-4">Worldwide Companies</h2>
          <StockButtons companies={WorldwideCompanies} />
        </Col>
      </Row>
    </Container>
  );
};

export default TopCompanies;


