import { Address } from './address';
import { Credential } from './credential';
import { CreditCard } from './creditcard';
import { PhoneNumber } from './phonenumber';

export class MarketPlaceUser {
    mpuid: number;
    firstname: string;
    lastname: string;
    pseudoname: string;
    email: string;
    newMessage: boolean;
    address: Address;
    creditCard: CreditCard;
    phoneNumber: PhoneNumber;
}
