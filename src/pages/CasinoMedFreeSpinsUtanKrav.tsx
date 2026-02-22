import Toplist from "@/components/toplist/toplist";
import { casinosByFreeSpinsTurnover } from "@/lib/casinos-data";

export default function CasinoMedFreeSpinsUtanKrav() {
    return (
        <Toplist
            items={casinosByFreeSpinsTurnover}
            title="Casino med Free Spins utan Krav"
            subtitle="Bästa casinona med free spins utan omsättningskrav"
        />
    );
}
