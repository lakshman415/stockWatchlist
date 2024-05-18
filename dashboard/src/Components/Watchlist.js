import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Watchlist.css';

const Watchlist = ({ company, onRemove }) => {
  const handleRemoveFromWatchlist = () => {
    onRemove(company.symbol);
  };

  return (
    <Card className="watchlist-card">
      <Card.Body>
        <Card.Title>{company.name}</Card.Title>
        <Card.Text>
          <strong>{company.symbol}</strong>
        </Card.Text>
        <Card.Text>
          <small>{company.price}</small>
        </Card.Text>
        <Button variant="danger" onClick={handleRemoveFromWatchlist}>
          Remove from Watchlist
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Watchlist;