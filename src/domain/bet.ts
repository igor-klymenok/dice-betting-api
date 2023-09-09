import {Dice} from "./dice.js";

interface BetObject {
    id: number;
    userId: number;
    betAmount: number;
    chance: number;
    payout: number;
    isWin?: boolean;
}

export class Bet {
    private _id: number;
    private _userId: number;
    private _betAmount: number;
    private _chance: number;
    private _payout: number;
    private _isWin: boolean | null;

    constructor(object: BetObject) {
        this._id = object.id;
        this._userId = object.userId;
        this._betAmount = object.betAmount;
        this._chance = object.chance;
        this._payout = object.payout;
        this._isWin = typeof object.isWin === 'boolean' ? object.isWin : null;
    }

    static createWithoutId(object: Omit<BetObject, 'id'>): Bet {
        return new Bet({
            id: -1,
            userId: object.userId,
            betAmount: object.betAmount,
            chance: object.chance,
            payout: object.payout
        })
    }

    public get id(): number {
        return this._id;
    }

    public get userId(): number {
        return this._userId;
    }

    public get betAmount(): number {
        return this._betAmount;
    }

    public get chance(): number {
        return this._chance;
    }

    public get payout(): number {
        return this._payout;
    }

    get isWin(): boolean | null {
        return this._isWin;
    }

    placeBet(userBalance: number, dice: Dice) {
        if (this._betAmount > userBalance) {
            throw new Error('Insufficient balance')
        }

        let deal = userBalance;
        deal -= this._betAmount;

        let diceResult = dice.roll().value;

        if (diceResult <= Math.round(this._chance * 6)) {
            deal += this._betAmount;
            deal += this._payout;
            this._isWin = true;
        } else {
            this._isWin = false;
        }

        return deal;
    }
}