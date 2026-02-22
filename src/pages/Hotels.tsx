import Toplist from "@/components/toplist/toplist";
import { hotelsByRating } from "@/lib/hotels-data";

export default function Hotels() {
    return (
        <>
            <h1>Hello from hotels</h1>
            <Toplist
                items={hotelsByRating}
                title="Bästa Hotellen"
                subtitle="Hello from subtitle"
            />
        </>
    )
}