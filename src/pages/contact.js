import React from 'react'

import Layout from '../components/layout'

import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact Us" />
      <p>Here is some contact information for my site.</p>
      <form name="contact" netlify>
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default ContactPage
