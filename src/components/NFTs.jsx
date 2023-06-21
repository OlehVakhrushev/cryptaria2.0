import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import {useGetAssetsQuery, useGetNftsQuery} from '../services/openSeaApi';
import Loader from './Loader';

const NFTs = ({ simplified }) => {
  const count = simplified ? 5 : 10;
  const { data: assetsList, isFetching } = useGetNftsQuery(count);
  const [assets, setAssets] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setAssets(assetsList?.data?.assets);

    const filteredData = assetsList?.assets.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
    );

    setAssets(filteredData);
  }, [assetsList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
      <>
        {!simplified && (
            <div className="search-nft">
              <Input
                  placeholder="Search NFT"
                  onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              />
            </div>
        )}
        <Row gutter={[32, 32]} className="nft-card-container">
          {assets?.map((asset) => (
              <Col xs={24} sm={12} lg={6} className="nft-card" key={asset.id}>
                <Link key={asset.id} to={`/nft/${asset.id}`}>
                  <Card
                      title={asset.name}
                      extra={<img className="nft-image" src={asset.image_thumbnail_url} alt="NFT" />}
                      hoverable
                  >
                    <p>Description: {asset.description || 'No description available'}</p>
                    <p>External Link: <a href={asset.external_link}>{asset.external_link}</a></p>
                  </Card>
                </Link>
              </Col>
          ))}
        </Row>
      </>
  );
};

export default NFTs;
