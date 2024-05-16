import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const StockData = () => {
    const [formattedData, setFormattedData] = useState([]);
    const [symbol, setSymbol] = useState('');
    const [lastRefreshed, setLastRefreshed] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [latestPrice, setLatestPrice] = useState('');
    const [showWatchlist, setShowWatchlist] = useState(false);
    const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/stocks/fetch-stock-data/');
        const data = response.data['Time Series (5min)'];
        const metaData = response.data['Meta Data'];
        const lastDataPoint = data[Object.keys(data)[0]]; // Get the latest data point

        const formattedData = Object.keys(data).map((timestamp) => ({
          timestamp: new Date(timestamp).toLocaleString(),
          open: parseFloat(data[timestamp]['1. open']),
          high: parseFloat(data[timestamp]['2. high']),
          low: parseFloat(data[timestamp]['3. low']),
          close: parseFloat(data[timestamp]['4. close']),
          volume: parseInt(data[timestamp]['5. volume']),
        }));

        setFormattedData(formattedData);
        setSymbol(metaData['2. Symbol']);
        setLastRefreshed(metaData['3. Last Refreshed']);
        setTimeZone(metaData['6. Time Zone']);
        setLatestPrice(lastDataPoint['4. close']); // Latest closing price
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);

  // Calculate the price range for the day
  const minPrice = Math.min(...formattedData.map((data) => data.low));
  const maxPrice = Math.max(...formattedData.map((data) => data.high));
  const addToWatchlist = () => {
    if (!showWatchlist) {
      setShowWatchlist(true);
    }

    if (!watchlist.includes(symbol)) {
      setWatchlist([...watchlist, symbol]);
    } else {
      alert(`${symbol} is already in the watchlist.`);
    }
  };

  return (
    <div> 
        <Container className="mt-4">
  {watchlist.length > 0 && <h2 className="text-center mb-4">WatchList</h2>}
  {showWatchlist && (
    <Row className="justify-content-left mt-3">
      <Col xs={12} md={10}>
        <div className="watchlist">
          {watchlist.map((item, index) => (
            <Button key={index} variant="light" className="mb-2 mr-2">{item}</Button>
          ))}
        </div>
      </Col>
    </Row>
  )}
</Container>

    <Container className="mt-4">
      <Row className="justify-content-left">
        <Col xs={12} md={10} className="text-left">
          <div className="stock-info">
            <h2>{symbol}</h2>
            <p>Last Refreshed: {lastRefreshed}</p>
            <p>Time Zone: {timeZone}</p>
            <p>Latest Price: ${latestPrice}</p>
          </div>
        </Col>
        <Col xs={12} md={2} className="text-right">
        <Button
              variant="light"
              size="lg"
              className="mb-2"
              style={{ marginRight: '10px' }}
              onClick={addToWatchlist}
            >
              Add to Watchlist
            </Button>
          </Col>
        </Row>
        
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8} className="text-center">
          <div className="chart-container">
            <LineChart width={800} height={400} data={formattedData}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis
                dataKey="timestamp"
                tickFormatter={(timestamp) => {
                  const date = new Date(timestamp);
                  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
                }}
              />
              <YAxis
                domain={[minPrice, maxPrice]}
                tickFormatter={(price) => `$${price.toFixed(2)}`}
              />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="open" stroke="#FFA500" name="Open" />
              <Line type="monotone" dataKey="high" stroke="#008000" name="High" />
              <Line type="monotone" dataKey="low" stroke="#FF0000" name="Low" />
              <Line type="monotone" dataKey="close" stroke="#8884d8" name="Close" />
            </LineChart>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default StockData;
