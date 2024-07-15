import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inertia } from "@inertiajs/inertia";
import { usePage, Link } from "@inertiajs/react";

function MonCompte() {
    const { auth } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        Inertia.post("/logout");
    };

    return (
        <Dropdown>
            <Dropdown.Toggle
                type="button"
                className="d-flex btn btn-sm bg-transparent border-0 dropdown-toggle mt-2 ml-1"
                onClick={toggleDropdown}
            >
                {auth && auth.user && auth.user.profile_photo_path ? (
                    <img
                        src={`/storage/${auth.user.profile_photo_path}`}
                        alt="Profile"
                        className="rounded-circle"
                        style={{ width: "30px", height: "30px" }}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faUser}
                        className="d-none d-lg-inline fa-lg border-0"
                    />
                )}
                <div
                    className="d-flex btn btn-md text-dark bg-transparent border-0 gap-2 d-lg-none"
                    style={{ marginTop: "-10px", fontSize: "16px" }}
                >
                    {auth && auth.user && auth.user.profile_photo_path ? (
                        <img
                            src={`/storage/Images${auth.user.profile_photo_path}`}
                            alt="Profile"
                            className="rounded-circle"
                            style={{ width: "30px", height: "30px" }}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faUser}
                            className="d-lg-none fa-md border-0"
                        />
                    )}

                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu show={isOpen} className="dropdown-menu-center">
                {auth && auth.user ? (
                    <div>
                        <Dropdown.Item  as={Link} style={{ marginTop: "-4px", border: "none" }} href="/profil" className="dropdown-item ">
                           Proil
                        </Dropdown.Item>

                        <Dropdown.Item
                         as={Link}
                            onClick={handleLogout}
                            className="dropdown-item"
                        >
                            Se déconnecter
                        </Dropdown.Item>
                    </div>
                ) : (
                    <>
                        <Dropdown.Item
                            href="/inscription"
                            as={Link}
                            className="dropdown-item"
                        >
                            S'inscrire
                        </Dropdown.Item>
                        <Dropdown.Item
                            href="/connexion"
                            as={Link}
                            className="dropdown-item"
                        >
                            Connexion
                        </Dropdown.Item>
                    </>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default MonCompte;
