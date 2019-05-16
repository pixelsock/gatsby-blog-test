import React from 'react'
import { Link } from 'gatsby'



import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (

    <Layout>
      <Head title="Home" />
      <h1>Hello,</h1>
      <h2> I'm Nick, a full-stack developer living in beautiful Charlotte.</h2>
      <p> Need an agency? Call</p>
      <p><Link to="/contact">Saturday Brand Communications</Link></p>
    </Layout>

  )
}

export default IndexPage
