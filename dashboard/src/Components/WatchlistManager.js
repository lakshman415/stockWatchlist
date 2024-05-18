import React, { useState } from 'react';
import StockButtons from './Companies';
import Watchlist from './Watchlist';

const WatchlistManager = ({ companies }) => {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchlist = (company) => {
    setWatchlist([...watchlist, company]);
  };

  const handleRemoveFromWatchlist = (symbol) => {
    setWatchlist(watchlist.filter((company) => company.symbol !== symbol));
  };

  return (
    <div>
      <StockButtons companies={companies} onAddToWatchlist={handleAddToWatchlist} />
      <Watchlist watchlist={watchlist} onRemove={handleRemoveFromWatchlist} />
    </div>
  );
};

export default WatchlistManager;