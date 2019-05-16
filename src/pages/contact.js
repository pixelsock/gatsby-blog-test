import React from 'react'

import Layout from '../components/layout'

import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact Us" />
      <p>Here is some contact information for my site.</p>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default ContactPage
