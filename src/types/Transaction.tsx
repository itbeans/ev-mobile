import ChargingStation from '../types/ChargingStation';
import Consumption from './Consumption';
import User from './User';

export enum InactivityStatus {
  INFO = 'I',
  WARNING = 'W',
  ERROR = 'E'
}

export default interface Transaction {
  id: number;
  siteID: string;
  siteAreaID: string;
  connectorId: number;
  tagID: string;
  userID: string;
  chargeBoxID: string;
  signedData?: any;
  user?: User;
  stop?: {
    tagID: string;
    userID: string;
    user?: User;
    meterStop: number;
    price: number;
    roundedPrice: number;
    priceUnit: string;
    pricingSource: string;
    stateOfCharge: number;
    totalInactivitySecs: number;
    extraInactivitySecs: number;
    inactivityStatus?: InactivityStatus;
    totalConsumptionWh: number;
    totalDurationSecs: number;
    timestamp: Date;
    transactionData?: any;
    signedData?: any;
  };
  remotestop?: {
    timestamp: Date;
    tagID: string;
    userID: string;
  };
  refundData?: {
    refundId: string;
    refundedAt: Date;
    type: any;
    reportId?: string;
    status?: any;
  };
  chargeBox?: ChargingStation;
  meterStart: number;
  timestamp: Date;
  price: number;
  roundedPrice: number;
  priceUnit: string;
  pricingSource: string;
  stateOfCharge: number;
  timezone: string;
  currentTimestamp?: Date;
  currentTotalInactivitySecs: number;
  currentInactivityStatus?: InactivityStatus;
  currentStateOfCharge: number;
  numberOfMeterValues: number;
  currentInstantWatts: number;
  currentConsumptionWh?: number;
  currentCumulatedPrice: number;
  currentTotalConsumptionWh: number;
  currentTotalDurationSecs: number;
  currentSignedData?: number;
  currentVoltage?: number;
  currentVoltageL1?: number;
  currentVoltageL2?: number;
  currentVoltageL3?: number;
  currentVoltageDC?: number;
  currentAmperage?: number;
  currentAmperageL1?: number;
  currentAmperageL2?: number;
  currentAmperageL3?: number;
  currentAmperageDC?: number;
  uniqueId?: string;
  errorCode?: number;
  values?: Consumption[]
}
