import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import Header from '@app_train/src/component/header';
import Footer from '@app_train/src/component/footer';

export default function ProductDetail({id}) {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [visible, setVisible] = useState(true);
  
    useEffect(() => {
        if(visible) {
            setLoading(true);
            fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((result) => {
                setTimeout(() => {
                    setData(result);
                    setLoading(false);
                }, 4000)

            }).catch((err) => {
                setLoading(false);
            })
        }
    }, [visible]);

    console.log(data)

   return (
    <div>
        <Header/>
        <MDBContainer className='mt-5 mb-5'>
            {
                loading ? 'LOADING' :
                Array.isArray(data) && data.length > 0 && data.map((item) => {
                    if(item.userId == id) {
                        return (
                            <MDBCard style={{maxWidth: '100%'}}>
                                <MDBRow>
                                    <MDBCol>
                                        <MDBCardBody>
                                            <MDBCardTitle>
                                                {item.title}
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <small >User ID:{item.userId}</small>
                                            </MDBCardText>
                                            <MDBCardText>
                                                <small>{item.body}</small>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        )
                    }
                })
            }
        </MDBContainer>
            <Footer />
    </div>
  )

}



export async function getServerSideProps(ctx) {
    let {id} = ctx.params

    return {
        props: {
            id
        }
    }
}
