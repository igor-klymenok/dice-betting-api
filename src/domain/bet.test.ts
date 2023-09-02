import {Dice} from "./dice";
import {Bet} from "./bet";

describe('Bet', () => {
    it('should win bet', () => {
        let bet = new Bet({
            id: 1,
            userId: 1,
            betAmount: 10,
            payout: 20,
            chance: 0.3,
        })

        let dice = new Dice();
        jest.spyOn(dice, 'value', 'get').mockReturnValue(2);

        let result = bet.placeBet(40, dice);

        expect(result).toEqual(60)
        expect(bet.isWin).toEqual(true)
    })

    it('should lose bet', () => {
        let bet = new Bet({
            id: 1,
            userId: 1,
            betAmount: 10,
            payout: 20,
            chance: 0.3,
        })

        let dice = new Dice();
        jest.spyOn(dice, 'value', 'get').mockReturnValue(4);

        let result = bet.placeBet(40, dice);

        expect(result).toEqual(30)
        expect(bet.isWin).toEqual(false)
    })

    it('should reject you with placing a bet due to insufficient balance', () => {
        let bet = new Bet({
            id: 1,
            userId: 1,
            betAmount: 10,
            payout: 20,
            chance: 0.3,
        })

        let dice = new Dice();

        expect(() => bet.placeBet(5, dice)).toThrowError('Insufficient balance')
    })
})