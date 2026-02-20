import Toplist from "@/components/toplist/toplist"

export default function Hotels() {
    return (
        <>
            <h1>Hello from hotels</h1>
            <Toplist
                casinos={casinosByRating}
                title="Bästa Casinona"
                subtitle="Hello from subtitle"
            />
        </>
    )
}