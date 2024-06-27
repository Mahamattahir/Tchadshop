import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,



} from 'mdb-react-ui-kit';
import Layout from './Layout';

 function ProfilePage() {
    return (
        <section >
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody style={{ backgroundColor: 'rgba(240, 240, 241, 0)', border: 'none' }} className="text-center ">
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />

                                <div className="d-flex justify-content-center mb-2">

                                    <MDBBtn outline className="ms-1">Message</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>


                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Nom</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"><input type='text' name='name' placeholder='nom' /></MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"><input type='email' name='email' placeholder='email' /></MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Numero</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"><input type='Tel'name='numero' placeholder='numero'  /></MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />


                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Address</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"><input type='text' name='address' placeholder='address' /></MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>


                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
function Profil(){
    return (
       <Layout >
        <div className='profilSm'>
        {ProfilePage()}
        </div>
       </Layout>
    )
}
export default Profil;
