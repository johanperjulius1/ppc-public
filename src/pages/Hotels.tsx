import Toplist from "@/components/toplist/toplist";
import { hotelsByRating } from "@/lib/hotels-data";

export default function Hotels() {
    return (
        <>
            <Toplist
                items={hotelsByRating}
                title="Bästa Hotellen med resort"
                // subtitle="Hello from subtitle"
            />
            <p style={{ maxWidth: "960px", margin: "2rem auto", padding: "0 1.5rem", lineHeight: 1.6 }}>
                Vi listar världens mest kända resort-hotell där du kan kombinera lyxiga boenden med  spa och underhållning. Våra rekommendationer bygger på recensioner, faciliteter och spelutbud så att du hittar resan som passar dig bäst.
            </p>
        </>
    )
}