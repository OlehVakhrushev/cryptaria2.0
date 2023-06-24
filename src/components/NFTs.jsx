import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Card, Row, Col, Input, Tooltip} from 'antd';
import {useGetSalesNftsQuery} from '../services/openSeaApi';
import Loader from './Loader';
import data from '../data.json'
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';




const NFTs = ({ simplified }) => {
  const days = simplified ? 7 : 30;
  // const { data: assetsList, isFetching } = useGetSalesNftsQuery();
  const [nfts, setNfts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const [fetchingData, setFetchingData] = useState(data.data.collections)

  // console.log(assetsList.collections[0].logo)


  // const url = 'https://top-nft-collections.p.rapidapi.com/api/get-collections-ranking';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'b7aff88e59msh5b031e0bffc4079p13e4d9jsnb583e7e34921',
  //     'X-RapidAPI-Host': 'top-nft-collections.p.rapidapi.com'
  //   }
  // };
  // async function fetchData() {
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json().then(data => setFetchingData(data));
  //     // console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  // useEffect(() => {
  //   fetchData()
  // }, [])

  // useEffect(() => {
  //   if (fetchingData) {
  //     const filteredData = searchTerm === ''
  //         ? fetchingData
  //         : fetchingData?.filter((item) =>
  //             item.name.toLowerCase().includes(searchTerm)
  //         );
  //     setNfts(filteredData);
  //   }
  // }, [fetchingData]);

  // use this search if Api expired

  useEffect(() => {
    const filteredData = searchTerm === ''
        ? data.data.collections
        : data.data.collections.filter((item) =>
            item.name.toLowerCase().includes(searchTerm)
        );
    setNfts(filteredData);
  }, [searchTerm]);


 // when free API frail expair comment useEffect(), fetch

  // useEffect(() => {
  //   if (assetsList) {
  //     const filteredData = searchTerm === ''
  //         ? assetsList
  //         : assetsList?.filter((item) =>
  //             item.name.toLowerCase().includes(searchTerm)
  //         );
  //
  //     setNfts(filteredData);
  //   }
  // }, [assetsList, searchTerm]);

  // if (isFetching) return <Loader />;

  return (
      <>
        <div className="search-crypto">
          <Input
              placeholder="Search NFT"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
          <Row gutter={[32, 32]} className="crypto-card-container">
            {nfts?.map((nft) => (
                <Col xs={24} sm={12} lg={6} className="nft-card" key={nft.name}>
                  {/*<Link key={nft.id} to={`/nft/${nft.id}`}>*/}
                  <Card
                      title={
                        nft.website ? (
                            <a href={nft.website} className='custom-link'>
                              <EyeOutlined className='custom-eye-icon custom-link' hoverable />
                              <span>Show me</span>
                            </a>
                        ) : (
                            <div>
                              <EyeInvisibleOutlined className='custom-eye-invisible-icon' />
                              <span>Show me</span>
                            </div>
                        )
                      }
                      extra={<img className="nft-image" src={nft.logo} alt="NFT" />}
                      hoverable
                  >
                      {/*<p>Collection: {nft.collection || 'No description available'}</p>*/}
                    <p>Name: {nft.name}</p>
                    <p>Price: $ {nft.floorPriceUsd}</p>
                    <p>Owners: {nft.owners}</p>
                    <p>Market Cap: $ {nft.marketCapUsd}</p>
                    </Card>
                  {/*</Link>*/}
                </Col>
            ))}
          </Row>

        {/*{!simplified && (*/}
        {/*    <div className="search-crypto">*/}
        {/*      <Input*/}
        {/*          placeholder="Search NFT"*/}
        {/*          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*)}*/}
        {/*<Row gutter={[32, 32]} className="crypto-card-container">*/}
        {/*  {nfts?.map((nft) => (*/}
        {/*      <Col xs={24} sm={12} lg={6} className="crypto-card" key={nft.id}>*/}
        {/*        <Link key={nft.id} to={`/nft/${nft.id}`}>*/}
        {/*          <Card*/}
        {/*              title={nft.nft_name}*/}
        {/*              extra={<img className="nft-image" src={nft.nft_name} alt="NFT" />}*/}
        {/*              hoverable*/}
        {/*          >*/}
        {/*            <p>Collection: {nft.collection || 'No description available'}</p>*/}
        {/*            <p>External Link: <a href={nft.nft_url}>{nft.nft_url}</a></p>*/}
        {/*          </Card>*/}
        {/*        </Link>*/}
        {/*      </Col>*/}
        {/*  ))}*/}
        {/*</Row>*/}
      </>
  );
};

export default NFTs;
