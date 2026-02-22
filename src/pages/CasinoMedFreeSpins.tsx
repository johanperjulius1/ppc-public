import Toplist from "@/components/toplist/toplist";
import { casinosByFreeSpins } from "@/lib/casinos-data";

export default function CasinoMedFreeSpins() {
    return (
        <Toplist
            items={casinosByFreeSpins}
            title="Casino med Free Spins"
            subtitle="Bästa casinona med free spins erbjudanden"
        />
    );
}
