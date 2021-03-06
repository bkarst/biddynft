import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../components/pages/home'
import axios from 'axios'
import Link from 'next/link'
import BiddyHeader from '../components/menu/BiddyHeader';
import PollListing from '../components/components/PollListing';
import Create from '../components/pages/create';
import constants from '../src/constants';

export default function Home() {
  const [polls, setPolls] = useState([]);
  useEffect(() => {
    axios.get(constants.API_URL + '/api/polls').then(response => {
      console.log(response.data)
      setPolls(response.data)
    })
    // Update the document title using the browser API
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BiddyHeader />
      <div>
  
      <section className='container' style={{marginTop: 30}}>

      <div className='row'>
          <div className='col-lg-12'>
          <div>
            
        <div>
            Polls
        </div>
        <div>
        <Link href="/pollform">
          New Poll
        </Link>
        </div>
        <div>
        { polls.map( (poll, index) => (          
            <PollListing key={index} poll={poll} pollOptions={poll.poll_options} />
          ))
        }
      </div>
        <div>
            
        </div>
      </div>
            </div>
        </div>
        </section>
        </div>
      
    </div>
  )
}
