import * as React from "react";
import "./Branches.css";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
`;

export default function Branches() {
    const places = [
        {
            id: 1,
            name: "Whagarei",
            address: "Corner Walton Street and Maunu Road, Whangarei",
            contact: "0800 887 637"
        },
        {
            id: 2,
            name: "Westgate",
            address: "Corner of Fred Taylor Drive & Kakano Road, Westgate",
            contact: "0800 887 637"
        },
        {
            id: 3,
            name: "North Shore",
            address: "201 Archers Road, Wairau Valley, Auckland",
            contact: "0800 887 637"
        },
        {
            id: 4,
            name: "Panmure",
            address: "1 Morrin Rd, Panmure",
            contact: "0800 887 637"
        },
        {
            id: 5,
            name: "Otahuhu",
            address: "1120 Great South Road, Otahuhu, Auckland",
            contact: "0800 887 637"
        },
        {
            id: 6,
            name: "Penrose",
            address: "1000 - 1008 Great South Road, Penrose",
            contact: "0800 887 637"
        },
        {
            id: 7,
            name: "Botany",
            address: "183 Harris Road, East Tamaki",
            contact: "0800 887 637"
        },
        {
            id: 8,
            name: "Tauranga",
            address: "26 Hull Road, Mt Maunganui, Tauranga",
            contact: "0800 887 637"
        },

    ]

    const placeList = places.map(place =>
        <div className="kard">
            <h3> {place.name} </h3>
            <h4> {place.contact} </h4>
            <p> {place.address}</p>
        </div>
    )
    return (
        <Container>
            <div className="branches">

                <h1> Where Your <span> Dream Begins</span> </h1>

                <div className="rrow">
                    {placeList}
                </div>

            </div>
            <div className="info">
                <h3>Call us on <span> 0800 887 637 </span> for all enquiries.
                    Search for a Turners branch by zooming in on the map and clicking for more information, or by using the menu.

                    Turners operates nationally, with branches conveniently located throughout New Zealand.

                    Our business falls into 4 broad business divisions:

                    Cars, Trucks & Machinery, Damaged Vehicles, General Goods

                    For further contact information, <a href=""> click here </a> </h3>
            </div>

        </Container>
    );
}