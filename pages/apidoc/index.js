import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import Header from '@app_train/src/component/header'
import Footer from '@app_train/src/component/footer'

export default function index() {
  return (
    <div>
        <Header/>
        <MDBContainer>
            <MDBCard>
                <MDBRow>
                    <MDBCol>
                        <MDBCardBody>
                            <MDBCardTitle>

                            </MDBCardTitle>
                            <MDBCardText>
                                <small>POST :  http://localhost:3200/api/</small>
                            </MDBCardText>
                            <MDBCardText>
                                <small>GET :  http://localhost:3200/api/</small>
                            </MDBCardText>
                            <MDBCardText>
                                <small>DELETE :  http://localhost:3200/api/</small>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>

        <Footer/>
    </div>
  )
}
