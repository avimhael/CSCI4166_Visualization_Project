import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'

const FAQScreen = () => {
    return (
        <>
<Accordion>
    <h1>Frequently Asked Questions</h1>
    <br></br>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Why does this exist? Isn't there something similar by Natural Resources Canada?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Yes!
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Will there be further development on this? Or was it just for a Dalhousie Computer Science class?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>At the moment Covid Supply Co. only ships within Canada</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
       How can I get some more information on Dalhousie Computer Science and visualization tools?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>We can process PayPal payments as well as credit card payments handled by Shopify</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Wait a minute, who are you?!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Find out more about me here :</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        </>
    )
}

export default FAQScreen