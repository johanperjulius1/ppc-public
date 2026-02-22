import { getCategoryData } from './categories-utils';

const casinoMedBonusData = getCategoryData('/casino-med-bonus/casino-med-bonus.md');
const casinoMedBonusUtanOmsattningskravData = getCategoryData('/casino-med-bonus-utan-omsattningskrav/casino-med-bonus-utan-omsattningskrav.md');
const casinoMedBankidData = getCategoryData('/casino-med-bankid/casino-med-bankid.md');
const casinoMedFreeSpinsData = getCategoryData('/casino-med-free-spins/casino-med-free-spins.md');
const casinoMedFreeSpinsUtanKravData = getCategoryData('/casino-med-free-spins-utan-omsattningskrav/casino-med-free-spins-utan-omsattningskrav.md');
const allaCasinonData = getCategoryData('/alla-casinon/alla-casinon.md');
const casinoMedSwishData = getCategoryData('/casino-med-swish/casino-med-swish.md')
const nyaCasinonData = getCategoryData('/nya-casinon/nya-casinon.md')
export {
    casinoMedBonusData,
    casinoMedBankidData,
    casinoMedFreeSpinsData,
    allaCasinonData,
    casinoMedSwishData,
    casinoMedBonusUtanOmsattningskravData,
    casinoMedFreeSpinsUtanKravData,
    nyaCasinonData
};
