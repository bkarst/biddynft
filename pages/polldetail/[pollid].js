import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import ItemDetail from '../../components/pages/ItemDetail'
import axios from 'axios'
import { useRouter } from 'next/router'
import BiddyHeader from '../../components/menu/BiddyHeader';
import EditPollForm from '../../components/components/EditPollForm'
import constants from '../../src/constants';

export async function getServerSideProps(context) {
  const pollid = context.params.pollid;
  console.log('pollid', pollid)
  // const { nftid } = router.query
  console.log(constants.API_URL + `/api/polls/` + pollid)
  const res = await fetch(constants.API_URL + `/api/polls/` + pollid)
  console.log('res', res)
  const data = await res.json()
//   const nft = data[0];
//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }
  
  return {
    props: { poll: data }, // will be passed to the page component as props
  }
}


export default function NftDetail({poll}) {
  
  const [nftListings, setNftListings] = useState([]);
  const router = useRouter()
  
  console.log(poll)
  

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BiddyHeader />
      <EditPollForm poll={poll} />
      
    </div>
  )
}