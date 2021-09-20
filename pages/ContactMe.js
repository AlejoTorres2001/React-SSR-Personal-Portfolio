import React from 'react'
import Layout from '../components/Layout'
import EmailForm from '../components/EmailForm'
const ContactMe = () => {

    return (
        <Layout isHome={true}>

            <EmailForm></EmailForm>
        </Layout>
    )
}

export default ContactMe
