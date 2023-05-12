import React from 'react'
import Header from '@app_train/src/component/header'
import Footer from '@app_train/src/component/footer'
import { MDBCard, MDBCardTitle, 
         MDBCardText, MDBCardBody, 
         MDBCardImage, MDBRow, MDBCol, 
         MDBContainer } from 'mdb-react-ui-kit';

export default function ssr() {
  return (
    <div>
            <Header />
            <MDBContainer className="mt-5 mb-5">
                <MDBCard style={{ maxWidth: '100%' }}>
                   <MDBRow className='g-0'>
                       <MDBCol md='4'>
                          <MDBCardImage src={props?.img} alt='...' fluid />
                       </MDBCol>
                       <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>{props?.title}</MDBCardTitle>
                                <MDBCardText>
                                    <small className='text-muted'>{props?.description}</small>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
            <Footer />
        </div>
  )
}

export async function getServerSideProps() {
    return {
        props: {
            title: "SSR",
            img: "../HW.png"
        }
    }
}