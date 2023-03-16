import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import SVG from 'react-inlinesvg'
import { RootState } from '../../store/myTypes'
import { Container, Row, Col } from 'react-bootstrap'
import TitleBox from '../titleBox'

export interface ContactProps {
  contact: {icon:string, label: string, link: string}[]
}

export const Contact: React.FC<ContactProps> = props => (
    <Container className="section-wrapper">
        <Row id="contact">
            <Col className="shadow-sm p-5 bg-light">
              <Row>
                    <Col>
                      <TitleBox
                        headline='Contact'
                        box="title-box-2"
                        titleType="title-left"/>  
                    </Col>
              </Row>
              <Row>
                <Col md={6}>
                    <img src='img/portfolioimg.jpeg' alt='Contact'></img>  
                </Col>
                <Col md={6}>
                    {props.contact &&
                  props.contact.map((c) => {
                      return (
                        <Row style={{marginBottom: '30px'}}>
                          <Col>
                          <SVG src={c.icon}/>
                          <a href={c.link} style={{marginLeft: '10px', fontSize: '1.125rem',textDecoration: 'none'}}>
                            <span style={{fontSize: '1.125rem'}}>{c.label}</span>
                          </a>
                          </Col>
                      </Row>
                      )
                  })}
                </Col>
              </Row>
            </Col>
        </Row>
    </Container>
)

const mapStateToProps = (state: RootState) => {
    return {
      contact: state.portfolio.contact,
  }
}

export default compose(connect(mapStateToProps))(Contact)
