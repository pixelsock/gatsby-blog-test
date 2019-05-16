import React from 'react'

import Layout from '../components/layout'

import { Link } from 'gatsby'

import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>About content will show up here.</p>
      <p><Link to="/contact">Want to work with me?</Link></p>

    </Layout>
  )
}

export default AboutPage
