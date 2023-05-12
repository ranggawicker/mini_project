import React from 'react'
import Header from '@app_train/src/component/header'
import Footer from '@app_train/src/component/footer'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function ssg() {
  return (
    <div>ssg</div>
  )
}

export async function getStaticPath(context) {
    const [err, data] = await fetch ('https://jsonplaceholder.typicode.com/posts')
                        .then ((response) => {
                            return [null, response]
                        }).catch((e) => {
                            return [e, null];
                        });
    
    if (e) {
        return {
            paths: [],
            fallback: false,
        };
    }
    let paths = [];

    if (Array.isArray(data) && data.length > 0) {
        paths = data.map((post) => ({
            params: {
                ssg: `${post.id.toString()}`,
            },
        }));
    }

    return {
        paths: paths,
        fallback: false,
    };

}

export async function getStaticProps(context) {
    let data = [];

    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => {
        data = response;
      })
      .catch((err) => {
        data = [];
      });
  
    return {
      props: {
        data,
      },
    };
}