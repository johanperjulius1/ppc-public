import Toplist from "@/components/toplist/toplist";
import { casinosByNoBonusTurnover } from "@/lib/casinos-data";

export default function CasinoMedBonusUtanOmsattningskrav() {
    return (
        <Toplist
            items={casinosByNoBonusTurnover}
            title="Casino med Bonus utan Omsättningskrav"
            subtitle="Bästa casinona med bonusar utan omsättningskrav"
        />
    );
}
