import React, { useState } from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBInput,
} from "mdb-react-ui-kit";
import Layout from "./Layout";
import { Inertia } from "@inertiajs/inertia"; // Import correct

function ProfilePage({ user }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
    });

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpload = () => {
        const data = new FormData();
        data.append("profile_photo", selectedFile);

        Inertia.post("/profile/update-photo", data, {
            forceFormData: true,
            onSuccess: () => {
                setSelectedFile(null);
            },
        });
    };

    const handleUpdateProfile = () => {
        Inertia.post("/profile/update-info", formData);
    };

    return (
        <section>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody
                                style={{
                                    backgroundColor: "rgba(240, 240, 241, 0)",
                                    border: "none",
                                }}
                                className="text-center "
                            >
                                <MDBCardImage
                                    src={
                                        user.profile_photo_path
                                            ? `/storage/${user.profile_photo_path}`
                                            : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    }
                                    alt="profil"
                                    className="rounded-circle"
                                    style={{ width: "150px", height: "150px" }}
                                    fluid
                                />
                                <div className="d-flex justify-content-center mb-2">
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                    />

                                    <MDBBtn
                                        outline
                                        className="ms-1"
                                        onClick={handleUpload}
                                    >
                                        Change Photo
                                    </MDBBtn>
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
                                        <MDBInput
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBInput
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <div className="">
                                <div className="BtnContact">
                                    <button

                                        className="btn py-2 px-4"
                                        onClick={handleUpdateProfile}
                                    >
                                        Enregistrer
                                    </button>
                                </div>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

function Profil({ user }) {
    return (
        <Layout>
            <div className="profilSm">
                <ProfilePage user={user} />
            </div>
        </Layout>
    );
}

export default Profil;
