import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useOpenSeaApi } from '../services/openSeaApi';
import Loader from './Loader';

const NFTs = ({ simplified }) => {
  const limit = simplified ? 10 : 100;
  const { data: nftsList, isFetching } = useOpenSeaApi(limit);
  const [nfts, setNFTs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setNFTs(nftsList?.assets);

    const filteredData = nftsList?.assets.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
    );

    setNFTs(filteredData);
  }, [nftsList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {nft?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/nft/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="nft-image" src={currency.iconUrl} alt="NFT" />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default NFT;
