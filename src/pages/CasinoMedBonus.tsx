import Toplist from "@/components/toplist/toplist";
import { casinosByHighestBonusAmount } from "@/lib/casinos-data";

export default function CasinoMedBonus() {
    return (
        <Toplist
            items={casinosByHighestBonusAmount}
            title="Casino med Bonus"
            subtitle="Bästa casinona med generösa bonusar"
        />
    );
}
