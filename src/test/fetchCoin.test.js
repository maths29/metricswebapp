import fetchMock from 'jest-fetch-mock';
import fetchCoin from '../services/fetchCoin';

// Mocking the fetch function
jest.mock('../services/fetchCoin');

describe('fetchCoin Function', () => {
  const mockCoinData = {
    id: 'bitcoin',
    name: 'Bitcoin',
    market_data: {
      current_price: { usd: 29488 },
      market_cap_rank: 1,
      market_cap: { usd: 574053650480 },
      high_24h: { usd: 29653 },
      low_24h: { usd: 29144 },
      price_change_24h: 114.427,
      market_cap_change_24h: 2412180738,
      total_supply: 21000000,
      max_supply: 21000000,
      circulating_supply: 19457175,
    },
    image: { large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' },
    description: {
      en: 'Updated Bitcoin description here',
    },
  };

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetches and processes coin data correctly', async () => {
    fetchCoin.mockResolvedValue(mockCoinData); // Mock the fetchCoin function

    const coinData = await fetchCoin('bitcoin');

    expect(coinData).toEqual(mockCoinData); // Use the mockCoinData here
  });

  it('handles fetch error', async () => {
    fetchCoin.mockRejectedValue(new Error('Fetch error')); // Mock the fetchCoin function

    await expect(fetchCoin('bitcoin')).rejects.toThrow('Fetch error');
  });
});
